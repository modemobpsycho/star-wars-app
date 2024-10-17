import './Layout.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="layout">{children}</div>;
};
