import type { ComponentStyleConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const badgeStyles: ComponentStyleConfig = {
  baseStyle: {
    padding: '5px 30px',
    color: 'white',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '30px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    bgColor: 'black',
    borderRadius: '10px',
  },
  variants: {
    primary: {
      color: 'white',
      bgColor: 'var(--color-red)',
    },
    secondary: {
      color: 'var(--color-red)',
      bgColor: 'var(--color-bg-red)',
    },
    link: (props: StyleFunctionProps) => ({
      width: '100%',
      color: 'var(--color-red)',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: 'normal',
      textAlign: 'center',
      textTransform: 'none',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      bgColor: mode('white', '#282828')(props),
    }),
    time: (props: StyleFunctionProps) => ({
      padding: '4px 12px',
      color: mode('var(--color-black)', 'white')(props),
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: 'normal',
      bgColor: mode('white', 'var(--color-black)')(props),
      borderRadius: '5px',
    }),
  },
  defaultProps: {
    variant: 'primary',
  },
};
