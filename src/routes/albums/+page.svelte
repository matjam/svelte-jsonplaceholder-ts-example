<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Albums</h1>
<table>
	<thead>
		<td>id</td>
		<td>title</td>
		<td>userId</td>
	</thead>
	{#each data.albums as album}
		<tr>
			<td>{album.id}</td>
			<td><a href="/albums/{album.id}">{album.title}</a></td>
			<td><a href="/users/{album.userId}">{album.userId}</a></td>
		</tr>
	{/each}
</table>

<style>
	thead {
		background-color: #3f87a6;
		color: #fff;
	}

	table {
		border-collapse: collapse;
		border: 2px solid rgb(200, 200, 200);
		letter-spacing: 1px;
		font-family: sans-serif;
		font-size: 0.8rem;
	}

	td {
		border: 1px solid rgb(190, 190, 190);
		padding: 5px 10px;
		text-align: center;
	}
</style>
