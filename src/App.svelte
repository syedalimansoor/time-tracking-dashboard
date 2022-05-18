<script lang="ts">
  import { setContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { writable } from "svelte/store";
  import activities from "./data/data.json";
  import DashboardCardGrid from "./lib/composition/DashboardCardGrid.svelte";
  import "./style/global.scss";
  import type { Timeframe } from "./types";
  const timeframe: Writable<Timeframe> = writable<Timeframe>("daily");
  setContext("timeframe", timeframe);
</script>

<div class="component-wrapper">
  <DashboardCardGrid {activities} />
</div>

<style lang="scss">
  .component-wrapper {
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
</style>
