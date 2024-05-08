import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import ProductDetailsCard from "../../components/ProductsDetails/ProductsDetails";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const truncatedName = data?.name.length > 40 ? data?.name.slice(0, 40) + "..." : data?.name;

  const handleHeartClick = () => {
    setClick(!click);
  };

  const handleQuickViewClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
      <div className="flex justify-end"></div>
      <Link to={`/product/${data?.name}`}>
        <img
          src={`${data.images && data.images[0]?.url}`}
          alt=""
          className="w-full h-[170px] object-contain"
        />
      </Link>
      <Link to='/'>
        <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
      </Link>
      <Link to={`/product/${data?.name}`}>
        <h4 className="pb-3 font-[500]">{truncatedName}</h4>
        <div className="flex">
          {[...Array(3)].map((_, index) => (
            <AiFillStar
              key={index}
              color="#f6b100"
              className="mr-2 cursor-pointer"
              size={20}
            />
          ))}
          <AiOutlineStar color="#f6b100" className="mr-2 cursor-pointer" size={20} />
        </div>
        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
              {data.price === 0 ? data.price : data.discount_price}$
            </h5>
            {data.price && <h4 className={`${styles.price}`}>{data.price} $</h4>}
          </div>
          <span className="font-[400] text-[17px] text-[#68d284]">{data?.total_sell} sold</span>
        </div>
      </Link>
      {/* side options */}
      <div>
        <AiOutlineHeart
          size={22}
          className="cursor-pointer absolute right-2 top-5"
          onClick={handleHeartClick}
          color={click ? "red" : "#333"}
          title={click ? "Remove from wishlist" : "Add to wishlist"}
        />
        <AiOutlineEye
          size={22}
          className="cursor-pointer absolute right-2 top-14"
          onClick={handleQuickViewClick}
          color="#333"
          title="Quick view"
        />
        <AiOutlineShoppingCart
          size={25}
          className="cursor-pointer absolute right-2 top-24"
          onClick={() => setClick(data?._id)}
          color="#444"
          title="Add to cart"
        />
        {open && <ProductDetailsCard setOpen={setOpen} data={data} />}
      </div>
    </div>
  );
};

export default ProductCard;
