import type { PageLoad } from './$types';
import { GET } from "$lib/jsonPlaceholderClient";
import type { Albums } from '$lib/jsonPlaceholderTypes';

export const load = (async ({ fetch }) => {
    let albums = GET<Albums>(fetch, "albums")
    return { albums };
}) satisfies PageLoad;
