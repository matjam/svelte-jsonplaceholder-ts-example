import type { PageLoad } from './$types';
import { GET } from "$lib/jsonPlaceholderClient";
import type { User } from '$lib/jsonPlaceholderTypes';

export const load = (async ({ fetch, params }) => {
    let id = Number(params.id)
    let user = GET<User>(fetch, "users", id)
    return { user };
}) satisfies PageLoad;
