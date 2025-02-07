<script lang="ts">
    import Fakturering from "./lib/Fakturering.svelte";
    import Header from "./lib/Header.svelte";
    import Homescreen from "./lib/Homescreen.svelte";
    import Sidebar from "./lib/Sidebar.svelte";

    let currentScreen = "home"; // Standard: Homescreen visas först

    function setScreen(screen: string) {
        currentScreen = screen; // Uppdaterar aktiv skärm
    }
</script>

<main>
    <div class="header-container">
        <Header />
    </div>

    <Sidebar on:navigate={(e) => setScreen(e.detail)} />
    <!-- Dynamiskt visa rätt komponent -->
    {#if currentScreen === "home"}
        <Homescreen />
    {:else if currentScreen === "fakturering"}
        <Fakturering />
    {/if}
</main>

<style>
    main {
        display: flex;
    }

    .header-container {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 100;
    }
</style>
