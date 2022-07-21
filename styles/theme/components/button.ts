import type { ComponentStyleConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const buttonStyles: ComponentStyleConfig = {
  baseStyle: {
    flexShrink: 0,
    fontWeight: 500,
    textTransform: 'uppercase',
    borderRadius: '10px',
    _focus: {
      boxShadow: 'none',
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
        bgColor: mode('var(--color-bg-red)', 'var(--color-black-red)')(props),
      },
      _active: {
        color: 'white',
        bgColor: 'var(--color-red)',
      },
      _disabled: {
        color: 'var(--color-bg-text)',
        bgColor: 'var(--color-white)',
      },
    }),
    secondary: (props: StyleFunctionProps) => ({
      color: 'var(--color-red)',
      bgColor: mode('var(--color-bg-red)', 'var(--color-black-red)')(props),
      _hover: {
        color: 'white',
        bgColor: 'var(--color-red)',
      },
      _active: {
        color: 'white',
        bgColor: 'var(--color-red)',
      },
      _disabled: {
        color: 'var(--color-bg-text)',
        bgColor: 'var(--color-white)',
        _hover: {
          color: 'var(--color-bg-text)',
          bgColor: 'var(--color-white)',
        },
      },
    }),
    info: (props: StyleFunctionProps) => ({
      color: 'var(--color-bg-text)',
      bgColor: mode('var(--color-white)', 'var(--color-bg-white)')(props),
      border: '2px solid transparent',
      _hover: {
        color: 'var(--color-red)',
        borderColor: 'var(--color-bg-red)',
      },
      _active: {
        color: 'var(--color-red)',
        borderColor: 'var(--color-bg-red)',
      },
    }),
  },
  defaultProps: {
    variant: 'primary',
  },
};
