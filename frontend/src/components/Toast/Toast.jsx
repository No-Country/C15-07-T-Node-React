import toast, { Toaster } from 'react-hot-toast';
import { useUserStore } from '../../store/userStore';
import { useEffect } from 'react';

export const Toast = () => {
  const success = useUserStore((state) => state.registerSuccess);
  const error = useUserStore((state) => state.error);
  const setSuccess = useUserStore((state) => state.setSuccess);

  useEffect(() => {
    if (success) {
      toast.success('Usuario creado');
      setSuccess(null);
    }
    if (!success && error) {
      toast.error('Error al crear usuario:' + error);
      setSuccess(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return <Toaster position='top-center' reverseOrder={false} />;
};
