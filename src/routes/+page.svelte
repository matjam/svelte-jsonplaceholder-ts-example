<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Posts</h1>

{#each data.posts as post}
	<h2>{post.title}</h2>
	<h3>by <a href="/users/{post.userId}">{post.username}</a></h3>
	<p>{post.body}</p>
	<hr />
{/each}
