<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	console.log('got data:');
	console.log(data);
</script>

<h1>Posts</h1>

{#each data.data as post}
	<h2>Title: {post.title}</h2>
	<h3>user: {post.username} ({post.userId})</h3>
	<p>{post.body}</p>
{/each}
