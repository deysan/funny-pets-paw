import type { ComponentStyleConfig } from '@chakra-ui/react';

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
  },
  defaultProps: {
    variant: 'primary',
  },
};
