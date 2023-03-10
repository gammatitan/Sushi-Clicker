<script lang="ts">
  export let onStartClick: () => void;

  let buttonClicked = false;

  const handleClick = () => {
    buttonClicked = true;
    onStartClick();
  };
</script>

<div id="welcome-screen" class={buttonClicked ? "animate-out" : ""}>
  <h1 id="title">Flying Sushi</h1>
  <button id="start-button" on:click={handleClick}>Let's go</button>
</div>

<style>
  #welcome-screen {
    text-align: center;
  }

  #title {
    margin: 0 0 24px;
    font-family: "Karmatic Arcade";
    font-size: 40px;
    letter-spacing: 6px;
    color: #1f272d;
    animation: flash-opacity 1.5s linear infinite;
    animation-timing-function: steps(1, end);
  }

  #start-button {
    height: 50px;
    padding: 0 15px;
    cursor: pointer;
    color: #ffffff;
    background-color: rgb(39, 50, 59);
    border: 6px ridge #6e6e6e;
  }

  #start-button:hover {
    background-color: rgb(31, 39, 45);
  }

  .animate-out {
    animation: slide-up 3s linear forwards;
  }

  @keyframes slide-up {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-470px);
    }
  }

  @keyframes flash-opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    0% {
      opacity: 0;
    }
  }
</style>
