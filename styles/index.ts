import { Styles, mode } from '@chakra-ui/theme-tools';
import { ThemeConfig, extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode('#1d1d1d', '#ffffff')(props),
      bg: mode('#f8f8f7', '#1d1d1d')(props),
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
