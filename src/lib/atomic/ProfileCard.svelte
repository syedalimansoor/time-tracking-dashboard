<script lang="ts">
  import type { User } from "$src/types";

  export let user: User;
</script>

<section class="header">
  <img class="header__avatar" src={user.avatar} alt="avatar" />
  <h1 class="header__heading">
    Report for
    <strong class="header__user-name">{user.name}</strong>
  </h1>
</section>

<style lang="scss">
  .header {
    background-color: $clr-blue;
    border-radius: $card-border-radius;
    color: white;
    padding: 1.6em;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-grow: 1;
    gap: 1em;

    &__avatar {
      max-width: 3.5em;
      border: 3px solid white;
      border-radius: 99em;
    }

    &__heading {
      font-size: 0.8rem;
      font-weight: $fw-reg;
      color: $clr-pale-blue;
    }

    &__user-name {
      display: block;
      font-size: 1.4rem;
      font-weight: $fw-light;
      color: white;
    }

    @media (min-width: $bp-tablet) {
      flex-direction: column;
      align-items: start;

      &__user-name {
        font-size: 1.8rem;
      }
    }
  }
</style>
