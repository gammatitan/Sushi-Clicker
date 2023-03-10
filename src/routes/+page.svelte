<script lang="ts">
  import GameApp from "../components/GameApp.svelte";
</script>

<GameApp />

<style>
  @font-face {
    font-family: "Karmatic Arcade";
    src: url("/fonts/font-karmatic-arcade.eot");
    src: url("/fonts/font-karmatic-arcade.ttf") format("truetype");
  }

  @font-face {
    font-family: "Arcade Classic";
    src: url("/fonts/font-arcade-classic.ttf") format("truetype");
  }

  :global(body) {
    display: flex;
    width: 100vw;
    height: 100vh;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: "Arcade Classic";
    overflow: hidden;
  }

  :global(h1),
  :global(p) {
    margin: 0;
    text-transform: uppercase;
  }

  :global(p) {
    font-size: 24px;
  }

  :global(input),
  :global(button) {
    font-size: 26px;
    letter-spacing: 1px;
    font-family: "Arcade Classic";
  }

  :global(input:focus),
  :global(button:focus) {
    outline: 0;
  }

  :global(button) {
    padding: 0;
    background: none;
    border: none;
  }
</style>
