# svelte-jsonplaceholder-ts-example

This project is a work in progress example of a svelte project using an
external API written in TypeScript.

I was finding it difficult to figure this out but with some reading of
docs, (pro tip, there's a "TS" toggle at the bottom left of the SvelteKit
docs page) along with asking colleagues questions, I have got things
working.

I don't demonstrate ALL the kinds of things sveltekit does, but I do
demonstrate how to fetch data from external APIs, render the results,
etc - all using TS types.

## Getting it working

```
$ yarn install
$ yarn run dev
```

or whatever tooling you like to use.

## Interesting things

A lot of the fun action is implemented in `GET()` in `src/lib/jsonPlaceholderClient.ts`. This single function will get the passed type (it is a Template/generic function) from the passed resource (we hard-coded it to use jsonplaceholder) and will return that type on success. Failures aren't handled, so I guess they'll just end up in a 500 :-)

## Conclusion

I think svelte and sveltekit is very cool. I am a backend guy so I've not got a ton of experience with FE frameworks but I've been forced to write a lot of JS over the years (with a gun held to my head) and never enjoyed it.

Svelte, I enjoy. It works pretty much the way I expect - there's a couple of little traps - like you can't rename some variables as Svelte treats them as magic variables so you have to always call your `data` variable in int `+page.svelte` that - you can't change it. But it's ok, you might be returning multiple things in `PageData` so forcing that means you won't be refactoring later.

Anyway, hope this helps.

## Halp

I'm sure you are better at svelte, typescript, javascript, than I am. File a PR, I'll merge it. I was looking at implementing a TypeScript version of the [Realworld](https://github.com/gothinkster/realworld) app (the official [Svelte Realworld](https://github.com/sveltejs/realworld) app is in Javascript) but then realised it would take a lot of time so I decided against that. I can see why they didn't do it yet.