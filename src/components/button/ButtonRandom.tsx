import { useNavigate } from 'react-router-dom';
import { getRandomNum } from '@/utils/getRandomNum';

import './ButtonRandom.scss';

export function ButtonRandom() {
  const navigate = useNavigate();

  const handleClick = () => {
    const randomNum = getRandomNum();
    navigate(`/${randomNum}`);
  };

  return (
    <button className="button-random" onClick={handleClick}>
      Upload another character
    </button>
  );
}
