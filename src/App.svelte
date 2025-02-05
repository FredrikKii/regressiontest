<script lang="ts">
  import Fakturering from "./lib/Fakturering.svelte";
    import Sidebar from "./lib/Sidebar.svelte";
</script>

<main>
    <Sidebar />
	<Fakturering />
</main>

<style>
	main {
		display: flex;
	}
</style>
