<script lang="ts">
  import type { Timeframe } from "$src/types";

  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";

  const timeframe: Writable<Timeframe> = getContext("timeframe");
</script>

<fieldset class="selector">
  <label>
    <input
      class="selector__optn"
      type="radio"
      name="timeframe"
      bind:group={$timeframe}
      value="daily"
    />
    <span class="selector__label">Daily</span>
  </label>
  <label>
    <input
      class="selector__optn"
      type="radio"
      name="timeframe"
      bind:group={$timeframe}
      value="weekly"
    />
    <span class="selector__label">Weekly</span>
  </label>
  <label>
    <input
      class="selector__optn"
      type="radio"
      name="timeframe"
      bind:group={$timeframe}
      value="monthly"
    />
    <span class="selector__label">Monthly</span>
  </label>
</fieldset>

<style lang="scss">
  .selector {
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-block: 1.2em;

    &__label {
      font-weight: $fw-light;
      color: $clr-desaturated-blue;
      cursor: pointer;
      transition: color 100ms ease;

      &:hover {
        color: $clr-pale-blue;
      }
    }

    &__optn {
      width: 0;
      height: 0;
      opacity: 0;

      &:checked ~ .selector__label {
        color: white;
      }
    }

    @media (min-width: $bp-tablet) {
      padding: 1.6em;
      flex-direction: column;
      gap: 1em;
    }
  }
</style>
