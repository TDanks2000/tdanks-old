import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './assets/theme/default';
import { TopComponent } from './components';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TopComponent />
    </ThemeProvider>
  );
}

export default App;
