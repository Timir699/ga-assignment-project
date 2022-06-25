import '../styles/globals.css';
import '../styles/antd.css';
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';
import Layout from '../shared-component/Layout';
import { useRouter } from 'next/router';
import ProtectedLayout from '../shared-component/ProtectedLayout';
import { AuthProvider } from '../auth-context/auth-context';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.asPath == '/login') {
    return  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
  }
  if (router.asPath == '/signup') {
    return <Component {...pageProps} />;
  }
  if (router.asPath == '/dashboard/activities') {
    return (
      <AuthProvider>
        <ProtectedLayout>
          <Component {...pageProps} />
        </ProtectedLayout>
      </AuthProvider>
    );
  }
  if (router.asPath == '/dashboard/group') {
    return (
      <AuthProvider>
      <ProtectedLayout>
        <Component {...pageProps} />
      </ProtectedLayout>
    </AuthProvider>
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
