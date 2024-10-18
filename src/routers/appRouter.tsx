import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/home';
import { Layout } from '@/shared/ui/layout/Layout';
import { paths } from '@/shared/constants/paths';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={paths.ROOT} element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
