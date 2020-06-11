import { useQuery } from '@apollo/react-hooks';

import { useAuth } from '../AuthProvider';
import { ME } from '../api/queries';

export const useCurrentUser = () => {
  const { token } = useAuth();
  const { data } = useQuery(ME, { variables: { token } });

  return data?.me;
};
