<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData; // has to be called "data"
</script>

<h1>Photos for album</h1>
<table>
	<thead>
		<td>ID</td>
		<td>Title</td>
		<td>Image</td>
	</thead>
	{#each data.photos as photo}
		<tr>
			<td>{photo.id}</td>
			<td><a href="/photos/{photo.id}">{photo.title}</a></td>
			<td><a href={photo.url}><img src={photo.thumbnailUrl} alt={photo.title} /></a></td>
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
