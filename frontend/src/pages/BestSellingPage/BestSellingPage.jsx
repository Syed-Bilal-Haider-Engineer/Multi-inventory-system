import  { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import { productData as allProducts  } from "../../static/data";
import styles from "../../styles/styles";

const BestSellingPage = () => {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const productsData = allProducts ? [...allProducts] : [];
    const sortedData = productsData?.sort((a, b) => b.sold_out - a.sold_out);
    setSortedProducts(sortedData);
  }, [allProducts]);

  // Function to render product cards
  const renderProductCards = () => (
    <div className={`${styles.section}`}>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
        {sortedProducts.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
    </div>
  );

  return (
    <>
        <div>
          <Header activeHeading={2} />
          <br />
          <br />
          {renderProductCards()}
          <Footer />
        </div>
    </>
  );
};

export default BestSellingPage;
