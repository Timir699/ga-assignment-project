/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="py-[15%] px-[20%]">
      <h3 className="text-3xl text-indigo-900 bold font-extrabold">Log in</h3>
      <p className="text-slate-400 mb-6">
        Enter the email address and password associated with your GlobalAloha
        account to log in.
      </p>
      <p className="text-black-400">
        Generic Email: i.miah+14@asthait.com <br /> Pass: M@$t3rP@s$2@$1ha{" "}
        <br /> You can also register your account
      </p>
      <LoginForm />

      <p>
        Don't have an account yet? <Link href="/signup">Sign Up</Link>
      </p>
      <p>
        Alternatively, you can visit the
        <Link href="/library/all"> Library</Link> pages
      </p>
    </div>
  );
};

export default Login;
