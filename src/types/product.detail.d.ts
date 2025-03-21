interface Category {
    id: string;
    name: string;
  }
  
  interface ProductInformation {
    name: string;
    categories: Category[];
    stockUnit: string;
    stock: number;
  }
  
  interface ProductDetailImage {
    token: string;
    image: string;
    type: string;
  }
  
  interface ProductDetail {
    images: ProductDetailImage[];
    description: string;
  }
  
  interface PricePerUnit {
    basePrice: number;
    promotionType: string;
  }
  
  interface GroceryPrice {
    minUnit: number;
    price: number;
    promotionType: string;
  }
  
  interface Price {
    pricePerUnit: PricePerUnit;
    groceryPrice: GroceryPrice;
  }
  
  interface Specification {
    length: number;
    width: number;
    height: number;
    weight: number;
  }

  interface VariantType {
    name: string;
    types: {
      value: string;
      image?: string;
    }[];
  }
  
  interface VariantItem {
    id: string;
    name: string;
    productVariant: {
      name: string;
      value: string;
    }[];
    stock: number;
    price: number;
  }
  
  interface Variant {
    id: string;
    list: VariantType[];
    variantItems: VariantItem[];
  }
  
  interface ProductResponse {
    code: number;
    message: string;
    data: {
      id: string;
      information: ProductInformation;
      detail: ProductDetail;
      price: Price;
      specification: Specification;
      variant?: Variant;
    };
  }
  