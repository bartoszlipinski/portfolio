import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global-styles';
import Content from './components/content';
import Header from './components/header';
import useTheme from './hooks/use-theme';
import { light, dark } from './theme';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [device, setDevice] = useState();
  const [toggleMobile, setToggleMobile] = useState(false);

  useEffect(() => {
    const resizing = () => {
      if (window.innerWidth >= 750 && device !== 'pc') {
        setDevice('pc');
        if (toggleMobile) setToggleMobile(false);
      } else if (window.innerWidth < 750 && device !== 'mobile') setDevice('mobile');
    };
    window.addEventListener('resize', resizing);
    resizing();
    return () => {
      window.removeEventListener('resize', resizing);
    };
  }, [device, toggleMobile]);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyles />
      <Header
        device={device}
        toggleMobile={toggleMobile}
        setToggleMobile={setToggleMobile}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Content theme={theme} toggleTheme={toggleTheme} device={device} />
    </ThemeProvider>
  );
}

export default App;
