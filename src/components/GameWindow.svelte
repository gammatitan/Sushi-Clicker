<script lang="ts">
  import Clicker from "./Clicker.svelte";
  import WelcomeScreen from "./WelcomeScreen.svelte";

  export let gameStarted: boolean = false;
  export let audioEnabled: boolean = false;
  export let onClickerAction: () => void;
  export let onStartGame: () => void;

  let animateInClicker = false;

  const handleStartClick = () => {
    animateInClicker = true;
    onStartGame();
  };
</script>

<div id="game-window">
  <div class="clicker-wrapper {animateInClicker ? 'animate-in' : ''}">
    <Clicker onClick={onClickerAction} {audioEnabled} />
  </div>

  {#if !gameStarted}
    <WelcomeScreen onStartClick={handleStartClick} />
  {/if}
</div>

<style>
  #game-window {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background-size: 200%;
    background-repeat: repeat-x;
    background-image: url("../assets/background-action-window.png");
    animation: sidescroll 5s linear infinite;
    overflow: hidden;
  }

  .clicker-wrapper {
    position: absolute;
    transform: translateX(-520px);
  }

  .clicker-wrapper.animate-in {
    animation: slide-in 2s linear forwards;
    animation-delay: 5s;
  }

  @keyframes sidescroll {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -800px 0;
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateX(-520px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
