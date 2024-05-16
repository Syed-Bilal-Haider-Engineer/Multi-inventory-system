import { useEffect, useState } from "react";
import { productData } from "../../static/data";
import ProductCard from "../ProductCard/ProductCard";
import styles from "../../styles/styles.js";

const BestDeals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedData = productData.sort((a, b) => b.sold_out - a.sold_out); 
    const firstFive = sortedData.slice(0, 5);
    setData(firstFive);
  }, []);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data?.map((item) => <ProductCard data={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
