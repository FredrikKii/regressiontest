<script lang="ts">
</script>

<main>
    <div class="sidebar">
        <img
            class="logo"
            src="/Bjorn_Lunden_Logo_700.png"
            alt="Bjorn Lunden logo"
        />
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <img
                            class="icon"
                            src="/Home-white.svg"
                            alt="Home icon"
                        />Hem
                    </a>
                </li>
                <li>
                    <a href="/document">
                        <img
                            class="icon"
                            src="/Document-white.svg"
                            alt="Document icon"
                        />Dokument</a
                    >
                </li>
                <li>
                    <a href="/bank">
                        <img
                            class="icon"
                            src="/Bank-white.svg"
                            alt="Bank icon"
                        />Bank och Betalning
                    </a>
                </li>
                <li>
                    <a href="/accouting">
                        <img
                            class="icon"
                            src="/Accounting-white.svg"
                            alt="Accounting icon"
                        />Bokföring
                    </a>
                </li>
                <li>
                    <a href="/economy">
                        <img
                            class="icon"
                            src="/Economy-white.svg"
                            alt="Economy icon"
                        />Ekonomiöversikt
                    </a>
                </li>
                <li>
                    <a href="/invoice">
                        <img
                            class="icon"
                            src="/Invoice-white.svg"
                            alt="Invoice icon"
                        />Fakturering
                    </a>
                </li>
                <li>
                    <a href="/buisness-card">
                        <img
                            class="icon"
                            src="/Business-card-white.svg"
                            alt="Business card icon"
                        />Företagskort
                    </a>
                </li>
            </ul>
        </nav>

        <nav>
            <p class="admin">Admin</p>
            <ul>
                <li>
                    <a href="/integration">
                        <img
                            class="icon"
                            src="/Extension-white.svg"
                            alt="intergration icon"
                        />Intergrationer
                    </a>
                </li>
                <li>
                    <a href="/settings">
                        <img
                            class="icon"
                            src="/Settings-white.svg"
                            alt="Settings icon"
                        />Inställningar
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</main>

<style>
    .logo {
        width: 100%;
        margin-bottom: 1rem;
    }

    .icon {
        width: 20px;
        margin-right: 8px;
        vertical-align: middle;
    }

    .sidebar {
        padding: 1rem;
        width: 200px;
        height: 100vh;
        background-color: var(--color-primary);

        a {
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 0.5em;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }
    }

    .admin {
        color: rgba(255, 255, 255, 0.743);
        font-size: 12px;
        margin-left: 8px;
        margin-top: 8em;
    }
</style>
