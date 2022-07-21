import type { ComponentStyleConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const buttonStyles: ComponentStyleConfig = {
  baseStyle: {
    flexShrink: 0,
    fontWeight: 500,
    textTransform: 'uppercase',
    borderRadius: '10px',
    _focus: {
      // boxShadow: 'none',
    },
  },
  sizes: {
    sm: {
      height: '36px',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '2px',
    },
    md: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '2px',
    },
    lg: {
      width: '60px',
      height: '60px',
      borderRadius: '20px',
    },
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      color: 'var(--color-red)',
      bgColor: mode('white', 'var(--color-bg-black)')(props),
      _hover: {
        bgColor: 'var(--color-bg-red)',
      },
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
