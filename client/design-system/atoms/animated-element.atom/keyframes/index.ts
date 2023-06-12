import { keyframes } from '@chakra-ui/react';

export const firstHomeImage = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

export const secondHomeImage = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

export const sliderHomeImages = keyframes`
  0% { opacity: 0; }
  6.25% { opacity: 1;}
  25% { opacity: 1; }
  31.25% { opacity: 0; }
  100% { opacity: 0; }
`;
