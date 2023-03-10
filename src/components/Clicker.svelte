<script lang="ts">
  import Sushi from "../assets/sushi.png";
  import SoundChompOne from "../assets/chomp-1.mp3";
  import SoundChompTwo from "../assets/chomp-2.mp3";

  export let onClick: () => void;
  export let audioEnabled: boolean = false;

  let nextChompSound = 1;

  const playChompSound = () => {
    const soundOne = new Audio(SoundChompOne);
    const soundTwo = new Audio(SoundChompTwo);

    if (!audioEnabled) {
      return;
    }

    if (nextChompSound === 1) {
      soundTwo.play();
      nextChompSound = 2;
    } else {
      soundOne.play();
      nextChompSound = 1;
    }
  };

  const handleClick = () => {
    onClick();
    playChompSound();
  };
</script>

<button on:click={handleClick}>
  <img src={Sushi} alt="" draggable="false" />
</button>

<style>
  button {
    background: none;
    border: none;
    cursor: pointer;
    animation: bobbing 2s infinite linear;
    width: 240px;
  }

  button:active {
    transform: scale(0.9);
  }

  img {
    width: 100%;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @keyframes bobbing {
    0% {
      transform: translate3d(0);
    }
    50% {
      transform: translate3d(0, -15px, 0);
    }
    100% {
      transform: translate3d(0);
    }
  }
</style>
