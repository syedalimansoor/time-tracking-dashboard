<script lang="ts">
  import DashboardCard from "./lib/atomic/DashboardCard.svelte";
  import data from "./data/data.json";
  import "./style/global.scss";
</script>

<div class="component-wrapper">
  <DashboardCard activity={data[0]} timeframe="daily" />
</div>

<style lang="scss">
  .component-wrapper {
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
</style>
