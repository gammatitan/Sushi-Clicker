<script lang="ts">
  import UserScore from "./UserScore.svelte";
  import SoundToggle from "./SoundToggle.svelte";
  import Shop from "./Shop.svelte";
  import type { PurchasesLookup, ShopItem } from "../config";

  export let score: number = 0;
  export let toggleSound: () => void;
  export let audioEnabled: boolean = false;
  export let gameStarted: boolean = false;
  export let onShopItemClick: (id: ShopItem) => void;
  export let itemsOwned: PurchasesLookup;
</script>

<div id="sidebar">
  <div class="sidebar-section">
    <UserScore {score} />
  </div>

  {#if gameStarted}
    <div class="sidebar-section">
      <p class="sidebar-section__title">Upgrades</p>
      <Shop {score} onItemClick={onShopItemClick} {itemsOwned} />
    </div>
    <div id="game-audio-toggle">
      <SoundToggle {audioEnabled} onClick={toggleSound} />
    </div>
  {/if}
</div>

<style>
  #sidebar {
    background-image: url("../assets/brick.png");
    background-repeat: repeat;
    padding: 24px;
  }

  .sidebar-section {
    margin-bottom: 40px;
  }

  .sidebar-section__title {
    margin-bottom: 16px;
    color: white;
    font-size: 32px;
  }

  #game-audio-toggle {
    position: absolute;
    bottom: 24px;
    right: 24px;
  }
</style>
