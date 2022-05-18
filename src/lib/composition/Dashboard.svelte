<script lang="ts">
  import { setContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { writable } from "svelte/store";
  import DashboardCardGrid from "$src/lib/composition/DashboardCardGrid.svelte";
  import type { Activity, Timeframe } from "$src/types";

  export let activities: Activity[];

  const timeframe: Writable<Timeframe> = writable<Timeframe>("daily");
  setContext("timeframe", timeframe);
</script>

<main>
  <DashboardCardGrid {activities} />
</main>
