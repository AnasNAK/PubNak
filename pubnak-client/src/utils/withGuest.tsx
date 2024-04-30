import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { checkAuthentication } from './checkAuthentication';

const withGuest = <P extends object>(WrappedComponent: React.ComponentType<P>, redirectTo: string = '/dashboard') => {
  return (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const isAuthenticated = await checkAuthentication();

        if (isAuthenticated) {
          router.push(redirectTo);
        }
      };

      checkAuth();
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withGuest;
