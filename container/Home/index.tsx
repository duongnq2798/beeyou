import Feedback from '../../components/Feedback';
import Header from '../../components/Header';
import Intro from '../../components/Intro';
import Layout from '../../components/Layout';
import ProductList from '../../components/Product/ProductList';
import { ProductLists } from '../../configs/data/productList';

const Home = () => {
  return (
    <div>
      <Layout>
        <Header />
      </Layout>
      <Intro />

      <ProductList
        key={'#1'}
        data={ProductLists}
        title={`Tote giá “nóng”`}
        description={`Đống này đang giảm giá nên rất "nóng”. Bạn còn chờ gì nữa mà "phỏng tay” ngay đi`}
      />
      <ProductList
        key={'#1'}
        data={ProductLists}
        title={`Tote bán chạy`}
        description={`Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy là Bee thích à nha, hehe`}
      />
      <ProductList
        key={'#1'}
        data={ProductLists}
        title={`Tote nổi bật`}
        description={`Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy là Bee thích à nha, hehe`}
      />

      <Feedback />
    </div>
  );
};

export default Home;
