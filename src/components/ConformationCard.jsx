import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import EmptyCartImage from "../assets/images/illustration-empty-cart.svg";
import CarbonNeutral from "../assets/images/icon-carbon-neutral.svg";

export default function ConformationCard({
  itemsInCart,
  removeItem,
  handleConfirmation,
}) {
  const TotalItems = itemsInCart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalPrice = itemsInCart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <>
      <div className="conformationCard">
        <h3 className="card-heading">Your Cart : ({TotalItems}) </h3>
        {TotalItems === 0 ? (
          <div className="empty-cart-image-container">
            <img src={EmptyCartImage} />
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <>
            <ul className="conformation-list">
              {itemsInCart.map((item) => {
                return (
                  <div key={item.id}>
                    <li className="conformation-list-item">
                      <div>
                        <p className="conformation-list-item-name">
                          {item.name}
                        </p>
                        <small>
                          <span className="span-quantity">
                            {item.quantity}x{" "}
                          </span>
                          <span className="span-price">@${item.price}</span>
                          <span className="span-total-price">
                            ${item.quantity * item.price}
                          </span>
                        </small>
                      </div>
                      <button
                        onClick={() => removeItem(item)}
                        className="remove-item-button"
                      >
                        <RxCrossCircled size={20} className="crossCircled" />
                      </button>
                    </li>
                    <div className="horizontal-line"></div>
                  </div>
                );
              })}
            </ul>
            <small className="order-total">
              <p> Order Total: </p>
              <span className="order-total-span">${totalPrice}</span>
            </small>
            <div>
              <p className="delivery-type">
                <img src={CarbonNeutral} alt="Carbon Neutral Icon" /> This is{" "}
                <span className="span-delivery-type"> carbon neutral </span>{" "}
                delivery
              </p>
              <button
                onClick={() => handleConfirmation()}
                className="confirm-order-btn"
              >
                Confirm Order
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
