import axios from "axios";

//Auth
const signinurl = "http://localhost:5000/signin";
const signupurl = "http://localhost:5000/signup";

export const signin = (info) => axios.post(signinurl, info);
export const signup = (info) => axios.post(signupurl, info);

//CustomerContact
const CustomerContacturl = "http://localhost:5000/customercontact";
export const fetchCustomerContact = () => axios.get(CustomerContacturl);
export const createCustomerContact = (Post) =>
  axios.post(CustomerContacturl, Post);
