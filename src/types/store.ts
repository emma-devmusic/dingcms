export interface AuthState {
    name: string | null;
    email: string | null;
    instagram?: string | null;
    pages?: string[] | null;
    uid: string | null;
    image?: string | null;
    phone?: string | null;
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
    id: string;
    entity: string;
    blog: DataBlog
}

export interface Category {
    name: string;
}

export interface Categories {
    categories: Category[]
}


export interface UserState {
    user: {
        name: string;
        email: string;
        instagram: string;
        pages: string[];
        uid: string;
        image: string;
        phone: string;
    }
}
