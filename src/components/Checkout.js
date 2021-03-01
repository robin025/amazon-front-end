import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="chekout__leftsection">
        <img
          className="checkout__banner mb-4 "
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpg"
          alt="banner img"
        />
        {basket?.length === 0 ? (
          <div className="checkout__title">
            <h1>Your Cart Is Empty</h1>
            <h3>Your Cart Is Empty ,Go and grab some amazing items</h3>
          </div>
        ) : (
          <div className="checkout__main">
            <div className="">
              <h1 className="checkout__title">Your Shopping Items:</h1>
              {basket.map((item) => (
                <CheckoutProduct
                  className="checkoutmain__left checkoutproduct__info1"
                  id={item.id}
                  title={item.title}
                  img={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
            <div className="checkout__rightsection">
              <h1>Subtotal</h1>
              <Subtotal />
              <img
                src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
                alt="bannerimage"
              />
            </div>
          </div>
        )}
        {/* ? for preventing it from crash */}
        <img
          className="checkout__banner my-3"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt="banner Img"
        />
      </div>
    </div>
  );
}

export default Checkout;
