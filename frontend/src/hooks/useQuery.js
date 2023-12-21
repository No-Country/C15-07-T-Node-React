import { useState, useEffect } from 'react';

const useQuery = (request = null, options = {}) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use a variable to track whether the component is unmounted
    let isMounted = true;
    setStatus('loading');
    if (request !== null && isMounted) {
      request()
        .then((response) => {
          if (isMounted) {
            setData(response);
            setStatus('ready');
          }
        })
        .catch((error) => {
          if (isMounted) {
            setError(error);
            setStatus('error');
          }
        });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return {
    isIdle: status === 'idle',
    isLoading: status === 'loading',
    isReady: status === 'ready',
    isError: status === 'error',
    error,
    data,
  };
};

export default useQuery;
