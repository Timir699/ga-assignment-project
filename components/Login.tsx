import Link from 'next/link';
import React from 'react';
import LoginForm from '../common/LoginForm';

const Login = () => {
  return (
    <div className="py-[20%] px-[20%]">
      <h3 className="text-3xl text-indigo-900 bold font-extrabold">Log in</h3>
      <p className="text-slate-400 mb-12">
        Enter the email address and password associated with your GlobalAloha
        account to log in.
      </p>
      <LoginForm />

      <p>
        Don't have an account yet? <Link href="/signup">Sign Up</Link>
      </p>
      <p>
        Alternatively, you can visit the
        <Link href="/library"> Library</Link> pages
      </p>
    </div>
  );
};

export default Login;
