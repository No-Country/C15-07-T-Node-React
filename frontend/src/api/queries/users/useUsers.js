import useQuery from '../../../hooks/useQuery';
import { usersServices } from '../../services/use.service';

const useUsers = () => {
  return useQuery(() => usersServices.listUsers());
};

export default useUsers;
