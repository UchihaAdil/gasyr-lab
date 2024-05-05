<template>
  <div v-for="eduCard in props.courseData" :key="eduCard.id" class="card">
    <div class="card__text">
      <h2>{{ eduCard.title }}</h2>
      <!-- <p>Lorem ipsum dolor sit amet.</p> -->
      <ButtonAdd @click="goVideoPage(eduCard)" class="btn"></ButtonAdd>
    </div>
    <div class="card__img">
      <img src="../assets/images/icons/graduation.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import ButtonAdd from '@/components/littleComponent/ButtonAdditional.vue'
import { useRouter } from 'vue-router'

const props = defineProps(['courseData'])
const router = useRouter()

// console.log(props.courseData, 498498496)

function goVideoPage(data) {
  localStorage.setItem('currentLesson', JSON.stringify(data))
  router.push({ name: 'video', params: { id: data.id } })
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;
.card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  &__text {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;

    h2 {
      font-weight: 600;
      font-size: 20px;
      color: abs.$almost-black;
    }
    p {
      color: abs.$gray;
    }
  }

  &__img {
    width: 100px;

    img {
      position: absolute;
      bottom: -20px;
      right: -10px;
      width: 100px;
    }
  }
}
</style>
