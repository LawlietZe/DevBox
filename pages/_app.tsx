import '../styles/globals.css';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../styles/theme-day';
import darkTheme from '../styles/theme-dark';
import { useDarkMode } from '../hooks/useDarkModel';
import { appContext } from '../context/appcontext';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  // const queryClient = useQueryClient();
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <QueryClientProvider client={queryClient}>
      <appContext.Provider value={{ theme: theme, themeToggler: themeToggler }}>
        <ThemeProvider theme={themeMode}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </appContext.Provider>
    </QueryClientProvider>
  );
}
