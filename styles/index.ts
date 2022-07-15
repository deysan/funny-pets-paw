import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode, Styles } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode('#1d1d1d', '#ffffff')(props),
      bg: mode('#e5e5e5', '#1d1d1d')(props),
    },
  }),
};

const overrides = {
  config,
  styles,
};

export default extendTheme({
  ...overrides,
  fonts: {
    heading: `'Jost', sans-serif`,
    body: `'Jost', sans-serif`,
  },
});
