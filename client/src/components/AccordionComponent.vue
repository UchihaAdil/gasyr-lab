<template>
  <section class="accordion">
    <div class="tab">
      <input type="checkbox" name="accordion-1" :id="'cb' + props.accordion.id" />
      <label :for="'cb' + props.accordion.id" class="tab__label"
        >{{ props.accordion.id }}. {{ props.accordion.title }}</label
      >
      <div class="tab__content">
        <ul class="tab__content-list">
          <ol
            class="tab__content-item"
            v-for="data in props.accordion.accordionList"
            :key="data.id"
          >
            <p style="margin-left: 30px">{{ data.title }}</p>
          </ol>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  accordion: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
/* Core styles/functionality */
.tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tab__content {
  height: 0;
  overflow: hidden;
  border-bottom: 1px solid white;
  margin-top: 8px;
}
.tab input:checked ~ .tab__content {
  height: 100%;
}

/* Visual styles */
.accordion {
  margin-top: 30px;
  border-radius: 8px;
  overflow: hidden;
}
.tab__label,
.tab__close {
  display: flex;
  color: white;
  background: transparent;
  cursor: pointer;
}
.tab__label {
  justify-content: space-between;
}
.tab__label::after {
  content: '\276F';
  width: 1em;
  height: 1em;
  text-align: center;
  transform: rotate(90deg);
  transition: all 0.35s;
}
.tab input:checked + .tab__label::after {
  transform: rotate(270deg);
}
.tab__content p {
  margin: 0;
  padding: 0.75rem;
}
.tab__close {
  justify-content: flex-end;
  font-size: 0.75rem;
}

/* Arrow animation */
.tab input:not(:checked) + .tab__label:hover::after {
  animation: bounce 0.5s infinite;
}
@keyframes bounce {
  25% {
    transform: rotate(90deg) translate(0.25rem);
  }
  75% {
    transform: rotate(90deg) translate(-0.25rem);
  }
}
</style>
