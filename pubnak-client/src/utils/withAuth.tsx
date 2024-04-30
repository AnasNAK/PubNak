import { useRouter } from 'next/router';
import React, { useEffect, ComponentType } from 'react';
import { checkAuthentication } from './checkAuthentication'

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
      
        const isAuthenticated = await checkAuthentication();

        if (!isAuthenticated) {
          router.push('/Login'); 
        }
      };

      checkAuth();
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
