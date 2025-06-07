import React from 'react'
import SignupForm from '../components/auth/SignupForm'

const SignupPage = () => {
  return (
    <div className='flex flex-col min-h-screen w-[90%] mx-auto my-12 items-center justify-center'>
      <SignupForm />
    </div>
  )
}

export default SignupPage