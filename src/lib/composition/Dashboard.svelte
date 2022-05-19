<script lang="ts">
  import { setContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { writable } from "svelte/store";
  import { fly } from "svelte/transition";
  import { expoOut } from "svelte/easing";
  import DashboardCardGrid from "$src/lib/composition/DashboardCardGrid.svelte";
  import type { Activity, Timeframe, User } from "$src/types";
  import DashboardHeader from "./DashboardHeader.svelte";

  /** Name and avatar of the dashboard user */
  export let user: User;

  /** Data for the activities that the user has performed */
  export let activities: Activity[];

  const prevTimeframe = localStorage.getItem("timeframe") as Timeframe;

  const timeframe: Writable<Timeframe> = (() => {
    const { subscribe, set, update } = writable<Timeframe>(
      prevTimeframe || "daily"
    );
    const setAndUpdateLocalStorage = (value: Timeframe) => {
      set(value);
      localStorage.setItem("timeframe", value);
    };
    return {
      subscribe,
      set: setAndUpdateLocalStorage,
      update,
    };
  })();
  setContext("timeframe", timeframe);
</script>

<main class="dashboard" in:fly={{ duration: 1000, easing: expoOut, y: 100 }}>
  <DashboardHeader {user} />
  <DashboardCardGrid {activities} />
</main>

<style lang="scss">
  .dashboard {
    display: grid;
    /* flex-direction: column; */
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
      max-width: 50em;
      /* flex-direction: row; */
      grid-template-columns: 1fr 3fr;
    }
  }
</style>
