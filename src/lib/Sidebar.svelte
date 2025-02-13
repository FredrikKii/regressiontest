<script lang="ts">
	import { createEventDispatcher } from "svelte";
  
	const dispatch = createEventDispatcher(); // Skapa event dispatcher
  
	function navigate(screen: string) {
	  dispatch("navigate", screen); // Skicka event till App.svelte
	}
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
			<a href="#" on:click={() => navigate("home")}>
			  <img class="icon" src="/Home-white.svg" alt="Home icon" />
			  Hem
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
			<a href="#" on:click={() => navigate("fakturering")}>
			  <img class="icon" src="/Invoice-white.svg" alt="Invoice icon" />
			  Fakturering
			</a>
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
	  margin-top: 1em;
	  width: 100%;
	  margin-top: 20px;
	}
  
	.icon {
	  width: 20px;
	  margin-right: 8px;
	  vertical-align: middle;
	}
  
	.sidebar {
	  padding-left: 1rem;
	  padding-right: 1rem;
	  width: 500px;
	  height: 100vh;
	  background-color: var(--color-primary);
	}
  
	a {
	  color: white;
	  text-decoration: none;
	  display: flex;
	  align-items: center;
	  padding: 0.5em;
	  cursor: pointer;
	}
  
	nav {
		margin-top: 5rem;
	}

	ul {
	  list-style-type: none;
	  padding: 0;
	
	}
  </style>
  