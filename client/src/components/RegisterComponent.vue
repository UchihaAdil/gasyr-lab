<template>
  <div class="container-auth">
    <div class="form-container sign-up">
      <LangBtn class="lang-btn"></LangBtn>
      <form @submit.prevent="registerUser" class="container-auth__form">
        <h1 class="container-auth__title">{{ t('page.auth.register.title') }}</h1>
        <input 
          class="container-auth__input"
          type="text" 
          v-model.trim="firstName" 
          :placeholder="t('page.auth.register.inputName')" 
          @blur="firstNameTouched = true"
          required>
        <span v-if="!firstName.trim() && firstNameTouched" class="container-auth__error">
          {{ t('page.auth.register.errors.requiredField') }}
        </span>
        <input 
          class="container-auth__input"
          type="text" 
          v-model.trim="lastName" 
          :placeholder="t('page.auth.register.inputSurname')" 
          @blur="lastNameTouched = true"
          required>
        <span v-if="!lastName.trim() && lastNameTouched" class="container-auth__error">
          {{ t('page.auth.register.errors.requiredField') }}
        </span>
        <input 
          class="container-auth__input"
          type="email" 
          v-model.trim="email" 
          :placeholder="t('page.auth.register.inputEmail')" 
          @blur="emailTouched = true"
          required>
        <span v-if="!isValidEmail(email) && emailTouched" class="container-auth__error">
          {{ t('page.auth.register.errors.correctEmail') }}
        </span>
        <input 
          class="container-auth__input"
          type="password" 
          v-model.trim="password" 
          :placeholder="t('page.auth.register.inputPassword')" 
          @blur="passwordTouched = true"
          required>
        <span v-if="!password.trim() && passwordTouched" class="container-auth__error">
          {{ t('page.auth.register.errors.minFieldLength') }}
        </span>
        <ButtonCom type="submit" class="btn btn--primary">
          {{ t('page.auth.register.signUp') }}
        </ButtonCom>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonCom from '@/components/littleComponent/ButtonComponent.vue';
import LangBtn from '@/components/littleComponent/ToggleBtnLang.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useFirebaseAuthUserStore } from '@/stores/firebaseAuth';

export default {
  components: {
    ButtonCom,
    LangBtn
  },
  setup() {
    const { t } = useI18n();
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const firstNameTouched = ref(false);
    const lastNameTouched = ref(false);
    const emailTouched = ref(false);
    const passwordTouched = ref(false);
    const router = useRouter();
    const { registrationUserCompleted } = useFirebaseAuthUserStore(router);

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const registerUser = () => {
      // Проверяем, что все поля заполнены
      if (
        firstName.value.trim() &&
        lastName.value.trim() &&
        isValidEmail(email.value) &&
        password.value.trim()
      ) {
        registrationUserCompleted(firstName.value, lastName.value, email.value, password.value);
      }
    };

    return {
      t,
      firstName,
      lastName,
      email,
      password,
      firstNameTouched,
      lastNameTouched,
      emailTouched,
      passwordTouched,
      registerUser,
      isValidEmail,
    };
  }
};
</script>

<style scoped>
.container-auth__error {
  font-size: 0.8rem;
  color: red;
}

.lang-btn {
  float: right;
  position: relative;
  z-index: 10;
  top: clamp(0.625rem, 0.511rem + 0.57vw, 0.938rem);
  right: clamp(0.625rem, 0.17rem + 2.27vw, 1.875rem);
}
</style>
