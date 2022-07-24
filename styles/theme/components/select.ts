import type { ComponentStyleConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const selectStyles: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {
    md: {
      field: {
        paddingX: '10px',
      },
    },
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      field: {
        color: mode('var(--color-black)', 'white')(props),
        fontSize: '16px',
        lineHeight: '24px',
        bgColor: mode('white', 'var(--color-black)')(props),
        border: '2px solid transparent',
        borderRadius: '10px',
        _hover: {
          borderColor: 'var(--color-bg-red)',
        },
      },
    }),
    secondary: (props: StyleFunctionProps) => ({
      field: {
        color: 'var(--color-bg-text)',
        fontSize: '16px',
        lineHeight: '24px',
        bgColor: mode('var(--color-white)', 'var(--color-bg-black)')(props),
        border: '2px solid transparent',
        borderRadius: '10px',
        _hover: {
          borderColor: 'var(--color-bg-red)',
        },
      },
    }),
  },
  defaultProps: {
    variant: 'primary',
  },
};
