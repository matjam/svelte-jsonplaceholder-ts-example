const baseUrl = "https://jsonplaceholder.typicode.com"

// fetchFn is passed in all the way from the +page.ts, and is provided by svelte. If you use the
// window.fetch client, things don't seem to work.
export async function GET<T>(fetchFn: (url: string) => Promise<any>, resource: string, id?: number): Promise<T> {
    let url = `${baseUrl}/${resource}`
    if (id !== undefined) {
        url = `${url}/${id}`
    }

    const response = await fetchFn(url);
    let jsonResponse = await response.json() as T;
    console.log(jsonResponse);

    return jsonResponse;
}