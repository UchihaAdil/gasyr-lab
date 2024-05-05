<template>
  <div :key="counter.count">
    <div v-if="cardData">
      <Header></Header>

      <section class="intro-course">
        <div class="container">
          <div class="intro-course__header">
            <div class="flex-box intro-course__box">
              <p
                v-for="(circleItem, index) in cardData.circleItem"
                :key="index"
                class="intro-course__header-text"
              >
                {{ circleItem }}
              </p>
            </div>
            <div class="flex-box intro-course__wrapper">
              <div class="intro-course__text-side">
                <h1 class="intro-course__title">
                  <span class="intro-course__decor">Junior {{ cardData.title }}</span
                  >{{ cardData.beingScratch() }}
                </h1>
                <p class="intro-course__desc">
                  {{ cardData.titleDescription() }}
                </p>
                <a href="#tarifs">
                  <Button href="#tarifs" class="btn btn--primary-reverse intro-course__btn">{{
                    tm('global.btn.bookCourse')
                  }}</Button>
                </a>
              </div>
              <img
                class="intro-course__img"
                :src="cardData.courseImage"
                :alt="cardData.title + 'course'"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="about-prof">
        <div class="container">
          <div class="about-prof__wrapper">
            <h1 class="title about-prof__title">{{ cardData.aboutProfession.title }}</h1>

            <p class="about-prof__desc">
              {{ cardData.aboutProfession.description }}
            </p>

            <div class="flex-box about-prof__box">
              <div class="about-prof__footer">
                <h2 class="about-prof__footer-title">
                  {{ cardData.duration }} {{ cardData.weeks }}
                </h2>
                <p class="description about-prof__footer-desc">
                  {{ cardData.aboutProfession.durationDescription }}
                </p>
              </div>
              <div class="about-prof__footer">
                <h2 class="about-prof__footer-title">
                  {{ cardData.aboutProfession.salary }}
                </h2>
                <p class="description about-prof__footer-desc">
                  {{ cardData.aboutProfession.avarageSalary }}
                </p>
              </div>
            </div>
          </div>
          <section class="required">
            <div class="container">
              <div class="required__wrapper">
                <h2 class="required__title">{{ cardData.requiredEmployee.title }}</h2>

                <p class="description required__desc">
                  {{ cardData.requiredEmployee.description }}
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section class="content-list">
        <div class="container">
          <div class="content-list__wrapper">
            <div class="content-list__box">
              <h2 class="content-list__title">{{ cardData.contentsCourse.title }}</h2>
              <div class="content-list__box-inner">
                <p>{{ cardData.contentsCourse.description() }}</p>
                <div class="flex-box">
                  <p>
                    <span class="content-list__decor">{{ cardData.duration }}</span>
                    {{ cardData.contentsCourse.trainingMonth }}
                  </p>
                  <p>
                    <span class="content-list__decor">{{ cardData.fullProjects }}</span>
                    {{ cardData.contentsCourse.finalProjects }}
                  </p>
                </div>
              </div>
            </div>
            <div class="course-info">
              <div class="course-info__wrapper">
                <Accordion
                  v-for="accordion in cardData.contentsCourse.list"
                  :key="accordion.id"
                  :accordion="accordion"
                ></Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="help-center">
        <div class="container">
          <div class="help-center__wrapper">
            <h1 class="title">{{ cardData.helpCenter.title }}</h1>
            <SwiperCard :benefits="cardData.helpCenter.benefits"></SwiperCard>
          </div>
        </div>
      </section>

      <SubscriptionForm></SubscriptionForm>

      <section class="choose-tarif" id="tarifs">
        <div class="container">
          <h2 class="title">{{ cardData.rate.title }}</h2>
          <div class="choose-tarif__wrapper">
            <div
              class="choose-tarif__box"
              v-for="(tarif, index) in cardData.rate.paket"
              :key="index"
            >
              <h3 class="choose-tarif__title">{{ tarif.title }}</h3>
              <p class="choose-tarif__desc">{{ tarif.description }}</p>
              <ul class="choose-tarif__list">
                <li v-for="(listData, index) in tarif.list" :key="index" class="choose-tarif__item">
                  {{ listData.title() }}
                </li>
              </ul>
              <Button class="btn btn--outline" @click="openModal(tarif.title)">{{
                tm('global.btn.demand')
              }}</Button>
            </div>

            <teleport to="body">
              <transition name="modal-tarif">
                <Modal
                  v-if="isModal"
                  @close-modal="closeModal()"
                  :data="cardData.modalWindow"
                  :title="currentTarif"
                  :courseId="props.courseId"
                ></Modal>
              </transition>
            </teleport>
          </div>
        </div>
      </section>
      <Waves></Waves>
      <Footer></Footer>
    </div>

    <div v-else>Ошибка!</div>
  </div>
</template>

<script setup>
import Header from '@/components/HeaderMain.vue'
import Button from '@/components/littleComponent/ButtonComponent.vue'
import Accordion from '@/components/AccordionComponent.vue'
import SubscriptionForm from '@/components/SubscriptionForm.vue'
import SwiperCard from '@/components/CardSwiper.vue'
import Footer from '@/components/FooterMain.vue'
import Modal from '@/components/ModalSubscribe.vue'
import Waves from '@/components/WavesAnimation.vue'
import { useCounterStore } from '@/composables/counter.js'
import { useI18n } from 'vue-i18n'
import { ref, onMounted, watch } from 'vue'

const props = defineProps(['courseId'])

