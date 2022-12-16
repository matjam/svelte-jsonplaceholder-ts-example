export type Post = {
    id: number
    userId: number
    title: string
    body: string
}

export type Posts = Post[]

export type Comment = {
    id: number
    postId: number
    name: string
    email: string
    body: string
}

export type Comments = Comment[]

export type Album = {
    id: number
    userId: number
    title: string
}

export type Albums = Album[]

export type Photo = {
    id: number
    albumId: number
    title: string
    url: string
    thumbnailUrl: string
}

export type Photos = Photo[]

export type Todo = {
    id: number
    userId: number
    title: string
    completed: boolean
}

export type Todos = Todo[]

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipclode: string;
        geo: {
            lat: number;
            lng: number;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string
    };
}

export type Users = User[];

export { };