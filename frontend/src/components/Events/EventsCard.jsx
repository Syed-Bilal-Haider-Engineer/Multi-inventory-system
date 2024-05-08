import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";

const EventCard = ({ active, data }) => {

  const addToCartHandler = (data) => {
   console.log("add to cart")
  };

  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      {data.image_Url && data.image_Url[0] && (
        <div className="w-full lg:w-1/2 m-auto">
          <img src={data.image_Url[0].url} alt="" />
        </div>
      )}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className={styles.productTitle}>{data.name}</h2>
        <p>{data.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-semibold text-lg text-red-500 pr-3 line-through">
              {data.price}$
            </h5>
            <h5 className="font-bold text-2xl text-gray-700">
              {data.discount_price}$
            </h5>
          </div>
          <span className="pr-3 font-normal text-lg text-green-600">
            {data.sold_out} sold
          </span>
        </div>
        <CountDown data={data} />
        <br />
        <div className="flex items-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-white`}>See Details</div>
          </Link>
          <div
            className={`${styles.button} text-white ml-5`}
            onClick={() => addToCartHandler(data)}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
