<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__inner">
          <router-link :to="{ name: 'home' }"
            ><img class="logo" src="@/assets/images/logo/Gasyr_logo.svg" alt="Gasyr Lab"
          /></router-link>

          <nav class="nav nav--hidden">
            <ul class="nav__list">
              <router-link :to="{ name: 'training' }">
                <li v-if="isAuthUser" class="nav__list-item">
                  <a href="#" class="nav__link">{{ t('page.main.header.my_training') }}</a>
                </li>
              </router-link>
              <li class="nav__list-item">
                <a @click="goHashTag(router, $event.target, 'courses')" class="nav__link">{{
                  t('page.main.header.all_courses')
                }}</a>
              </li>
              <li class="nav__list-item">
                <a
                  @click="goHashTag(router, $event.target, 'about')"
                  class="nav__link mobile-dropdown__link"
                  >{{ t('page.main.header.about') }}</a
                >
              </li>
              <li class="nav__list-item">
                <a @click="goHashTag(router, $event.target, 'team')" class="nav__link">{{
                  t('page.main.header.team')
                }}</a>
              </li>
              <li class="nav__list-item">
                <a @click="goHashTag(router, $event.target, 'contacts')" class="nav__link">{{
                  t('page.main.header.contacts')
                }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="header__user header__user--hidden">
          <div v-if="isAuthUser" class="flex-box">
            <button @click="toggleOpenDropdown()" class="header__user-btn header__user-btn--hidden">
              <img class="header__user-img" src="@/assets/images/icons/user1.png" alt="User icon" />
            </button>
            <ThemeBtn class="tablet-hidden"></ThemeBtn>
            <LangBtn></LangBtn>
          </div>

          <TransitionGroup ref="dropdownLaptop" tag="div" name="dropdown">
            <div
              v-if="isOpenUserDropdown"
              class="header__user-dropdown header__user-dropdown--hidden"
            >
              <div class="f-col">
                <p>{{ getFullName() }}</p>
                <button class="btn btn--error" @click="loggedOutUser()">
                  {{ t('page.main.header.dropdown.log_out') }}
                </button>
              </div>
            </div>
          </TransitionGroup>

          <div class="burger burger--hidden">
            <div class="burger__wrapper">
              <LangBtn v-if="!isAuthUser"></LangBtn>
              <div>
                <Transition mode="out-in" name="burger">
                  <button class="burger__btn" @click="toggleBurgerMenu()" v-if="!isOpenBurgerMenu">
                    <img
                      v-if="theme.isDark"
                      class="burger__icon"
                      src="@/assets/images/icons/burger-light-menu.svg"
                      alt="Burger menu icon"
                    />
                    <img
                      v-else
                      class="burger__icon"
                      src="@/assets/images/icons/burger-dark-menu.svg"
                      alt="Burger menu icon"
                    />
                  </button>
                  <button
                    class="burger__btn"
                    @click="toggleBurgerMenu()"
                    v-else-if="isOpenBurgerMenu"
                  >
                    <img
                      v-if="theme.isDark"
                      class="burger__icon"
                      src="@/assets/images/icons/close-light-icon.svg"
                      alt="Burger close icon"
                    />
                    <img
                      v-else
                      class="burger__icon"
                      src="@/assets/images/icons/close-dark-icon.svg"
                      alt="Burger close icon"
                    />
                  </button>
                </Transition>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!isAuthUser" class="flex-box flex-box--hidden">
          <ThemeBtn></ThemeBtn>
          <LangBtn></LangBtn>
          <router-link :to="{ name: 'login' }" class="btn">
            <Button class="btn btn--outline">{{ t('page.main.header.login') }}</Button>
          </router-link>
          <router-link :to="{ name: 'register' }">
            <Button class="btn btn--outline">{{ t('page.main.header.register') }}</Button>
          </router-link>
        </div>
      </div>

      <transition-group
        ref="dropdownMobile"
        tag="div"
        name="mobile-dropdown"
        class="mobile-dropdown mobile-dropdown--hidden"
      >
        <ul v-if="isOpenBurgerMenu" class="mobile-dropdown__list">
          <router-link :to="{ name: 'training' }">
            <li v-if="isAuthUser" class="nav__list-item">
              <a href="#" class="nav__link">{{ t('page.main.header.my_training') }}</a>
            </li>
          </router-link>
          <li class="mobile-dropdown__list-item">
            <div class="flex-box">
              <a
                @click="goHashTag(router, $event.target, 'courses')"
                class="mobile-dropdown__link"
                >{{ t('page.main.header.all_courses') }}</a
              >
              <ThemeBtn></ThemeBtn>
            </div>
          </li>
          <li class="mobile-dropdown__list-item">
            <a @click="goHashTag(router, $event.target, 'about')" class="mobile-dropdown__link">{{
              t('page.main.header.about')
            }}</a>
          </li>
          <li class="mobile-dropdown__list-item">
            <a @click="goHashTag(router, $event.target, 'team')" class="mobile-dropdown__link">{{
              t('page.main.header.team')
            }}</a>
          </li>
          <li class="mobile-dropdown__list-item">
            <a
              @click="goHashTag(router, $event.target, 'contacts')"
              class="mobile-dropdown__link"
              >{{ t('page.main.header.contacts') }}</a
            >
          </li>
          <li v-if="isAuthUser" class="mobile-dropdown__list-item">
            <div class="f-col">
              <p>{{ getFullName() }}</p>
              <button class="btn btn--error" @click="loggedOutUser()">
                {{ t('page.main.header.dropdown.log_out') }}
              </button>
            </div>
          </li>
          <li v-if="!isAuthUser" class="mobile-dropdown__list-item">
            <router-link :to="{ name: 'login' }" class="btn">{{
              t('page.main.header.login')
            }}</router-link>
          </li>
          <li v-if="!isAuthUser" class="mobile-dropdown__list-item">
            <router-link :to="{ name: 'register' }" class="btn">{{
              t('page.main.header.register')
            }}</router-link>
          </li>
        </ul>
      </transition-group>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeMount } from 'vue'
