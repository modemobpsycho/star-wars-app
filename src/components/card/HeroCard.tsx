import { useGetInfoHero } from '@/hooks/useGetInfoHero';
import { urls } from '@/helpers/urls';
import { useParams } from 'react-router-dom';

import './HeroCard.scss';
import { indexValidator } from '@/utils/indexValidator';

export const HeroCard = () => {
  const { id } = useParams();

  const { isLoading, isSuccess, infoHero } = useGetInfoHero(String(id));

  return (
    <div className="hero-card">
      {isLoading ? (
        <span className="loading">Loading...</span>
      ) : isSuccess ? (
        <>
          <img className="image" src={urls.IMAGE_URL + `${indexValidator(String(id))}.jpg`} />
          <div className="content">
            <p className="name">{infoHero.name}</p>
            <hr className="separator" />
            <div className="info">
              <span>Mass: {infoHero.mass}</span>
              <span>Height: {infoHero.height}</span>
              <span>Eye color: {infoHero.eye_color}</span>
              <span>Hair color: {infoHero.hair_color}</span>
            </div>
          </div>
        </>
      ) : (
        <span className="error">Hero not found</span>
      )}
    </div>
  );
};
