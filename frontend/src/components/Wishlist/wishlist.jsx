import { RxCross1 } from "react-icons/rx";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import styles from "../../styles/styles";

const WishList = ({ id,handleWishModal }) => {
  const wishList = [
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

  const removeFromCartHandler = (data) => {
    console.log("remove from cart")
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        {wishList && wishList.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer text-gray-700"
                onClick={() => handleWishModal(false,id)}
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
                  onClick={() => handleWishModal(false,id)}
                />
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} p-4`}>
                <AiOutlineHeart size={25} className=" text-gray-700" />
                <h5 className="pl-2  text-gray-700 font-[500]">
                  {wishList?.length || 0} items
                </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {wishList &&
                  wishList.map((i, index) => (
                    <WishSingle
                      key={index}
                      data={i}
                      removeFromCartHandler={removeFromCartHandler}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const WishSingle = ({ data, removeFromCartHandler }) => {
  return (
    <div className="border-b p-3">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`rounded-full w-[25px] h-[25px] cursor-pointer`}
            onClick={() => removeFromCartHandler(data)}
          >
            <RxCross1 size={12} className="text-black" />
          </div>
        </div>
        <img
          src={`${data?.url}`}
          alt=""
          className="w-[60px] h-[60px] ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h3 className="text-black font-[8px]">{data?.name}</h3>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${data?.price}
          </h4>
        </div>
        <div className="w-[25px] h-[25px]">
            <AiOutlineShoppingCart
            className="cursor-pointer text-gray-700"
            size={22}
            onClick={() => console.log("add to cart")}
            />
        </div>
      </div>
    </div>
  );
};

export default WishList;
