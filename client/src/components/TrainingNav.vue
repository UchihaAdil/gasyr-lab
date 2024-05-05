<template>
  <div class="nav">
    <ul>
      <li class="active">
        <img src="../assets/images/icons/graduation.png" alt="icon" width="20" /><a href="#!"
          >{{ t('page.training.nav.education') }}</a
        >
      </li>
      <li>
        <img src="../assets/images/icons/task.png" alt="icon" width="20" /><a class="task" href="#!"
          >{{ t('page.training.nav.task') }}</a
        >
      </li>
      <li>
        <img src="../assets/images/icons/form.png" alt="icon" width="20" /><a href="#!">{{ t('page.training.nav.form') }}</a>
      </li>
      <li>
        <img src="../assets/images/icons/group.png" alt="icon" width="20" /><a href="#!"
          >{{ t('page.training.nav.mentors') }}</a
        >
      </li>
      <li>
        <img src="../assets/images/icons/journal.png" alt="icon" width="20" /><a href="#!"
          >{{ t('page.training.nav.journal') }}</a
        >
      </li>
      <li>
        <img src="../assets/images/icons/setting.png" alt="icon" width="20" /><a href="#!"
          >{{ t('page.training.nav.settings') }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;
.nav {
  background-color: rgb(237, 237, 237);
  padding: 30px;
  border-radius: 30px;
  @include abs.breakpoint('tablet-sm') {
    padding: 15px;
  }

  .dark & {
    background-color: abs.$almost-black;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include abs.breakpoint('tablet-sm') {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    li {
      display: flex;
      align-items: center;
      font-weight: 500;
      gap: 10px;
      color: abs.$almost-black;
      padding: 15px 20px;
      transition: all 0.2s ease-in;
      border-radius: 15px;

      &.active {
        background-color: rgb(255, 255, 255);

        img {
          .dark & {
            filter: brightness(0) saturate(100%) invert(27%) sepia(74%) saturate(2230%)
              hue-rotate(247deg) brightness(93%) contrast(105%);
          }
        }

        .dark & {
          background-color: #2f353a;
        }

        a {
          color: abs.$accent-color;
        }

        img {
          filter: brightness(0) saturate(100%) invert(27%) sepia(74%) saturate(2230%)
            hue-rotate(247deg) brightness(93%) contrast(105%);
          transition: 0.2s;
        }
      }

      @include abs.breakpoint('tablet-sm') {
        padding: 10px 15px;
      }

      img {
        .dark & {
          filter: invert(1);
        }
      }

      &:hover {
        background-color: rgb(255, 255, 255);
        transition: all 0.2s;

        .task::after {
          content: '3';
          padding: 5px 10px;
          width: 100px;
          background-color: rgb(176, 152, 255);
          margin-left: 15px;
          font-size: 13px;
          color: #000;
          border-radius: 50%;
          transition: all 0.2s ease-in;
        }

        .dark & {
          background-color: #2f353a;
        }

        a {
          color: abs.$accent-color;
        }

        img {
          filter: brightness(0) saturate(100%) invert(27%) sepia(74%) saturate(2230%)
            hue-rotate(247deg) brightness(93%) contrast(105%);
          transition: 0.2s;
        }
      }

      .task::after {
        content: '3';
        padding: 5px 10px;
        width: 100px;
        background-color: gray;
        margin-left: 15px;
        font-size: 13px;
        border-radius: 50%;
        color: #ffffff;
      }
    }
  }
}
</style>
