import { v4 as uuid } from "uuid";
import {  topBrandImages } from "../../assets";

/**
 * topBrand Database can be added here.
 * You can add topBrand of your wish with different attributes
 * */

export const topBrands = [
  {
    _id: uuid(),
    brandName: "Roadster",
    brandImage: topBrandImages.roadster,
  },
  {
    _id: uuid(),
    brandName: "HRX",
    brandImage: topBrandImages.hrx
  },
  {
    _id: uuid(),
    brandName: "Wrogn",
    brandImage: topBrandImages.wrogn,
  },
];
