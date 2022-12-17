<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData; // has to be called "data"
</script>

<h1>{data.user.name}</h1>

<table>
	<tr>
		<td class="label">ID</td><td>{data.user.id}</td>
	</tr><tr>
		<td class="label">Name</td><td>{data.user.name}</td>
	</tr><tr>
		<td class="label">Username</td><td>{data.user.username}</td>
	</tr><tr>
		<td class="label">Email</td><td>{data.user.email}</td>
	</tr><tr>
		<td class="label">Phone</td><td>{data.user.phone}</td>
	</tr><tr>
		<td class="label">Website</td><td>{data.user.website}</td>
	</tr>
</table>

<h3>Address</h3>
<table>
	<tr>
		<td class="label">Street</td><td>{data.user.address.street}</td>
	</tr><tr>
		<td class="label">Suite</td><td>{data.user.address.suite}</td>
	</tr><tr>
		<td class="label">City</td><td>{data.user.address.city}</td>
	</tr><tr>
		<td class="label">Zipcode</td><td>{data.user.address.zipcode}</td>
	</tr><tr>
		<td class="label">Geo</td><td>latitude {data.user.address.geo.lat} longitude {data.user.address.geo.lng}</td>
	</tr>
</table>

<h3>Company</h3>
<table>
	<tr>
		<td class="label">Name</td><td>{data.user.company.name}</td>
	</tr><tr>
		<td class="label">Catchphrase</td><td>{data.user.company.catchPhrase}</td>
	</tr><tr>
		<td class="label">BS</td><td>{data.user.company.bs}</td>
	</tr>
</table>

<style>
	.label {
		text-align: right;
		font-weight: bold;
	}
</style>
