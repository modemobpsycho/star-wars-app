import { variables } from '@/helpers/variables';

export const getRandomNum = () => {
  return Math.floor(Math.random() * (variables.MAX_RANDOM - variables.MIN_RANDOM + 1)) + variables.MIN_RANDOM;
};
