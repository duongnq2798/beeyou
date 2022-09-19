import styled from 'styled-components';
import { Images } from '../../../configs/contants/images';
import { IInfoItem, InfoLists } from '../../../configs/data/infoList';
import HeaderInfo from '../../HeaderInfo';

const Wrapper = styled.section`
  width: 100%;
  height: 735px;
  max-height: 735px;
  background-image: url(${Images.background.lineTwo});
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 90px;
  padding: 0 105px;
  margin: 90px auto;
  max-width: 1600px;
`;

const Card = styled.div`
  margin-top: 55px;
  width: 50%;
  background: #ffffff;
  box-shadow: 0px 6px 36px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 32px 40px;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 15px;
    left: -40px;
    width: 126px;
    height: 25px;
    background: #fcd4d4;
    opacity: 0.7;
    transform: rotate(-45deg);
  }
`;

const CardTitle = styled.span`
  display: block;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  list-style-type: none;
  padding-left: 0;
`;

const InfoListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 12px;
`;

const Icon = styled.img`
  width: 24px;
`;

const Text = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`;

const Button = styled.button`
  outline: none;
  border: 0;
  background: #ffc800;
  border-radius: 12px;
  padding: 8px 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  cursor: pointer;
`;

const LineTwo = () => {
  return (
    <Wrapper>
      <HeaderInfo
        key={1}
        title={`Siêu phẩm Tote mới ra lò`}
        description={`Mới "chế" ra cái Tote mới các bác ạ. Thông tin mô tả sơ bộ các bác đọc ở dưới nhé. em đi đóng hàng giao cho khách phát`}
      />

      <Card>
        <CardTitle>{`Thông tin mô tả sơ bộ`}</CardTitle>

        <InfoList>
          {InfoLists.map((item: IInfoItem) => {
            return (
              <InfoListItem key={item.id}>
                <Icon src={item.iconURL} />
                <Text>{item.content}</Text>
              </InfoListItem>
            );
          })}
        </InfoList>

        <Button>{`Tìm hiểu thêm`}</Button>
      </Card>
    </Wrapper>
  );
};

export default LineTwo;
