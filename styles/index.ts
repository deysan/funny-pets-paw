import { Styles, mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import { components } from './theme';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles: Styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('var(--color-black)', 'white')(props),
      bg: mode('var(--color-white)', 'var(--color-black)')(props),
    },
  }),
};

const overrides = {
  config,
  styles,
  components,
};

export default extendTheme({
  ...overrides,
  fonts: {
    heading: `'Jost', sans-serif`,
    body: `'Jost', sans-serif`,
  },
});
