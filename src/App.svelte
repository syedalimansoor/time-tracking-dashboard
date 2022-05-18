<script lang="ts">
  import Dashboard from "./lib/composition/Dashboard.svelte";
  import activities from "./data/data.json";

  import "./style/global.scss";
</script>

<div class="wrapper">
  <div class="dashboard-wrapper">
    <Dashboard {activities} />
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
  }
</style>
