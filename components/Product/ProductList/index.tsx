import { FC } from 'react';
import styled from 'styled-components';
import { IProductItem, ProductLists } from '../../../configs/data/productList';
import HeaderInfo from '../../HeaderInfo';
import ProductCard from '../ProductCard';

const Wrapper = styled.div`
  padding: 0 103px;
  margin-bottom: 130px;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
`;

interface IProduct {
  title: string;
  description: string;
  data: IProductItem[];
}

const ProductList: FC<IProduct> = ({ title, description, data }) => {
  return (
    <Wrapper>
      <HeaderInfo key={title} title={title} description={description} />
      <List>
        {data &&
          data.length &&
          data.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                price={item.price}
                productImage={item.productImage}
                productName={item.productName}
              />
            );
          })}
      </List>
    </Wrapper>
  );
};

export default ProductList;
