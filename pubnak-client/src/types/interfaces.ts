export interface Post {
  id?: number;
  title: string;
  content: string;
  category: Category;
  images: (string | File)[];
}


export interface Category {
  name: string;
  id: number;
}
