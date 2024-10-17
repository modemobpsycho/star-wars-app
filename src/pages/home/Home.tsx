import { HeroCard } from '@/components/card';
import { ButtonRandom } from '@/components/button';

import './Home.scss';

export function Home() {
  return (
    <div className="home">
      <HeroCard />
      <ButtonRandom />
    </div>
  );
}
