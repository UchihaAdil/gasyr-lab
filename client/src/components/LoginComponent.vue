<template>
  <div class="form-container sign-in">
    <form @submit.prevent="signInUser()" class="container-auth__form">
      <ButtonAdd @click="authUser.goHomePage()" class="btn btn--transform">Назад</ButtonAdd>
      <h1 class="container-auth__title">{{ t('page.auth.login.title') }}</h1>
      <input
        class="container-auth__input"
        type="email"
        :placeholder="t('page.auth.login.inputEmail')"
        v-model="email"
        @blur="emailTouched = true"
      />
      <span v-if="!isValidEmail(email) && emailTouched" class="container-auth__error">
        {{ t('page.auth.register.errors.correctEmail') }}
      </span>
      <input
        class="container-auth__input"
        type="password"
        :placeholder="t('page.auth.login.inputPassword')"
        v-model="password"
        @blur="passwordTouched = true"
      />
      <span v-if="!password.trim() && passwordTouched" class="container-auth__error">
        {{ t('page.auth.login.errors.existingPasswordAndEmail') }}
      </span>
      <span v-if="loginError" class="container-auth__error">{{ loginError }}</span>
      <ButtonCom type="submit" class="btn btn--primary">{{ t('page.auth.login.signIn') }}</ButtonCom>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ButtonAdd from '@/components/littleComponent/ButtonAdditional.vue';
import ButtonCom from '@/components/littleComponent/ButtonComponent.vue';
import { useFirebaseAuthUserStore } from '@/stores/firebaseAuth';
import { useRouter } from 'vue-router';

export default {
  components: {
    ButtonAdd,
    ButtonCom
  },
  setup() {
    const { t } = useI18n();
    const email = ref('');
    const password = ref('');
    const emailTouched = ref(false);
    const passwordTouched = ref(false);
    const loginError = ref('');
    const router = useRouter();
    const { loggedIn } = useFirebaseAuthUserStore(router);
    const authUser = useFirebaseAuthUserStore(router);

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const signInUser = async () => {
      // Сброс ошибки при новой попытке входа
      loginError.value = '';

      if (!isValidEmail(email.value)) {
        loginError.value = t('page.auth.login.errors.correctEmail');
        return;
      }

      if (!password.value.trim()) {
        loginError.value = t('page.auth.login.errors.existingPasswordAndEmail');
        return;
      }

      try {
        await loggedIn(email.value, password.value);
      } catch (error) {
        loginError.value = error.message;
      }
    };

    return {
      t,
      email,
      password,
      emailTouched,
      passwordTouched,
      signInUser,
      authUser,
      isValidEmail,
      loginError,
    };
  }
};
</script>

<style scoped>
.container-auth__error {
  color: red;
  font-size: 0.8rem;
  margin-left: 10px;
}
</style>
