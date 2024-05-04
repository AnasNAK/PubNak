export interface Post {
    id?: number ;
    title: string;
    content: string;
    category: Category;
    images: string[];
  }
  

  export interface Category {
    name: string;
    id:number;
  }