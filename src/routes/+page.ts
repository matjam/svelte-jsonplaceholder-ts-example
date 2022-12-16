import type { PageLoad } from './$types';
import { getPosts, getUsers } from "$lib/jsonPlaceholderClient";
import type { Post, User } from '$lib/jsonPlaceholderTypes';

type PostWithUsername = {
    username: string | undefined
} & Post;

// Example of using two different APIs to do some client side logic
export const load = (async ({ fetch }) => {
    // call multple APIs at the same time async, and wait for them all.
    const [postsResult, usersResult] = await Promise.all([getPosts(fetch), getUsers(fetch)]);

    // construct a map of all the userID->User objects
    let userMap = new Map<number, User>();
    for (let user of usersResult.users) {
        userMap.set(user.id, user)
    }

    // Create an array of the posts with their usernames.
    let result = new Array<PostWithUsername>();

    // typescript saved me here while I was writing this; I had the wrong
    // type to inherit in PostWithUsername above, I'd had it inheriting from User
    // instead of Post and the type checking in my IDE helpfully pointed it out
    // to me. I'm used to this kind of thing from the Go world. It's a massive
    // timesaver.
    for (let post of postsResult.posts) {
        result.push({
            id: post.id,
            userId: post.userId,
            title: post.title,
            body: post.body,
            username: userMap.get(post.userId)?.name
        })
    }

    return { data: result };
}) satisfies PageLoad;
