import { IHero } from '@/types/hero.interface';

export const heroMapper = (hero: IHero) => {
  const { name, height, mass, hair_color, eye_color } = hero;

  hero.name = name === 'unknown' ? '-' : `${name}`;
  hero.height = height === 'unknown' ? '-' : `${height}cm`;
  hero.mass = mass === 'unknown' ? '-' : `${mass}kg`;
  hero.hair_color = hair_color === 'n/a' || hair_color === 'none' ? '-' : hair_color;
  hero.eye_color = eye_color === 'n/a' || eye_color === 'none' ? '-' : eye_color;

  return hero;
};
