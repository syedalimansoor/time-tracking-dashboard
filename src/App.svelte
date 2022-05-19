<script lang="ts">
  import Dashboard from "./lib/composition/Dashboard.svelte";
  import activities from "./data/data.json";
  import type { User } from "$src/types";
  import "./style/global.scss";

  import avatar from "$src/assets/image-jeremy.png";

  const user: User = {
    name: "Jeremy Robson",
    avatar,
  };
</script>

<div class="wrapper">
  <div class="dashboard-wrapper">
    <Dashboard {user} {activities} />
  </div>
</div>

<style lang="scss">
  .wrapper {
    min-height: 100vh;
    background-color: $clr-very-dark-blue;

    display: grid;
    place-items: center;
  }

  .dashboard-wrapper {
    width: 100%;
    height: 100%;
    padding: {
      block: 4em;
      inline: 1.5em;
    }

    @media (min-width: $bp-mobile) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
