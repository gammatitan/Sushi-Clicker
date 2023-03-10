<script lang="ts">
  import Panel from "./Panel.svelte";

  export let score: number = 0;
</script>

<Panel>
  <p>{score}</p>
</Panel>

<style>
  p {
    font-size: 32px;
  }
</style>
