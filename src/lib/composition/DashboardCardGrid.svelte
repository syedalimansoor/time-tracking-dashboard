<script lang="ts">
  import type { Activity } from "$src/types";
  import { onMount } from "svelte";
  import DashboardCard from "../atomic/DashboardCard.svelte";
  import Sortable from "sortablejs";

  export let activities: Activity[];

  let grid: HTMLElement;

  onMount(() => {
    new Sortable(grid, {
      animation: 200,
      handle: ".card__grab-handle",
    });
  });
</script>

<section class="grid" bind:this={grid}>
  {#each activities as activity}
    <DashboardCard {activity} />
  {/each}
</section>

<style lang="scss">
  .grid {
    display: grid;
    gap: $grid-gap;
  }

  @media (min-width: $bp-mobile) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: $bp-tablet) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
