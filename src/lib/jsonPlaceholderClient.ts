import type * as placeholder from "./jsonPlaceholderTypes"

fetch: typeof fetch;

const baseUrl = "https://jsonplaceholder.typicode.com"

// fetchFn is passed in all the way from the +page.ts, and is provided by svelte. If you use the
// window.fetch client, things don't seem to work.

async function request<TResponse>(fetchFn: (url: string) => Promise<any>, url: string): Promise<TResponse> {
    const response = await fetchFn(url);
    return await response.json() as TResponse;
}

export async function getPosts(fetchFn: (url: string) => Promise<any>) {
    var data = await request<placeholder.Posts>(fetchFn, `${baseUrl}/posts`);

    return { posts: data };
};

export async function getPost(fetchFn: (url: string) => Promise<any>, id: number) {
    var data = await request<placeholder.Post>(fetchFn, `${baseUrl}/posts/${id}`);

    return { ...data };
};

export async function getUsers(fetchFn: (url: string) => Promise<any>) {
    var data = await request<placeholder.Users>(fetchFn, `${baseUrl}/users`);

    return { users: data };
};
