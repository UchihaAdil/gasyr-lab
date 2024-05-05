<template>
  <Header></Header>
  <section v-if="videoData" class="training">
    <div class="container">
      <div class="training__wrapper">
        <h1 class="title training__title">
          {{ videoData.title }}
        </h1>
        <p class="description training__desc">
          <!-- {{ data.description }} -->
        </p>
        <div class="training__box">
          <!-- <video
            class="training__video"
            src="@/assets/video/courses/python/pythonLesson1.mp4"
            type="video/mp4"
            poster=""
            controls
          /> -->
          <iframe
            class="training__video"
            src="https://www.youtube.com/embed/MunPNYumw6M?si=9a6lTFiHY_IgqQfn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
  <div v-else>Урок не загружен</div>
</template>

<script setup>
import Header from '@/components/HeaderMain.vue'
import { onMounted, ref } from 'vue'

const videoData = ref(null)

onMounted(() => {
  const tmp = localStorage.getItem('currentLesson')
  videoData.value = JSON.parse(tmp)
})
</script>

<style lang="scss" scoped>
.training {
  &__wrapper {
    max-width: 900px;
    margin: 0 auto;
  }

  &__video {
    width: 100%;
    min-height: 450px;
    border-radius: 5px;
    margin: 30px 0;
  }

  &__video::-webkit-media-controls {
    opacity: 0;
    transition: opacity 0.5s;
  }
  &__video:hover::-webkit-media-controls {
    opacity: 1;
  }

  &__title {
    margin-top: clamp(1.25rem, 0.568rem + 3.41vw, 3.125rem);
  }

  &__desc {
    margin-top: clamp(0.625rem, 0.284rem + 1.7vw, 1.563rem);
  }

  &__transcript-title {
    font-size: clamp(1.125rem, 0.898rem + 1.14vw, 1.75rem);
    margin-top: clamp(0.625rem, 0.284rem + 1.7vw, 1.563rem);
  }
}
</style>
