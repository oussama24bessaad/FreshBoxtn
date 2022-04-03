import Axios from "axios";

export const API_SERVER =  process.env.REACT_APP_ENV ? 'http://localhost:5000' : 'https://freshboxtn.herokuapp.com'

  export const getOrders = async () => {
    const response = await Axios.get(`${API_SERVER}/api/order/all`);
    return response.data;
  };
  export const getMyOrders = async () => {
    
    const response = await Axios.get(`${API_SERVER}/api/order/myorders`);
    return response.data;
  };