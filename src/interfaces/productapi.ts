export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: ICategory;
}

export interface ICategory {
  id: number;
  name: CategoryName;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export enum CategoryName {
  Clothes = "Clothes",
  Electronics = "Electronics",
  Furniture = "Furniture",
  Others = "Others",
  Plants = "Plants",
  Shoes = "Shoes",
}
