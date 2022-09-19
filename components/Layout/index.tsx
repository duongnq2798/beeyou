import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
  padding: 0 112px;
`;

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
