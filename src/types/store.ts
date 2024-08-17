export interface AuthState {
    uid: string;
    name: string;
    email: string;
}

export interface EntityState {
    entities: Entity[],
    entitySelected: Entity
}

export interface Entity {
    name: string;
    slug: string;
}

export interface Blog {
    id: string;
    data: DataBlog
}

export interface DataBlog {
    category: string;
    title: string;
    html: string;
    issue: string;
    creator: string;
    description: string;
    image: string | ArrayBuffer;
    id?: string;
    date: string
}


export interface BlogsState {
    blogs: Blog[];
    blogsSelected: Blog[];
    blogActive: Blog
}


export interface NewBlog {
    entity: string;
    blog: DataBlog
}

export interface Category {
    name: string;
}

export interface Categories {
    categories: Category[]
}