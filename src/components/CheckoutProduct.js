import React from "react";
import Rating from "@material-ui/lab/Rating";
import "./Chekoutproduct.css";
import { useStateValue } from "../StateProvider";
function CheckoutProduct({ title, img, rating, price, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__img" src={img} alt="product img" />
      <div className="checkoutproduct__info">
        <h3 className="checkoutproduct__title">{title}</h3>
        <h4>
          <small>$</small>
          {price}
        </h4>
        <Rating
          className="checkoutproduct__rating"
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        <br />
        <button onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
