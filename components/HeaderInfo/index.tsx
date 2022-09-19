import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderCover = styled.div`
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.span`
  display: block;
  font-weight: 700;
  font-size: 48px;
  color: #000000;
`;

const Description = styled.span`
  display: block;
  width: 60%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-top: 4px;
`;

interface IProps {
  title: string;
  description: string;
}

const HeaderInfo: FC<IProps> = ({ title, description }) => {
  return (
    <Wrapper>
      <HeaderCover>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </HeaderCover>
    </Wrapper>
  );
};

export default HeaderInfo;
