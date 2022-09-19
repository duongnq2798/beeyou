import { FC } from 'react';
import styled from 'styled-components';
import { IProductItem } from '../../../configs/data/productList';

const Wrapper = styled.div`
  width: 285px;
  background: #ffffff;
  box-shadow: 0px 6px 36px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;
  position: relative;
  transition: 0.2s ease-in-out;

  :hover {
    background: #ffffff;
    outline: 4px solid #ffc800;
    box-shadow: 0px 6px 36px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    transform: translate3d(-15px, 15px, 10px);
  }

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('/images/background/background-card.svg');
    transform: translate(-25px, -26px);
    border-radius: 16px;
    transition: 0.1s ease-in-out;
    z-index: -1;
  }

  :hover::before {
    transform: translate(-6px, -42px);
  }

  @media screen and (max-width: 678px) {
  }
`;

const Image = styled.img`
  width: 237px;
  height: 237px;
  border-radius: 16px;
  margin-bottom: 12px;
`;

const Name = styled.span`
  display: block;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  margin-bottom: 4px;
`;

const Price = styled.span`
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #009efe;
  margin-bottom: 8px;
`;

const ColorList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;
  gap: 8px;
`;

const ColorItem = styled.li<{
  color: string;
}>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
`;

const Button = styled.button`
  width: 100%;
  background: #ffc800;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  background: #ffc800;
  border-radius: 12px;
  border: 0;
  cursor: pointer;
  padding: 8px;
`;

const ProductCard: FC<IProductItem> = ({
  id,
  price,
  productImage,
  productName,
}) => {
  return (
    <Wrapper key={id}>
      <Image src={productImage} alt={productName} />
      <Name>{productName}</Name>

      <Price>{price}</Price>

      <ColorList>
        <ColorItem color="#EF9CD6" />
        <ColorItem color="#85CEF2" />
        <ColorItem color="#F4EA88" />
        <ColorItem color="#FFFFFF" />
      </ColorList>

      <Button>Mua ngay</Button>
    </Wrapper>
  );
};

export default ProductCard;
