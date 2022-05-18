<script lang="ts">
  import { setContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { writable } from "svelte/store";
  import DashboardCardGrid from "$src/lib/composition/DashboardCardGrid.svelte";
  import type { Activity, Timeframe } from "$src/types";
  import DashboardHeader from "./DashboardHeader.svelte";

  export let activities: Activity[];

  const timeframe: Writable<Timeframe> = writable<Timeframe>("daily");
  setContext("timeframe", timeframe);
</script>

<main class="dashboard">
  <DashboardHeader />
  <DashboardCardGrid {activities} />
</main>

<style lang="scss">
  .dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $grid-gap;

    @media (min-width: $bp-tablet) {
      flex-direction: row;
    }
  }
</style>
