<template>
  <div class="XYcenter">
    <div class="container-auth" ref="containerDiv">
      <Login v-if="currentAuthPage === 'login'"></Login>
      <Register v-if="currentAuthPage === 'register'"></Register>

      <div class="toggle-container">
        <div class="toggle">
          <ButtonAdd @click="goHomePage()" class="btn btn--white btn--transform">{{
            t('global.btn.back')
          }}</ButtonAdd>
          <div v-if="currentAuthPage === 'register'" class="toggle-panel toggle-left">
            <div class="toggle__lang-in">
              <!-- <LangBtn></LangBtn> -->
            </div>
            <h1 class="toggle__title">{{ t('page.auth.greetingSignIn') }}</h1>
            <p class="toggle__text">{{ t('page.auth.textSignIn') }}</p>
            <Button class="btn btn--border " @click="transitionRemoveMove()">{{
              t('page.auth.login.signIn')
            }}</Button>
          </div>

          <div v-else class="toggle-panel toggle-right">
            <div class="toggle__lang-up">
              <LangBtn></LangBtn>
            </div>
            <h1 class="toggle__title">{{ t('page.auth.greetingSignUp') }}</h1>
            <p class="toggle__text">{{ t('page.auth.textSignUp') }}</p>
            <Button class="btn btn--border" @click="transitionAddMove()">{{
              t('page.auth.register.signUp')
            }}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LangBtn from '@/components/littleComponent/ToggleBtnLang.vue'
import { ref, onMounted, computed } from 'vue'
import Login from '@/components/LoginComponent.vue'
import Register from '@/components/RegisterComponent.vue'
import Button from '@/components/littleComponent/ButtonComponent.vue'
import ButtonAdd from '@/components/littleComponent/ButtonAdditional.vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const containerDiv = ref(null)
const route = useRoute()
const router = useRouter()

// Sign In
function transitionAddMove() {
  containerDiv.value.classList.add('active')
  router.push({ name: 'register' })
}

function goHomePage() {
		router.push({ name: 'home' })
}

//Sign Up
function transitionRemoveMove() {
  if (route.name !== 'register') {
    return transitionAddMove()
  }
  containerDiv.value.classList.remove('active')
  router.push({ name: 'login' })
}

const currentAuthPage = computed(() => {
  return route.name === 'login' ? 'login' : 'register'
})

window.addEventListener('popstate', function () {
  window.location.href = '/'
})

onMounted(() => {
  if (route.name === 'register') {
    transitionAddMove()
  }
})
</script>



<style lang="scss" scoped>
.toggle {

  &__lang-in {
    position: absolute;
    top: 15px;
    left: 25px;
    z-index: 10;
  }

  &__lang-up {
    position: absolute;
    top: 15px;
    right: 25px;
    z-index: 10;
  }
}
</style>
