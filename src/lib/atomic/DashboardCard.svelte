<script lang="ts">
  import type { Activity, Timeframe } from "$src/types";
  import { getPreviousDurationText } from "$src/utils";

  export let activity: Activity;

  /** The current selected timeframe */
  export let timeframe: Timeframe;

  $: previousDuration = getPreviousDurationText(timeframe);
</script>

<article class="card">
  <h2 class="card__title">
    {activity.title}
  </h2>
  <strong class="card__current-duration">
    <time>{activity.timeframes[timeframe].current}hrs</time>
  </strong>
  <p class="card__previous-duration">
    {previousDuration} &mdash;
    <time>{activity.timeframes[timeframe].previous}hrs</time>
  </p>
</article>
