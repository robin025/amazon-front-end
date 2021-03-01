import React from "react";
import "./HomePage.css";
import Products from "./Products";

function HomePage() {
  return (
    <div className="homepage ">
      <img
        //   will devlop carousel
        className="homepage__bannerimg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/UPI/August/DesktopHero_1500x600._CB407984171_.jpg"
        alt="bannerimg"
      />

      <div className="home__row">
        <Products
          id="1212"
          img="https://images-na.ssl-images-amazon.com/images/I/61z%2BfTq6lGL._UX466_.jpg"
          title="Casio G-Shock Analog-Digital Black Dial Men's Watch - GA-700CM-3ADR (G824)
 "
          rating={4}
          price={100}
        />
        <Products
          id="1212"
          img="https://images-na.ssl-images-amazon.com/images/I/81ZZggcjOOL._SX466_.jpg"
          title="Sony WH-CH700N Wireless Noise Canceling Headphones, Black (WHCH700N/B)"
          rating={4.5}
          price={200}
        />
      </div>

      <div className="home__row">
        <Products
          id="12"
          img="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SX679_.jpg"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i9) - Space Grey 2.4GHz 8‑core 9th‑generation Intel Core i9 processor "
          rating={5}
          price={2399}
        />
      </div>
      <div className="home__row">
        <Products
          id="121"
          img="https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SX679_.jpg"
          title="Apple Iphone 11 64GB White Edition 2020 "
          rating={4}
          price={849}
        />
        <Products
          id="122"
          img="https://images-na.ssl-images-amazon.com/images/I/71UYtMYg6WL._SL1024_.jpg"
          title="Apple Iphone XS Max (256GB) Grey Edition 2018"
          rating={4}
          price={900}
        />
        <Products
          id="123"
          img="https://images-na.ssl-images-amazon.com/images/I/61itOh%2BJe8L._SL1024_.jpg"
          title="Apple Iphone 11 Pro(256GB)  MidNight Green"
          rating={4.5}
          price={999}
        />
      </div>
    </div>
  );
}

export default HomePage;
