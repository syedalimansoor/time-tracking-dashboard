<script lang="ts">
  import type { User } from "$src/types";
  import ProfileCard from "../atomic/ProfileCard.svelte";
  import TimeframeSelector from "../atomic/TimeframeSelector.svelte";

  export let user: User;
</script>

<header class="header">
  <ProfileCard {user} />
  <TimeframeSelector />
</header>

<style lang="scss">
  .header {
    background-color: $clr-dark-blue;
    border-radius: $card-border-radius;
  }
</style>
