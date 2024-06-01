import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductDetails from "../../components/Products/ProductsDetails.jsx";
import { productData as allProducts } from "../../static/data.jsx";
import SuggestedProduct from "../../components/Products/SuggestedProducts.jsx";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    const fetchData = () => {
      if (eventData !== null) {
        // Assuming allEvents is commented out, so this part is not needed
        // const event = allEvents?.find((i) => i._id === id);
        // setData(event);
      } else {
        const product = allProducts?.find((i) => i?.id == id);
        setData(product);
      }
    };
    fetchData();
  }, [id, eventData,allProducts]);

  return (
    <div>
      <ProductDetails data={data} />
      {!eventData && data && <SuggestedProduct data={data} />}
    </div>
  );
};

export default ProductDetailsPage;
