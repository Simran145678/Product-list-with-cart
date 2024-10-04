import React from "react";
import ConfirmSVG from "../assets/images/icon-order-confirmed.svg";

export default function ConformationModal({ itemsInCart, handleStartOver }) {
  const totalPrice = itemsInCart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <>
      <div scroll="no" className="modal-container">
        <div className="conformationModal">
          <img src={ConfirmSVG} alt="green tick" className="confirmation-svg" />
          <h2 className="modal-heading">Order Confirmed</h2>
          <p className="modal-subHeading">We hope you enjoy your Order</p>

          <ul className="conformation-list confirmation-list-modal">
            {itemsInCart.map((item) => {
              return (
                <div key={item.id}>
                  <li className="conformation-list-item">
                    <div className="conformation-modal-list">
                      <img
                        className="conformation-list-img"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="conformation-modal-sublist">
                        <p className="conformation-list-item-name">
                          {item.name}
                        </p>
                        <small>
                          <span className="span-quantity">
                            {item.quantity}x{" "}
                          </span>
                          <span className="span-price-modal">
                            @${item.price}
                          </span>
                        </small>
                      </div>
                    </div>
                    <p className="span-total-price-modal">
                      ${item.quantity * item.price}
                    </p>
                  </li>
                  <div className="horizontal-line"></div>
                </div>
              );
            })}
            <small className="order-total">
              <p> Order Total: </p>
              <span className="order-total-span">${totalPrice}</span>
            </small>
          </ul>

          <div>
            <button
              onClick={() => {
                handleStartOver();
              }}
              className="start-over-btn"
            >
              Start New Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