import LangBtn from '@/components/littleComponent/ToggleBtnLang.vue'
import ThemeBtn from '@/components/littleComponent/ToggleBtnTheme.vue'
import { useThemeModeStore } from '@/stores/themeMode.js'
import Button from '@/components/littleComponent/ButtonComponent.vue'
import { goHashTag } from '@/stores/routerGo.js'

import { useFirebaseAuthUserStore } from '@/stores/firebaseAuth'

const theme = useThemeModeStore()

const { t } = useI18n()
const router = useRouter()
const isOpenUserDropdown = ref(false)
const isOpenBurgerMenu = ref(false)
const dropdownLaptop = ref(null)
const dropdownMobile = ref(null)
const { isAuthUser, loggedOut, checkFirebaseAuthUser, getFullName} = useFirebaseAuthUserStore(router)

// const hashTagLink = ref(null)

const handleClickCloseDropdown = (event) => {
  if (
    !event.target.closest('.header__user-dropdown') &&
    !event.target.closest('.header__user-btn')
  ) {
    closeDropdown()
  }
}

const handleClickCloseMobileDropdown = (event) => {
  if (
    dropdownMobile.value &&
    !event.target.closest('.mobile-dropdown') &&
    !event.target.closest('.burger__btn')
  )
    closeBurgerMenu()
}

function toggleOpenDropdown() {
  isOpenUserDropdown.value = !isOpenUserDropdown.value
}

function loggedOutUser() {
  loggedOut();
  closeDropdown();
}

function closeDropdown() {
  isOpenUserDropdown.value = false
}

function closeBurgerMenu() {
  isOpenBurgerMenu.value = false
}

function toggleBurgerMenu() {
  isOpenBurgerMenu.value = !isOpenBurgerMenu.value
}

onMounted(() => {
  checkFirebaseAuthUser()
  document.addEventListener('click', handleClickCloseDropdown)
  document.addEventListener('click', handleClickCloseMobileDropdown)
})

onBeforeMount(() => {
  document.addEventListener('click', handleClickCloseDropdown)
  document.addEventListener('click', handleClickCloseMobileDropdown)
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.f-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.header {
  &__wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    position: relative;
    margin-top: clamp(0.313rem, -0.142rem + 2.27vw, 1.563rem);
  }

  &--hidden {
    @include abs.breakpoint('tablet') {
      display: none;
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 150px;
    gap: 10px;
  }

  &__user-btn {
    display: block;

    &--hidden {
      @include abs.breakpoint('tablet') {
        display: none;
      }
    }
  }

  &__user-dropdown {
    max-width: 250px;
    padding: 16px;
    background-color: #fff;
    color: abs.$almost-black;
    border-radius: 8px;
    min-height: 150px;
    position: absolute;
    top: 60px;
    right: 0px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 10;

    &--hidden {
      @include abs.breakpoint('tablet') {
        display: none;
      }
    }
  }

  .dark &__user-dropdown {
    background-color: abs.$almost-black;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    color: abs.$almost-white;
  }

  &__user-img {
    max-width: 32px;
    // margin-top: 15px;
  }
}

.mobile-dropdown {
  display: none;
  &--hidden {
    @include abs.breakpoint('tablet') {
      display: block;
      width: 100%;
      position: absolute;
      left: 0;
      z-index: 10;
    }
  }
  &__list {
    background-color: #fff;
    color: abs.$almost-black;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-radius: 16px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .dark &__list {
    background-color: abs.$almost-black;
    color: #fff;
  }

  & a {
    color: inherit;
  }
}

.mobile-dropdown-enter-active {
  transition: all 0.3s ease-out;
}

.mobile-dropdown-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.mobile-dropdown-enter-from,
.mobile-dropdown-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.burger-enter-active {
  animation: burgerbounce-in 0.5s;
}
.burger-leave-active {
  animation: bounce-in 0.5s reverse;
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

.burger {
  display: none;

  &__wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__icon {
    max-width: 30px;
    transform: rotate(180deg);
  }

  &--hidden {
    @include abs.breakpoint('tablet') {
      display: block;
    }
  }
}

.dropdown-enter-active {
  transition: all 0.3s ease-out;
}

.dropdown-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
