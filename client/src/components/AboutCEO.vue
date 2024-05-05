<template>
  <div class="aboutCEO" id="about">
    <div class="container">
      <div class="aboutCEO__wrapper">
        <div class="aboutCEO__hero">
          <div class="ceo">
            <img class="hero" src="../assets/images/people/сeoPostt.png" alt="ceo" />
          </div>
        </div>
        <div class="aboutCEO__content">
          <div class="aboutCEO__content-title">
            <div>
              <h2 class="title">{{ t('page.main.main.aboutCEO.title') }}</h2>
              <h3>CEO Gasyr Foundation School & GasyrLab</h3>
            </div>
            <img class="spin" src="../assets/images/shapes/spin.png" alt="spin" />
          </div>
          <p>
            {{ t('page.main.main.aboutCEO.descriptionFirst') }}
            <br /><br />
            {{ t('page.main.main.aboutCEO.descriptionSecond') }}
          </p>
          <div class="aboutCEO__media">
            <img class="cube" src="../assets/images/shapes/cube.png" alt="cube" />

            <ul class="social">
              <li class="social-item">
                <a
                  class="social-link"
                  target="_blank"
                  href="https://m.facebook.com/people/%D0%AF%D0%BA%D1%83%D0%B1-%D0%A5%D0%B0%D0%BB%D1%8B%D0%BA%D0%B1%D0%B5%D1%80%D0%B4%D0%B8%D0%B5%D0%B2/100070413668765/"
                >
                  <img src="../assets/images/icons/facebook.svg" alt="wp" />
                </a>
              </li>
              <li class="social-item">
                <a
                  class="social-link"
                  target="_blank"
                  href="https://www.instagram.com/jakubfity?igsh=d2R5YzMzZmJnbTl3"
                >
                  <img src="../assets/images/icons/instagram.svg" alt="insta" />
                </a>
              </li>
              <li class="social-item">
                <a class="social-link" target="_blank" href="https://t.me/jakubfity">
                  <img src="../assets/images/icons/Telegram.png" alt="telegram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts/' as abs;
.aboutCEO {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(1.25rem, 0.568rem + 3.41vw, 3.125rem);
    margin-top: 70px;

    @include abs.breakpoint('tablet') {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  &__hero {
    height: 100%;
    // border: 1px solid red;

    .ceo {
      position: relative;
      width: auto;

      .hero {
        min-width: 300px;
        border-radius: 15px;
      }
    }
  }

  &__content {
    // border: 1px solid red;
    height: 100%;
    display: flex;
    flex-direction: column;
    // width: 700px;

    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: clamp(0rem, -1.339rem + 6.7vw, 1.875rem);

      h2 {
        color: abs.$accent-color;
      }

      h3 {
        font-size: clamp(1.125rem, 0.966rem + 0.8vw, 1.563rem);
        font-weight: 600;
        margin-top: 10px;
      }

      .spin {
        width: clamp(3.125rem, 1.786rem + 6.7vw, 5rem);
      }
    }

    p {
      margin-top: clamp(1.25rem, 0.795rem + 2.27vw, 2.5rem);
    }
  }

  &__media {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: clamp(1.25rem, 0.795rem + 2.27vw, 2.5rem);
    @include abs.breakpoint('mobile-lg') {
      justify-content: center;
    }
    .cube {
      width: 80px;
      @include abs.breakpoint('mobile-lg') {
        display: none;
      }
    }

    .social {
      margin: 30px 0 0 0;
      list-style: none;
      padding-left: 0;
      display: flex;
      align-items: center;
      height: 100%;
    }

    .social .social-item {
      margin: 0 20px;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .social .social-item .social-link {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      text-align: center;
      transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
      transition: all 0.4s ease;

      .dark & {
        background-color: #2b3035;
      }
    }

    .social-link {
      img {
        width: 20px;
      }
    }

    .social .social-item .social-link::before {
      content: '';
      position: absolute;
      top: 5px;
      left: -10px;
      height: 100%;
      width: 10px;
      background: #b1b1b1;
      transition: all 0.4s ease;
      transform: rotate(0deg) skewY(-45deg);

      .dark & {
        background-color: #393c3f;
      }
    }

    .social .social-item .social-link::after {
      content: '';
      position: absolute;
      top: 30px;
      left: -5px;
      height: 10px;
      width: 100%;
      background: #b1b1b1;
      transition: all 0.4s ease;
      transform: rotate(0deg) skewX(-45deg);

      .dark & {
        background-color: #393c3f;
      }
    }

    .social .social-item .social-link:hover {
      transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(5px, -5px);
      box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
    }

    .social .social-item:nth-child(1) a {
      color: #00529e;
    }

    .social .social-item:nth-child(1):hover a {
      background: #00529e;
    }

    .social .social-item:nth-child(1):hover a::before {
      background: #003566;
    }

    .social .social-item:nth-child(1):hover a::after {
      background: #003566;
    }

    .social .social-item:nth-child(2) a {
      color: #2d2d2d;
    }

    .social .social-item:nth-child(3):hover a {
      background: #339dff;
    }

    .social .social-item:nth-child(3):hover a::before {
      background: #0084ff;
    }

    .social .social-item:nth-child(3):hover a::after {
      background: #0084ff;
    }

    .social .social-item:nth-child(2) a {
      color: #dd4b39;
    }

    .social .social-item:nth-child(2):hover a {
      background: #dd4b39;
    }

    .social .social-item:nth-child(2):hover a::before {
      background: #a2392b;
    }

    .social .social-item:nth-child(2):hover a::after {
      background: #a2392b;
    }

    .social .social-item .social-link:hover img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(6%) saturate(13%) hue-rotate(200deg)
        brightness(102%) contrast(105%);
      transition: all 0.4s ease;
    }
  }
}
</style>
