<script lang="ts">
  import { setContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { writable } from "svelte/store";
  import DashboardCardGrid from "$src/lib/composition/DashboardCardGrid.svelte";
  import type { Activity, Timeframe, User } from "$src/types";
  import DashboardHeader from "./DashboardHeader.svelte";

  /** Name and avatar of the dashboard user */
  export let user: User;

  /** Data for the activities that the user has performed */
  export let activities: Activity[];

  const timeframe: Writable<Timeframe> = writable<Timeframe>("daily");
  setContext("timeframe", timeframe);
</script>

<main class="dashboard">
  <DashboardHeader {user} />
  <DashboardCardGrid {activities} />
</main>

<style lang="scss">
  .dashboard {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: $grid-gap;
    width: 100%;
    max-width: 20em;
    margin: 0 auto;

    @media (min-width: $bp-mobile) {
      max-width: 30em;
    }

    @media (min-width: $bp-tablet) {
      flex-direction: row;
    }
  }
</style>
