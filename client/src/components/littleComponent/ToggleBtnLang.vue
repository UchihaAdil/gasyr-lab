<template>
  <div class="lang">
    <Transition mode="out-in" name="lang">
      <button class="lang__btn" @click="changeLocale('ru')" v-if="locale == 'kz'">KZ</button>
      <button class="lang__btn" @click="changeLocale('en')" v-else-if="locale == 'ru'">RU</button>
      <button class="lang__btn" @click="changeLocale('kz')" v-else-if="locale == 'en'">ENG</button>
    </Transition>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useCounterStore } from '@/composables/counter.js'
import { useMyTrainingStore } from '@/stores/myTraining.js'
import { useRoute } from 'vue-router'
const { locale } = useI18n({ useScope: 'global' })
const { tm } = useI18n()
const counter = useCounterStore()
const route = useRoute()
const myTrainingStore = useMyTrainingStore()

const changeLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('localLang', newLocale)

  if (route.name === 'home') {
    window.location.reload()
  } else {
    counter.incrementCount()
  }

  const currentCourseId = localStorage.getItem('idCurrentCourse')

  myTrainingStore.addMyCourses(+currentCourseId, tm('page.main.main.ourCourses.courses'))
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/abstracts/' as abs;

.lang__btn {
  transition: 0.2s all ease;

  &:hover {
    color: abs.$accent-color;
  }
}

.lang-enter-active,
.lang-leave-active {
  transition: all 0.25s ease-out;
}

.lang-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.lang-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
