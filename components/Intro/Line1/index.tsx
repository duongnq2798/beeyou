import styled from 'styled-components';
import { Images } from '../../../configs/contants/images';

const Wrapper = styled.section`
  width: 100%;
  height: 735px;
  max-height: 735px;
  background-image: url(${Images.background.lineOne});
  background-repeat: Fno-repeat;
  background-size: 100%;
  margin-top: 90px;
  display: flex;
  align-items: flex-start;
  margin: 90px auto;
  max-width: 1600px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 105px;
`;

const LineOneLeft = styled.div`
  width: 38%;
`;

const TextLeft = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  color: #000000;
`;

const LineOneRight = styled.div`
  width: 30%;
`;

const SmallText = styled.span`
  display: block;
  margin-bottom: 24px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`;

const LineOne = () => {
  return (
    <Wrapper>
      <Row>
        <LineOneLeft>
          <TextLeft>
            Tote của BeeYou cam kết mang đến sự hài lòng tối đa cho bạn
          </TextLeft>
        </LineOneLeft>

        <LineOneRight>
          <SmallText>
            Với cộng đồng nhà thiết kế, chúng tôi là ngôi nhà thời trang,nơi
            chắp cánh cho hàng vạn mẫu thiết kế của các Designer trên khắp
            Vietnam.
          </SmallText>

          <SmallText>
            Với khách hàng, BeeYou là nơi bạn dễ dàng tìm thấy những những sản
            phẩm thời trang thể hiện CHẤT của riêng mình. Là chính mình cùng
            BeeYou.
          </SmallText>

          <SmallText>
            Với đội ngũ lâu năm kinh nghiệm, có tâm với nghề, những dòng sản
            phẩm của BeeYou được tuyển chọn những nguyên vật liệu cao cấp nhất,
            gia công tinh xảo, công nghệ tối tân nhất hiện nay, được kiểm tra
            chất lượng đầu ra khắt khe.
          </SmallText>
        </LineOneRight>
      </Row>
    </Wrapper>
  );
};

export default LineOne;
