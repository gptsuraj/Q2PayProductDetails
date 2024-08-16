// src/redux/reducers/productReducer.js
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
  } from '../actions/productActions';
  
  const initialState = {
    items: [],
    item: null,
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          items: action.payload,
          loading: false,
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case FETCH_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCT_SUCCESS:
        return {
          ...state,
          item: action.payload,
          loading: false,
        };
      case FETCH_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  