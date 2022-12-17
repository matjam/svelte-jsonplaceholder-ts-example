<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Users</h1>
<table>
	<thead>
		<td>id</td>
		<td>username</td>
		<td>name</td>
		<td>email</td>
		<td>phone</td>
		<td>website</td>
	</thead>
	{#each data.users as user}
		<tr>
			<td>{user.id}</td>
			<td>{user.username}</td>
			<td><a href="/users/{user.id}">{user.name}</a></td>
			<td>{user.email}</td>
			<td>{user.phone}</td>
			<td>{user.website}</td>
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
