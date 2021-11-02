export interface ICategoryList {
  categories: ICategory[];
}

export interface ICategory {
  id: string;
  name: string;
  imageURL: string;
  products?: IProduct[];
}

export interface IProduct {
  id: string;
  name: string;
  imageURL: string;
  isNew?: boolean;
}
