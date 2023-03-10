<script lang="ts">
  import type { ShopItem } from "../config";

  export let id: ShopItem;
  export let name: string;
  export let ownedCount: number = 0;
  export let cost: number = 0;
  export let score: number;

  export let onClick: (id: ShopItem) => void;
  export let image: string;

  const handleClick = () => {
    onClick(id);
  };
</script>

<div>
  <button class="shop-item" on:click={handleClick} disabled={cost - 1 >= score}>
    <img class="shop-item__img" src={image} alt="" />
    <div>
      <p class="shop-item__title">{name}</p>
      <p class="shop-item__owned">Cost: {cost}</p>
      <p class="shop-item__owned">Brought: {ownedCount}</p>
    </div>
  </button>
</div>

<style>
  .shop-item {
    padding: 15px;
    cursor: pointer;
    color: #ffffff;
    background-color: rgb(39, 50, 59);
    border: 6px ridge #6e6e6e;
    display: grid;
    grid-template-columns: 40px auto;
    gap: 16px;
    align-items: center;
    text-align: left;
    width: 100%;
  }

  .shop-item:active {
    transform: scale(0.9);
  }

  .shop-item:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .shop-item__img {
    margin: 0 auto;
    height: 40px;
  }

  .shop-item__title {
    font-size: 20px;
    margin-bottom: 4px;
  }

  .shop-item__owned {
    font-size: 16px;
  }
</style>
