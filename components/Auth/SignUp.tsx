import Link from 'next/link';
import React from 'react';
import SignUpForm from './SignUpForm';

const SignUp = () => {
  return (
    <div className="py-[10%] px-[20%]">
      <h3 className="text-3xl text-indigo-900 bold font-extrabold">
        Sign up today. It just takes minutes!
      </h3>
      <p className="text-slate-400 mb-12">
        Create your GlobalAloha account by entering the information below.
      </p>
      <SignUpForm />

      {/* <p>
        Don't have an account yet? <Link href="/signup">Sign Up</Link>
      </p> */}
      <p>
        Already a member?
        <Link href="/login"> Log In</Link>
      </p>
    </div>
  );
};

export default SignUp;
