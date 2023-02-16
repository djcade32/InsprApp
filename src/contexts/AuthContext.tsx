import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {Auth, Hub} from 'aws-amplify';
import {HubCallback} from '@aws-amplify/core';
import {ActivityIndicator} from 'react-native';
import colors from '../theme/colors';

type UserType = CognitoUser | null | undefined;
type AuthContextType = {
  user: UserType;
  userId: string;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  userId: '',
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);
  const [checkingUser, setCheckingUser] = useState(true);
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    } finally {
      setCheckingUser(false);
    }
  };

  useEffect(() => {
    console.log('Checking if user');
    checkUser();
  }, []);
  useEffect(() => {
    const listener: HubCallback = data => {
      const {event} = data.payload;
      if (event === 'signOut') {
        setUser(null);
      }
      if (event === 'signIn') {
        console.log('Signing in');
        checkUser();
      }
    };
    const listenerToken = Hub.listen('auth', listener);
    return () => {
      listenerToken();
    };
  }, []);

  if (checkingUser) {
    return <ActivityIndicator size={'large'} color={colors.grey} />;
  }

  return (
    <AuthContext.Provider value={{user, userId: user?.attributes?.sub}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
