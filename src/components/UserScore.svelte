<script lang="ts">
  import Panel from "./Panel.svelte";

  export let score: number = 0;
</script>

<Panel>
  <p>Score: {score}</p>
</Panel>
