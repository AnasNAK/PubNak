import { useRouter } from 'next/router';
import React, { useEffect, ComponentType } from 'react';
import { checkAuthentication } from './checkAuthentication'

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
      
        try {
          await checkAuthentication()
          .then((isAuthenticated) => {
            if (!isAuthenticated) {
              router.push('/Login');
            }
          });
        } catch (error) {
          console.error('Authentication check error:', error);
        }
      };

      checkAuth();
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
