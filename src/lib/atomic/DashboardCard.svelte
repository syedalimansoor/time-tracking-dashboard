<script lang="ts">
  import type { Activity, Timeframe } from "$src/types";
  import { getPreviousDurationText, toKebabCase } from "$src/utils";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";

  export let activity: Activity;
  $: titleKebabCase = toKebabCase(activity.title);
  $: imageUrl = "src/assets/icon-" + titleKebabCase + ".svg";

  /** The current selected timeframe */
  let timeframe: Writable<Timeframe> = getContext("timeframe");
  $: previousDuration = getPreviousDurationText($timeframe);
</script>

<article
  class={["card", titleKebabCase].join(" ")}
  style:--imageUrl={`url(${imageUrl})`}
>
  <div class="card__content-wrapper">
    <h2 class="card__title">
      {activity.title}
    </h2>
    <div class="card__grab-handle" role="button">
      <img src="src/assets/icon-ellipsis.svg" alt="" />
      <img src="src/assets/icon-ellipsis.svg" alt="" />
    </div>
    <strong class="card__current-duration">
      <time>{activity.timeframes[$timeframe].current}hrs</time>
    </strong>
    <p class="card__previous-duration">
      {previousDuration} &mdash;
      <time>{activity.timeframes[$timeframe].previous}hrs</time>
    </p>
  </div>
</article>

<style lang="scss">
  $inline-padding: 1rem;
  $block-padding: 1.5em;

  .card {
    width: 100%;
    background: var(--bg-color) var(--imageUrl) no-repeat top -10px right $inline-padding;
    border-radius: $card-border-radius;
    padding-block-start: 2rem;

    &__content-wrapper {
      background: $clr-dark-blue;
      color: white;
      border-radius: $card-border-radius;
      padding: {
        block: $block-padding;
        inline: $inline-padding;
      }
      display: grid;
      align-items: start;
      row-gap: 0.5em;
      height: 100%;
    }

    &__title {
      font-size: medium;
      font-weight: $fw-bold;
    }

    &__current-duration {
      font-size: xx-large;
      font-weight: $fw-light;
      align-self: end;
      line-height: 1;
    }

    &__previous-duration {
      font-size: small;
      font-weight: $fw-reg;
      text-align: right;
      color: $clr-pale-blue;
      grid-column: 2;
      align-self: end;
    }

    &__grab-handle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4px;
      width: 16px;
      grid-column: 2;
      justify-self: end;
    }

    @media (min-width: $bp-tablet) {
      &__content-wrapper {
        padding: {
          inline: $inline-padding * 1.5;
        }
      }

      &__current-duration {
        margin-top: 0.4em;
        font-size: 3rem;
      }

      &__previous-duration {
        grid-column: 1;
        justify-self: start;
      }
    }
  }
  .work {
    --bg-color: #{$clr-work};
  }
  .play {
    --bg-color: #{$clr-play};
  }
  .study {
    --bg-color: #{$clr-study};
  }
  .exercise {
    --bg-color: #{$clr-exercise};
  }
  .social {
    --bg-color: #{$clr-social};
  }
  .self-care {
    --bg-color: #{$clr-self-care};
  }
</style>
