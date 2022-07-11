import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Mactavish",
    lastName: "Soap",
    email: "mactavish@gmail.com",
    address: [
      {
          _id: uuid(),
          name: "Mactavish Soap",
          street: "256 / Rose View Colony, Paris",
          state: "Paris",
          country: "France",
          zipCode: "307501",
          mobile: "9897554001",
          type:"home"
      },
  ],
    orders:[],
    password: "mactavishsoap",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
