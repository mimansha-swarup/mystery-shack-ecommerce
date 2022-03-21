import { v4 as uuid } from "uuid";
import { CategoryImage } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "T-Shirts",
    coverImage: CategoryImage.tshirts,
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Jeans",
    coverImage: CategoryImage.jeans,
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Kurtas",
    coverImage: CategoryImage.kurtas,
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Shoes",
    coverImage: CategoryImage.shoes,
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Sarees",
    coverImage: CategoryImage.sarees,
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Trousers",
    coverImage: CategoryImage.trousers,
    description: "",
  },
];