const counter = useCounterStore()
const cardData = ref(null)
const isModal = ref(false)
const currentTarif = ref('')
const { tm } = useI18n()
watch(
  () => counter.count,
  () => refreshLang()
)

function closeModal(tarif) {
  isModal.value = false
  currentTarif.value = tarif
}

function openModal(tarif) {
  isModal.value = true
  currentTarif.value = tarif
}
function refreshLang() {
  const tmp = tm('page.main.main.ourCourses.courses')
  cardData.value = tmp.find((item) => item.id === +props.courseId)
}
onMounted(() => {
  refreshLang()
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.modal-tarif-enter-active {
  animation: bounce-in 0.5s;
}
.modal-tarif-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.intro-course {
  margin-top: 30px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: abs.$almost-white;

    @include abs.breakpoint('tablet') {
      display: flex;
      flex-direction: column;
    }
  }

  &__btn {
    justify-self: end;
    @include abs.breakpoint('tablet') {
      align-self: center;
      padding: 16px 50px;
    }
  }

  &__box {
    justify-content: start;
    margin-bottom: 50px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: clamp(0.938rem, 0.597rem + 1.7vw, 1.875rem);
  }

  &__text-side {
    display: flex;
    flex-direction: column;
    gap: 25px;

    @include abs.breakpoint('tablet') {
      order: 1;
    }
  }

  &__title {
    font-size: clamp(1rem, 0.636rem + 1.82vw, 2rem);
    font-weight: 700;
    line-height: 1.3;
  }

  &__decor {
    display: block;
    color: rgb(255, 205, 58);
    font-size: clamp(1.563rem, 1.131rem + 2.16vw, 2.75rem);
  }

  &__desc {
    letter-spacing: 1px;
    font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
    max-width: 550px;
  }

  &__img {
    width: 100%;
    max-width: 250px;

    @include abs.breakpoint('tablet') {
      order: -1;
    }
  }

  &__btn {
    max-width: 250px;

    @include abs.breakpoint('tablet') {
      max-width: 300px;
    }
  }

  &__header {
    background: radial-gradient(circle, rgba(156, 152, 226, 1) 9%, rgb(63, 81, 242) 97%);
    border-radius: 20px;
    padding: clamp(1.375rem, 0.875rem + 2.5vw, 2.75rem) clamp(1.375rem, 0.875rem + 2.5vw, 2.75rem)
      clamp(1.75rem, 1.114rem + 3.18vw, 3.5rem);

    width: 100%;

    &-text {
      border-radius: 16px;
      padding: 8px 12px;
      font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);

      color: abs.$almost-white;
      background-color: abs.$almost-black;

      .dark & {
        color: abs.$almost-black;
        background-color: abs.$almost-white;
      }
    }
  }
}

.about-prof {
  &__wrapper {
    width: 83%;
    margin: clamp(1.875rem, -0.398rem + 11.36vw, 8.125rem) 0;

    @include abs.breakpoint('tablet') {
      width: 100%;
    }
  }

  &__box {
    column-gap: 60px;

    @include abs.breakpoint('mobile-lg') {
      display: block;
    }
  }

  &__desc {
    margin-top: 20px;
    font-size: clamp(0.875rem, 0.784rem + 0.45vw, 1.125rem);
  }

  &__footer {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    &-title {
      font-size: 22px;
      font-weight: 600;
    }
  }
}

.required {
  border-bottom: 1.3px solid abs.$almost-black;
  border-top: 1.3px solid abs.$almost-black;

  .dark & {
    border-bottom: 1.3px solid abs.$almost-white;
    border-top: 1.3px solid abs.$almost-white;
  }

  &__wrapper {
    padding: clamp(1.563rem, 0.994rem + 2.84vw, 3.125rem) 0;

    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;

    @include abs.breakpoint('tablet') {
      flex-direction: column;
    }
  }

  &__title {
    font-size: clamp(1.125rem, 0.807rem + 1.59vw, 2rem);
    font-weight: 600;
  }

  &__desc {
    max-width: 500px;
    line-height: 1.42;
  }
}

.content-list {
  &__wrapper {
    margin-top: 40px;
    border: 1.3px solid abs.$accent-color;
    padding: 40px;
    border-radius: 20px;
    background-color: abs.$accent-color;
    // color: abs.$almost-black;
    color: abs.$almost-white;
  }

  &__box {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    @include abs.breakpoint('tablet') {
      display: flex;
      flex-direction: column;
    }

    &-inner {
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }

  &__decor {
    padding: 6px 16px;
    line-height: 1.8;
    border-radius: 8px;
    background-color: abs.$almost-white;
    color: abs.$almost-black;

    .dark & {
      background-color: abs.$almost-black;
      color: abs.$almost-white;
    }
  }

  &__title {
    font-size: clamp(1.75rem, 1.205rem + 2.73vw, 3.25rem);
    font-weight: 500;
  }
}

.help-center {
  &__wrapper {
    margin-top: 50px;
  }
}

.choose-tarif {
  &__wrapper {
    display: flex;
    gap: 15px;
    justify-content: center;
    // align-items: center;
    margin-bottom: 50px;

    @include abs.breakpoint('tablet-xs') {
      display: flex;
      flex-direction: column;
    }
  }

  &__box {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 15px;
    border: 3px solid abs.$accent-color;
    color: abs.$almost-black;
    background-color: abs.$almost-white;
    border-radius: 20px;
    padding: 16px;
    margin-top: 30px;
  }

  &__title {
    font-size: 26px;
    font-weight: 500;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style-type: disc;
  }

  &__item {
    margin-left: 30px;
    list-style-type: disc;
  }
}
</style>
