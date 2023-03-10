<script lang="ts">
  import ShopItem from "./ShopItem.svelte";

  import {
    ShopItem as ShopItemIds,
    SHOP_ITEMS,
    type PurchasesLookup,
  } from "../config";

  export let score: number = 0;
  export let onItemClick: (id: ShopItemIds) => void;
  export let itemsOwned: PurchasesLookup;
</script>

<div>
  {#each SHOP_ITEMS as item}
    <div class="shop-item-wrapper">
      <ShopItem
        onClick={onItemClick}
        id={item.id}
        name={item.name}
        ownedCount={itemsOwned[item.id]}
        cost={itemsOwned[item.id]
          ? item.pointsRequired * itemsOwned[item.id] * 2
          : item.pointsRequired}
        image={item.image}
        {score}
      />
    </div>
  {/each}
</div>

<style>
  .shop-item-wrapper {
    margin-bottom: 16px;
  }
</style>
