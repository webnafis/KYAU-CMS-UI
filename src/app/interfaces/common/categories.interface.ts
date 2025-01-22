export interface  Category{
    id?:any, // its not good practise
    name: string,
    subcategories?: Subcategory[];
}

interface Subcategory{
    id?: string;
    name: string;
}