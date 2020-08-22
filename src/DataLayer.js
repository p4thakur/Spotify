import React, { createContext, useContext, useReducer } from "react";

//create data layer
export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

//chlldre is nothing but what wrap inside my datalayer.Which in my
//case is APP container mentioned in our index.html file

//now I my values will be store in below oject
export const useDataLayerValue = () => useContext(DataLayerContext);
