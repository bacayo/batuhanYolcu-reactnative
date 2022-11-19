export type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: string;
  };
  Create: undefined;
};

export type ProductCardProps = {
  product: {
    avatar: string;
    name: string;
    price: number;
    _id: string;
    description: string;
  };
};

export interface ProductType {
  name: string;
  avatar: string;
  price: number;
  _id: string;
  desc: string;
}
