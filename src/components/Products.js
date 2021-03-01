import React from "react";
import "./Products.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../StateProvider";

function Products({ id, img, price, rating, title, info }) {
  const [{}, dispatch] = useStateValue();

  const addTobasket = () => {
    //Add Item TO Basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="products">
      <div className="products__info py-3">
        <p>{title}</p>
        <p className="products__price">
          $ <strong>{price}</strong>
        </p>
        <Rating
          className="mb-4"
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
      </div>
      <img src={img} />
      <button onClick={addTobasket}>Add To Cart</button>
    </div>
  );
}

export default Products;
