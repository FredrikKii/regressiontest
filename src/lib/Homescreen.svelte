<script lang="ts">
    import { homeCards } from "../Data/homecards";
    import Sidebar from "./Sidebar.svelte";
</script>

<div class="layout">
    <section>
        <div class="grid-layout">
            {#each homeCards as card}
                <div class="homecards">
                    <img src={card.icon} alt="Icon on card" />
                    <h2>{card.name}</h2>
                    <p>{card.description}</p>
                </div>
            {/each}
        </div>
    </section>
</div>

<style>
    .layout {
        display: flex;
        height: 100vh;
        width: 100vw;
    }

    section {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
        overflow: auto;
        width: 80vw;
    }

    .grid-layout {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 8em;
    }

    .homecards {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: black;
        border: 1px solid black;
        width: 300px;
        height: 200px;
        border-radius: 1em;
        padding: 1em;
        -webkit-box-shadow: 0px 2px 16px -4px rgba(0, 0, 0, 0.64);
        -moz-box-shadow: 0px 2px 14px -4px rgba(0, 0, 0, 0.64);
        box-shadow: 0px 2px 14px -4px rgba(0, 0, 0, 0.64);

        p {
            font-size: 12px;
        }

        h2 {
            font-size: 22px;
        }

        img {
            width: 34px;
            height: 34px;
        }
    }
</style>
