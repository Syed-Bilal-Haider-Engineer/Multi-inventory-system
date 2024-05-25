import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = ({ id,handleCartModal }) => {
  const cartData = [
    {
        name:'Iphone 14 pro max 256 gb ssd and 8gb ram silver colour',
        description:'test',
        price:999,
        qty:1,
        url:'https://i5.walmartimages.com/asr/76526810-91da-4917-87c1-69245968fdc7_2.f1f4cd6ed762d85ca8fcb08508c10147.jpeg'
    },
    {
        name:'Iphone 14 pro max 256 gb ssd and 8gb ram silver colour',
        description:'test',
        price:999,
        qty:2,
        url:'https://i5.walmartimages.com/asr/76526810-91da-4917-87c1-69245968fdc7_2.f1f4cd6ed762d85ca8fcb08508c10147.jpeg'
    },
    {
        name:'Iphone 14 pro max 256 gb ssd and 8gb ram silver colour',
        description:'test',
        price:999,
        qty:3,
        url:'https://i5.walmartimages.com/asr/76526810-91da-4917-87c1-69245968fdc7_2.f1f4cd6ed762d85ca8fcb08508c10147.jpeg'
    },
  ]

  
const totalPrice = cartData.reduce((acc, item) => acc + item.price * item.qty, 0);

  const removeFromCartHandler = (data) => {
    console.log("remove from cart")
  };

  const quantityChangeHandler = (data) => {
   console.log("quantity")
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        {cartData && cartData.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer text-gray-700"
                onClick={() => handleCartModal(false,id)}
              />
            </div>
            <h5 className=" text-gray-700">Cart Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer text-gray-700"
                  onClick={() => handleCartModal(false,id)}
                />
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} p-4`}>
                <IoBagHandleOutline size={25} className=" text-gray-700" />
                <h5 className="pl-2  text-gray-700 font-[500]">
                  {cartData?.length || 0} items
                </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {cartData &&
                  cartData.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      quantityChangeHandler={quantityChangeHandler}
                      removeFromCartHandler={removeFromCartHandler}
                      totalPrice={totalPrice}
                    />
                  ))}
              </div>
              <div className="px-5 mb-3">
              {/* checkout buttons */}
              <Link to="/checkout">
                <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
                >
                  <h1 className="text-[#fff] text-[18px] font-[600]">
                    Checkout Now (USD${totalPrice})
                  </h1>
                </div>
              </Link>
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler,totalPrice }) => {
  const [value, setValue] = useState(data.qty);

  const increment = (data) => {
    if (data?.stock < value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  return (
    <div className="border-b p-3">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => increment(data)}
          >
            <HiPlus size={12} color="#fff" />
          </div>
          <span className="pl-[10px] text-black">{data.qty}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => decrement(data)}
          >
            <HiOutlineMinus size={12} color="#7d879c" />
          </div>
        </div>
        <img
          src={`${data?.url}`}
          alt=""
          className="w-[60px] h-[60px] ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h2 className="text-black font-[10px]">{data?.name}</h2>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ${data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalPrice}
          </h4>
        </div>
        <RxCross1
          className="cursor-pointer text-gray-700"
          size={12}
          onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Cart;
