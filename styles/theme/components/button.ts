import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

import type { ComponentStyleConfig } from '@chakra-ui/react';

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
    xl: {
      width: '80px',
      height: '80px',
      borderRadius: '0',
    },
    eye: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
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
        bgColor: 'var(--color-bg-black)',
        _hover: {
          color: 'var(--color-bg-text)',
          bgColor: 'var(--color-bg-black)',
        },
      },
    }),
    info: (props: StyleFunctionProps) => ({
      color: 'var(--color-bg-text)',
      bgColor: mode('var(--color-white)', 'var(--color-bg-black)')(props),
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
    red: {
      color: 'white',
      bgColor: 'var(--color-red)',
      _hover: {
        color: 'var(--color-red)',
        bgColor: 'rgba(255, 134, 142, 0.3)',
      },
    },
    green: {
      color: 'white',
      bgColor: 'var(--color-green)',
      _hover: {
        color: 'var(--color-green)',
        bgColor: 'rgba(151, 234, 185, 0.3)',
      },
    },
    yellow: {
      color: 'white',
      bgColor: 'var(--color-yellow)',
      _hover: {
        color: 'var(--color-yellow)',
        bgColor: 'rgba(255, 210, 128, 0.3)',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
};
