import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { HiOutlineMinusCircle } from "react-icons/hi2";
import { HiOutlinePlusCircle } from "react-icons/hi2";

export default function ProductCard({
  product,
  handleClick,
  itemsInCart,
  handleDecrement,
  handleIncrement,
}) {
  const isInCart = itemsInCart.some((cartItem) => cartItem.id === product.id);

  const cartItem = itemsInCart.find((cartItem) => cartItem.id === product.id);

  return (
    <div className="product-card">
      <div className={`${isInCart ? "image-border" : ""} image-container`}>
        <img className="item-image" src={product.image} alt={product.name} />

        {isInCart && (
          <div className="add-to-cart-btn-quantity">
            <HiOutlineMinusCircle
              className="decrementer"
              size={22}
              onClick={() => handleDecrement(product)}
            />
            <p>{cartItem.quantity}</p>
            <HiOutlinePlusCircle
              className="incremeter"
              size={22}
              onClick={() => handleIncrement(product)}
            />
          </div>
        )}
        {!isInCart && (
          <button
            onClick={() => handleClick(product)}
            className="add-to-cart-btn"
          >
            <MdAddShoppingCart className="cart-svg" size={16} />
            Add to Cart
          </button>
        )}
      </div>
      <div className="description-container">
        <small className="item-name">{product.name}</small>
        <p className="item-description">{product.category}</p>
        <p className="item-price">$ {product.price}</p>
      </div>
    </div>
  );
}
