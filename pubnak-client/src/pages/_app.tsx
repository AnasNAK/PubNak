import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../store/store';
import RootLayout from '../components/layout/RootLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}

export default MyApp;
