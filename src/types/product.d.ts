export interface Type {
    value: string;
    image?: string | null;
}

export interface Variant {
    name: string;
    types: Type[];
    image?: string;
}

export interface ProductVariant {
    name: string;
    value: string;
}

export interface Grocery {
    minUnit: number;
    price: number;
    promotionType: string;
    promotionPrice: number | null;
}

export interface VariantItem {
    id: string;
    name: string;
    productVariant: { name: string; value: string }[];
    stock: number;
    price: number;
}

export interface Product {
    id?: string;
    categoryIds: string[];
    name: string;
    description: string;
    stockUnit: string;
    stock: number;
    price: number;
    promotionType?: string | null;
    promotionPrice?: number | null;
    length: number;
    width: number;
    height: number;
    weight: number;
    grocery?: {
        minUnit?: number | null;
        price?: number | null;
        promotionType?: string | null;
        promotionPrice?: number | null;
    };
    images: string[];
    variant?: {
        list: Variant[];
        variantItems: VariantItem[];
    };
}

export interface IRs_ProductTable {
    string: string; 
    categories: string;
    name: string;
    image: string;
    price: number;
    stock: number;
    groceryPrice: number;
    isPublish: boolean;
}


export interface CategoryItem {
    id: number;
    name: string;
}

export interface FileWithPreview extends File {
    preview: string;
}
  
export interface ImageUploaderProps {
    previewLabel?: string;
    uploadLabel?: string;
    onChange?: (image: string | null) => void; 
    uploading?: boolean;
    defaultImage?: string;
    onDelete?: () => void;
    isEditMode?: boolean
}

//upload image
export interface UploadResponse {
    data: {
      token: string;
    };
  }
