<script lang="ts">
  import AudioEnabledIcon from "../assets/icon-sound-on.png";
  import AudioDisabledIcon from "../assets/icon-sound-off.png";
  import Tap from "../assets/tap.mp3";

  export let onClick: () => void;
  export let audioEnabled: boolean = false;

  const handleClick = () => {
    const tapSound = new Audio(Tap);
    if (!audioEnabled) {
      tapSound.play();
    }
    onClick();
  };
</script>

<button id="sound-toggle" on:click={handleClick}>
  <img src={audioEnabled ? AudioEnabledIcon : AudioDisabledIcon} alt="" />
</button>

<style>
  #sound-toggle {
    padding: 0 15px;
    cursor: pointer;
    background-color: rgb(39, 50, 59);
    border: 6px ridge #6e6e6e;
  }

  #sound-toggle:hover {
    background-color: rgb(31, 39, 45);
  }

  #sound-toggle:active {
    transform: scale(0.9);
  }
</style>
