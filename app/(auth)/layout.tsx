import React, { ReactNode } from 'react'
import { redirect } from 'next/navigation';
import { isAutheticated } from '@/lib/actions/auth.action';

const AuthLayout = async ({children}: {children: ReactNode}) => {
  const isUserAuthenticated = await isAutheticated();
  
  if(isUserAuthenticated) redirect("/");
  return (
    <div className='auth-layout'>
      {children}
    </div>
  )
}

export default AuthLayout
