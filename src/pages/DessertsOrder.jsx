import React, { useState } from "react";
import ConformationCard from "../components/ConformationCard";
import ProductCard from "../components/ProductCard";
import ConformationModal from "../components/ConformationModal";
import Products from "../data.json";

export default function DessertsOrder() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [itemAdded, setItemAdded] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Function to handle click for add to cart button

  const handleClick = (item) => {
    let isPresent = false;

    const updatedCart = itemsInCart.map((product) => {
      if (item.id === product.id) {
        isPresent = true;
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    if (isPresent) {
      setItemsInCart(updatedCart);
    } else {
      setItemsInCart([...itemsInCart, { ...item, quantity: 1 }]);
      setItemAdded({ ...item, isAdded: true });
    }
  };

  const handleIncrement = (item) => {
    const updatedCart = itemsInCart.map((product) => {
      if (product.id === item.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setItemsInCart(updatedCart);
  };
  const handleDecrement = (item) => {
    const updatedCart = itemsInCart
      .map((product) => {
        if (product.id === item.id && product.quantity > 0) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
      .filter((product) => product.quantity > 0);
    setItemsInCart(updatedCart);
  };

  const removeItem = (item) => {
    let itemToDelete = item.id;
    setItemsInCart((prevItems) => {
      return prevItems.filter((item) => item.id !== itemToDelete);
    });
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleStartOver = () => {
    toggleModal();
    setItemsInCart([]);
  };

  const handleConfirmation = () => {
    toggleModal();
  };

  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <ConformationModal
          itemsInCart={itemsInCart}
          handleStartOver={handleStartOver}
        />
      )}
      <div className="order-page">
        <div>
          <h1 className="page-heading">Desserts</h1>
          <div className="products-container">
            {Products.map((product) => {
              return (
                <ProductCard
                  product={product}
                  key={product.id}
                  handleClick={handleClick}
                  itemsInCart={itemsInCart}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                />
              );
            })}
          </div>
        </div>
        <div>
          <ConformationCard
            itemsInCart={itemsInCart}
            removeItem={removeItem}
            handleConfirmation={handleConfirmation}
          />
        </div>
      </div>
    </>
  );
}
