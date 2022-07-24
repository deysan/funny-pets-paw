import type { ComponentStyleConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const inputStyles: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {
    lg: {
      field: {
        height: '60px',
        paddingX: '20px',
      },
    },
  },
  variants: {
    default: (props: StyleFunctionProps) => ({
      field: {
        color: mode('var(--color-black)', 'white')(props),
        fontSize: '20px',
        lineHeight: '30px',
        bgColor: mode('white', 'var(--color-bg-black)')(props),
        border: '2px solid transparent',
        borderRadius: '20px',
        _placeholder: {
          color: 'var(--color-bg-text)',
        },
        _hover: {
          borderColor: 'var(--color-bg-red)',
        },
        _focus: {
          borderColor: 'var(--color-red)',
        },
      },
    }),
  },
  defaultProps: {
    variant: 'default',
  },
};
