<template>
  <div class="schedule">
    <div class="schedule__heading">
      <h3>{{ formattedDate }}</h3>
      <div class="schedule__btns">
        <ButtonCom class="btn btn--outline">{{ t('global.btn.today') }}</ButtonCom>
        <ButtonAdd class="btn btn--calendar">{{ t('global.btn.calendar') }}</ButtonAdd>
      </div>
    </div>
    <div class="schedule__content">
      <span>#{{ t('page.training.lessonRecord') }}</span>
      <h3>Массивы</h3>
      <p>Курс: Python с нуля до профи</p>
      <div class="schedule__content-lesson">
        <div class="schedule__content-teacher">
          <img src="../assets/images/icons/user1.png" alt="user" width="50px" />
          <div class="schedule__content-teacher-name">
            <h3> {{ getFullName() }}</h3>
            <h4>19:00 - 21:00</h4>
          </div>
        </div>
        <div class="arrow-btn">
          <img src="../assets/images/icons/right-arrow.png" alt="goTo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonCom from '@/components/littleComponent/ButtonComponent.vue'
import ButtonAdd from '@/components/littleComponent/ButtonAdditional.vue'
import { useFirebaseAuthUserStore } from '@/stores/firebaseAuth';
import router from '@/router';
import { useI18n } from 'vue-i18n'

const { getFullName } = useFirebaseAuthUserStore(router)

const { t } = useI18n()
const currentDate = new Date()
const formattedDate = currentDate.toLocaleDateString('ru-RU', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.schedule {
  width: 100%;

  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(0.625rem, -13.92rem + 22.73vw, 3.125rem);

    @include abs.breakpoint('tablet-md') {
      flex-direction: column;
    }

    h3 {
      text-transform: capitalize;
      font-weight: 500;

      @include abs.breakpoint('laptop-sm') {
        display: none;
      }
      @include abs.breakpoint('tablet') {
        display: block;
      }
    }

    .schedule__btns {
      display: flex;
      gap: 20px;

      @include abs.breakpoint('tablet') {
        align-items: center;
        flex-direction: row;
      }
    }
  }

  &__content {
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 20px;
    margin-top: 20px;

    .dark & {
      background-color: #2f353a;
    }
    span {
      max-width: 130px;
      border-radius: 10px;
      background-color: #ff4949;
      padding: 10px;
      font-size: 13px;
      color: #ffffff;

      .dark & {
        background-color: #9f2e2e;
        color: #fff;
      }
    }

    h3 {
      font-weight: 500;
      font-size: 19px;
    }

    p {
      font-weight: 500;
      color: gray;
    }

    .arrow-btn {
      padding: 10px;
      background-color: rgb(199, 199, 199);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease-in;
      cursor: pointer;

      img {
        width: 15px;
      }

      &:hover {
        background-color: rgb(230, 230, 230);
      }

      &:hover img {
        filter: brightness(0) saturate(100%) invert(27%) sepia(74%) saturate(2230%)
          hue-rotate(247deg) brightness(93%) contrast(105%);
      }
    }

    &-lesson {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      gap: 20px;
    }

    &-teacher {
      display: flex;
      align-items: center;
      gap: 10px;

      &-name {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 8px;

        @include abs.breakpoint('laptop-sm') {
          display: none;
        }
      }
    }
  }
}
</style>
