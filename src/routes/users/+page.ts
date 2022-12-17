import type { PageLoad } from './$types';
import { GET } from "$lib/jsonPlaceholderClient";
import type { Users } from '$lib/jsonPlaceholderTypes';

export const load = (async ({ fetch }) => {
    let users = GET<Users>(fetch, "users")
    return { users };
}) satisfies PageLoad;
