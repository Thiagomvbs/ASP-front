import React, { createContext, useReducer, ReactNode, useEffect } from "react";
import { CartAction, CartState } from "./carrinhoTypes";
import { carrinhoReducer } from "./carrinhoReducer";

const STORAGE_KEY = "carrinho";

const loadState = (): CartState => {
  try {
      const savedState = localStorage.getItem(STORAGE_KEY);
      if (savedState) {
          const parsedState = JSON.parse(savedState);
          if (Array.isArray(parsedState.produtos)) {
              return parsedState;
          }
      }
      return { produtos: [] }; 
  } catch (error) {
      return { produtos: [] }; 
  }
};


export const CarrinhoContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

export const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(carrinhoReducer, loadState());

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    return (
      <CarrinhoContext.Provider value={{ state, dispatch }}>
        {children}
      </CarrinhoContext.Provider>
    );
};
