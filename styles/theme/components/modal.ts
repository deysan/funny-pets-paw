import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

import type { ComponentStyleConfig } from '@chakra-ui/react';

export const modalStyles: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    overlay: {
      bgColor: 'rgba(29, 29, 29, 0.6)',
    },
    dialog: {
      marginX: 8,
      marginY: 6,
      padding: 5,
      bgColor: mode('var(--color-white)', 'rgba(40, 40, 40, 1)')(props),
      borderRadius: '20px',
    },
  }),
  sizes: {
    full: {
      dialogContainer: {
        left: '50%',
        width: '50vw',
        maxWidth: '680px',
      },
      dialog: {
        marginLeft: 0,
        marginRight: [8, 8, 8, 8, 8, 0],
        borderRadius: '20px',
      },
    },
  },
  variants: {
    upload: (props: StyleFunctionProps) => ({
      dialog: {
        borderRadius: '20px',
      },
    }),
  },
  defaultProps: {},
};
