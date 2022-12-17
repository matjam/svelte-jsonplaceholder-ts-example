import type { PageLoad } from './$types';
import { GET } from "$lib/jsonPlaceholderClient";
import type { Photos } from '$lib/jsonPlaceholderTypes';

export const load = (async ({ fetch, params }) => {
    let id = Number(params.id)
    let photos = GET<Photos>(fetch, `photos?albumId=${id}`)
    return { photos };
}) satisfies PageLoad;
