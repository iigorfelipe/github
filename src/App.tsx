import { AppRoutes } from './routes';
import AppThemeProvider from './contexts/themeProvider';
import GithubProvider from './contexts/githubProvider';
import Header from './components/Header';

const App = () => {
  return (
    <AppThemeProvider>
      <GithubProvider>
        <Header />
        <AppRoutes />
      </GithubProvider>
    </AppThemeProvider>
  );
};

export default App;
