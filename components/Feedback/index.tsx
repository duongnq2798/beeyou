import styled from 'styled-components';
import { Images } from '../../configs/contants/images';

interface IPaginationImg {
  rotate: string;
}

const Wrapper = styled.section`
  width: 100%;
  height: 735px;
  max-height: 735px;
  background-image: url(${Images.background.feedback});
  background-repeat: Fno-repeat;
  background-size: 100%;
  margin-top: 90px;
  display: flex;
  align-items: flex-start;
  margin: 90px auto;
  max-width: 1600px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Cover = styled.div`
  width: 50%;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 48px;
  color: #000000;
  display: block;
`;

const Description = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  display: block;
  width: 70%;
`;

const Slide = styled.div`
  display: flex;
  gap: 63px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 40px;
`;

const PhotoItem = styled.img`
  width: 100%;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

const PaginationItem = styled.div`
  background: #ffc800;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PaginationImg = styled.img<IPaginationImg>`
  transform: ${(props) => props.rotate};
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterTitle = styled.h1``;

const FooterSubTitle = styled.span``;

const Feedback = () => {
  return (
    <Wrapper>
      <Row>
        <Cover>
          <Title>Đánh giá của các nàng</Title>
          <Description>
            Mấy đánh giá này là lấy từ facebook qua nè, không có tự bịa ra đâu
            nha. Hông tin lên facebook mà xem.
          </Description>

          <Slide>
            <List>
              <PhotoItem
                src={Images.feedback.feedback01}
                alt={Images.feedback.feedback01}
              />
              <PhotoItem
                src={Images.feedback.feedback02}
                alt={Images.feedback.feedback02}
              />
              <PhotoItem
                src={Images.feedback.feedback03}
                alt={Images.feedback.feedback03}
              />
            </List>

            <Pagination>
              <PaginationItem>
                <PaginationImg src={Images.icon.arrow} rotate="" />
              </PaginationItem>
              <PaginationItem>
                <PaginationImg
                  src={Images.icon.arrow}
                  rotate="rotate(180deg)"
                />
              </PaginationItem>
            </Pagination>
          </Slide>
        </Cover>
      </Row>
    </Wrapper>
  );
};

export default Feedback;
