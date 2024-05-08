import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styles from "../../styles/styles";
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import { productData as allProducts  } from "../../static/data";

const ProductsPage = () => {
  // Destructuring imports
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on category
    const filteredData = categoryData === null
      ? allProducts
      : allProducts?.filter((product) => product.category === categoryData);
    setFilteredProducts(filteredData || []);
  }, [allProducts, categoryData]);

  // Function to render product cards
  const renderProductCards = () => (
    <div className={`${styles.section}`}>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
        {filteredProducts.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <h1 className="text-center w-full pb-[100px] text-[20px]">
          No products Found!
        </h1>
      )}
    </div>
  );

  return (
    <>
        <div>
          <Header activeHeading={3} />
          <br />
          <br />
          {renderProductCards()}
          <Footer />
        </div>
    </>
  );
};

export default ProductsPage;
