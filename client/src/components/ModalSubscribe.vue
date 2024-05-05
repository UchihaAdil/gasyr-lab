<template>
  <section class="modal" @click.self="closeModal()">
    <div class="modal__box">
      <div class="flex-box">
        <h2 class="modal__title">{{ data.title }} «{{ props.title }}»</h2>
        <img
          @click="closeModal()"
          class="modal__close-icon--active"
          src="@/assets/images/icons/close-dark-icon.svg"
          alt="Close"
          width="32px"
        />
      </div>
      <p class="modal__desc">{{ data.subtitle }}</p>
      <form class="modal__form">
        <input type="text" class="modal__input" :placeholder="data.input.name" />
        <input type="email" class="modal__input" :placeholder="data.input.email" />
        <input type="text" class="modal__input" :placeholder="data.input.tel" />

        <Button @click="addToTraining(+courseId)" class="btn btn--primary">
          {{ t('global.btn.subscribe') }}</Button
        >
      </form>
      <p class="modal__desc">{{ data.description }}</p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Button from '@/components/littleComponent/ButtonComponent.vue'
import { useMyTrainingStore } from '@/stores/myTraining'

const { t } = useI18n()
const { tm } = useI18n()
const myTraining = useMyTrainingStore()

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  data: {
    type: Object,
    default: () => {}
  },
  courseId: {
    type: String,
    default: () => ' '
  }
})

const emit = defineEmits(['closeModal'])

function closeModal() {
  emit('closeModal')
}

function addToTraining(id) {
  console.log(tm('page.main.main.ourCourses.courses'))
  console.log(id)
  myTraining.addMyCourses(id, tm('page.main.main.ourCourses.courses'))
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.modal__close-icon--active {
  display: none;

  @include abs.breakpoint('mobile-lg') {
    display: block;
  }
}

.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(184, 184, 184, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  &__box {
    position: absolute;

    max-width: 550px;
    max-height: 540px;
    color: abs.$almost-black;
    background-color: abs.$almost-white;
    padding: clamp(0.938rem, -0.085rem + 5.11vw, 3.75rem);
    border-radius: 50px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    @include abs.breakpoint('laptop-sm') {
      // left: 25%;
      // transform: translateX(0%);
    }
  }

  &__title {
    font-size: clamp(1.375rem, 1.148rem + 1.14vw, 2rem);
    margin-top: 15px;
  }

  &__desc {
    font-size: clamp(0.75rem, 0.705rem + 0.23vw, 0.875rem);
    margin-bottom: 30px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__input {
    border: 1px solid rgb(170, 170, 170);
    padding: 12px;
    border-radius: 12px;
    background-color: ddd;
  }
}
</style>
