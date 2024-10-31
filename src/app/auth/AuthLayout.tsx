import React from 'react';
import AuthHeader from '@/components/header/AuthHeader';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return(
        <>
          <AuthHeader />
          <main className='w-full pt-12'>
            {children}
          </main>
        </>
    )
}

export default AuthLayout;