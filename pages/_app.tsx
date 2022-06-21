import '../styles/globals.css';
import '../styles/antd.css';
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';
import Layout from '../shared-component/Layout';
import { useRouter } from 'next/router';
import ProtectedLayout from '../shared-component/ProtectedLayout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.asPath == '/login') {
    return <Component {...pageProps} />;
  }
  if (router.asPath == '/signup') {
    return <Component {...pageProps} />;
  }
  if (router.asPath == '/dashboard/activities') {
    return (
      <ProtectedLayout>
        <Component {...pageProps} />
      </ProtectedLayout>
    );
  }
  if (router.asPath == '/dashboard/group') {
    return (
      <ProtectedLayout>
        <Component {...pageProps} />
      </ProtectedLayout>
    );
  }
  if (router.asPath == '/user') {
    return (
      <ProtectedLayout>
        <Component {...pageProps} />
      </ProtectedLayout>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
