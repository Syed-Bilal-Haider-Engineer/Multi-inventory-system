import React, { useEffect, useState } from "react";
import { productData as allProducts } from "../../static/data";
import styles from "../../styles/styles";
import ProductCard from "../../pages/ProductCard/ProductCard";

const SuggestedProduct = ({ data }) => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    if (allProducts && data?.category) {
      const filteredProducts = allProducts?.filter(
        (product) => product?.category === data?.category
      );
      setProductData(filteredProducts);
    }
  }, [allProducts, data?.category]);

  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}>
            Related Products
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {productData && productData?.map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProduct;
