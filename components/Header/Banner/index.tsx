import styled from 'styled-components';
import { ISlideList, SlideList } from '../../../configs/data/slide';

interface IPaginationItem {
  isActive: boolean;
}

const Wrapper = styled.section``;

const SlideBox = styled.div`
  width: 100%;
  height: 480px;
  max-height: 480px;

  border: 1px solid #c4c4c4;
  box-shadow: 0px 6px 36px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  @media screen and (max-width: 768px) {
    height: 140px;
  }

  @media screen and (max-width: 468px) {
    height: 122px;
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Pagination = styled.ul`
  display: flex;
  gap: 8px;
  list-style-type: none;
`;

const PaginationItem = styled.li<IPaginationItem>`
  width: 12px;
  height: 12px;
  background: ${(props) => (props.isActive ? '#FFC800' : '#ffffff')};
  border-radius: 50%;
`;

const Banner = () => {
  return (
    <Wrapper>
      <SlideBox>
        {SlideList.map((item: ISlideList) => {
          return <SlideImg key={item.id} src={item.photoURL} alt={''} />;
        })}
      </SlideBox>
      <Footer>
        <Pagination>
          <PaginationItem isActive={true} />
          <PaginationItem isActive={false} />
          <PaginationItem isActive={false} />
          <PaginationItem isActive={false} />
        </Pagination>
      </Footer>
    </Wrapper>
  );
};

export default Banner;
