<script lang="ts">
  import Fakturering from "./lib/Fakturering.svelte";
    import Homescreen from "./lib/Homescreen.svelte";
    import Sidebar from "./lib/Sidebar.svelte";
</script>

<main>
    <Sidebar />
	<Fakturering />
    <!-- <Sidebar /> -->
    <Homescreen />
</main>

<style>
	main {
		display: flex;
	}
</style>
