import ReactDOM from 'react-dom/client';
import { App } from './app/App.tsx';

import './index.scss';

const container = document.querySelector('#root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
