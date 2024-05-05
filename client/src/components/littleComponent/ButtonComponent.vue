<template>
  <button type="button">
    <slot>
      {{ t('global.btn.default') }}
    </slot>
  </button>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.btn {
  cursor: pointer;
  padding: clamp(0.313rem, 0.199rem + 0.57vw, 0.625rem) clamp(0.625rem, 0.398rem + 1.14vw, 1.25rem);
  font-size: clamp(0.813rem, 0.744rem + 0.34vw, 1rem);
  font-weight: 500;
  border: none;
  @include abs.breakpoint('mobile-lg') {
    width: 100%;
  }

  &--primary {
    padding: clamp(0.5rem, 0.455rem + 0.23vw, 0.625rem) clamp(0.938rem, 0.597rem + 1.7vw, 1.875rem);
    --clr-font-main: hsla(0 0% 20% / 100);
    --btn-bg-1: hsla(270 80% 69% / 1);
    --btn-bg-2: hsl(260, 87%, 60%);
    --btn-bg-color: hsla(360 100% 100% / 1);
    --radii: 0.5em;
    background-size: 280% auto;
    transition: 0.8s;
    background-image: linear-gradient(
      325deg,
      var(--btn-bg-2) 0%,
      var(--btn-bg-1) 55%,
      var(--btn-bg-2) 90%
    );

    border-radius: var(--radii);
    color: var(--btn-bg-color);
    box-shadow:
      0px 0px 20px #8160c4,
      0px 5px 5px -1px #513c7a,
      inset 4px 4px 8px #916cdc,
      inset -4px -4px 8px #b071ef;
  }


  &--error {
    color: red;
  }

  &--border {
    border: 2px solid white;
    padding: 10px 20px;
    border-radius: 14px;
    transition: all 0.1s linear;

    &:hover {
      background-color: white;
      color: #8160c4;
    }
  }

  &--outline {
    border: 2px solid abs.$accent-color;
    border-radius: 15px;
    transition: all 0.3s;
    background-color: #fff;
    color: abs.$accent-color;
    &:hover {
      background-color: abs.$accent-color;
      color: #fff;
    }

    .dark & {
      background-color: abs.$almost-black;
      color: #fff;
      border: 1px solid #fff;

      &:hover {
        background-color: abs.$accent-color;
        color: #fff;
      }
    }
  }

  &--underline{
    text-decoration: underline;
  }
}

.btn:hover {
  background-position: right top;
}

.btn:is(:focus, :focus-visible, :active) {
  outline: none;
  box-shadow:
    0 0 0 3px var(--btn-bg-color),
    0 0 0 2px var(--btn-bg-2);
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: linear;
  }
}
</style>
