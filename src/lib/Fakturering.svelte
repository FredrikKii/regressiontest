<script lang="ts">
    import { invoices } from "./data";
    let searchTerm = "";
    let filter = "Alla fakturor";
    const filters = [
        "Alla fakturor",
        "Utkast",
        "Obetalda",
        "Förfallna",
        "Betalda",
    ];
</script>

<main>
    <div class="wrapping">
        <p class="title">Fakturering</p>
        <ul class="horizontal-list">
            <li class="kundfakturor">Kundfakturor</li>
            <li>Kunder</li>
            <li>Artiklar</li>
            <li>RUT/ROT-Fakturor</li>
            <li>Offerter</li>
        </ul>
        <div class="mainBox">
            <div class="search-box">
                <input
                    type="text"
                    placeholder="Sök..."
                    bind:value={searchTerm}
                />
            </div>
            <div class="filter-options">
                {#each filters as option}
                    <button
                        on:click={() => (filter = option)}
                        class:selected={filter === option}
                    >
                        {option}
                    </button>
                {/each}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Fakturanummer</th>
                        <th>Kund</th>
                        <th>Fakturadatum</th>
                        <th>Förfallodatum</th>
                        <th>Belopp</th>
                        <th>Betald</th>
                    </tr>
                </thead>
                <tbody>
                    {#each invoices as invoice}
                        <tr>
                            <td>{invoice.id}</td>
                            <td>{invoice.customer}</td>
                            <td>{invoice.invoiceDate}</td>
                            <td>{invoice.dueDate}</td>
                            <td>{invoice.amount}</td>
                            <td>{invoice.paid ? "✔" : ""}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</main>

<style>
    .kundfakturor {
        border-bottom: 7px solid orange;
    }
    .wrapping {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80vw;
        height: 80vh;
    }

    .title,
    .horizontal-list,
    .mainBox {
        width: 70%;
    }

    .title {
        color: black;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: left;
        margin-bottom: 10px;
    }

    .horizontal-list {
        color: black;
        list-style: none;
        display: flex;
        gap: 20px;
        padding: 0;
        text-align: left;
        margin-bottom: 20px;
    }

    .mainBox {
        padding: 20px;
        background-color: rgb(250, 250, 250);
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        color: black;
    }

    .search-box {
        margin-bottom: 20px;
    }

    .search-box input {
        width: 100%;
        padding: 8px;
        font-size: 1rem;
    }

    .filter-options {
        margin-bottom: 20px;
    }

    .filter-options button {
        margin-right: 10px;
        padding: 8px 12px;
        border: none;
        background-color: #f8f8f8;
        cursor: pointer;
    }

    .filter-options button.selected {
        border-bottom: 2px solid orange;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        padding: 8px;
        border: 1px solid #e4e4e4;
        text-align: left;
    }
</style>
