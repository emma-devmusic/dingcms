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
    title: string;
    html: string;
}

export interface BlogsState {
    blogs: Blog[];
    blogsSelected: Blog[];
    blogActive: Blog
}


export interface NewBlog {
    entity: string;
    blog: {
        title: string;
        html: string;
    }
}