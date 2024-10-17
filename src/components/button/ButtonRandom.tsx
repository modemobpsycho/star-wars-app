import { useNavigate } from 'react-router-dom';
import './ButtonRandom.scss';
import { getRandomNum } from '@/utils/getRandomNum';

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
