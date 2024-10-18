import { heroMapper } from '@/utils/heroMapper';
import { urls } from '@/helpers/urls';
import { IHero } from '@/types/hero.interface';
import { useState, useEffect } from 'react';
import { indexValidator } from '@/utils/indexValidator';

export const useGetInfoHero = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [infoHero, setInfoHero] = useState<IHero>({} as IHero);

  useEffect(() => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    const fetchData = async () => {
      try {
        const response = await fetch(`${urls.API_URL}${indexValidator(id)}/`);
        const hero = heroMapper(await response.json());

        setInfoHero(hero);
        if (response.ok) {
          setIsSuccess(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return {
    isLoading,
    isSuccess,
    isError,
    infoHero
  };
};
