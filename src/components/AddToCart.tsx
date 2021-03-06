import React, { useContext } from "react";
import { appSetStateContext } from "../appState";
import { RobotProps } from "./RobotDiscount";

export const whithAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  return (props) => {
    const setState = useContext(appSetStateContext);
    const addToCart = (id, name) => {
      if (setState) {
        setState((state) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          };
        });
      }
    };
    return <ChildComponent {...props} addToCart={addToCart}></ChildComponent>;
  };
};

export const useAddToCart = () => {
  const setState = useContext(appSetStateContext);
  const addToCart = (id, name) => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };
  return addToCart;
};
