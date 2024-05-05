<template>
  <div class="education">
    <h2>{{ t('page.training.preparation') }}</h2>
    <div v-if="training.myCourses.length" class="education__cards">
      <EduCard
        v-for="(courseData, index) in training.myCourses"
        :key="index"
        :courseData="courseData.contentsCourse.list"
      />
    </div>
    <div v-else>Пусто</div>
  </div>
</template>

<script setup>
import EduCard from '@/components/EduCard.vue'
import { useI18n } from 'vue-i18n'
import { useMyTrainingStore } from '@/stores/myTraining'

const training = useMyTrainingStore()

// console.log(training, 85245685)

const { t } = useI18n()
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.education {
  margin-top: 50px;

  h2 {
    font-size: 23px;
    font-weight: 600;
    color: #000;
    .dark & {
      color: abs.$almost-white;
    }
  }

  &__cards {
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @include abs.breakpoint('laptop-sm') {
      grid-template-columns: repeat(2, 1fr);
    }
    @include abs.breakpoint('tablet-md') {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
