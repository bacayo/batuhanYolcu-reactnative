export type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: string;
  };
  Create: undefined;
};

export interface IProduct {
  product: {
    avatar: string | undefined;
    name: string | undefined;
    price: number | undefined;
    _id: string | undefined;
    description: string | undefined;
  };
}
