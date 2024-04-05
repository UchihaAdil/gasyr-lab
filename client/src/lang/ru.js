export default {
  theme: {
    light: 'Светлый',
    dark: 'Темный'
  },
  page: {
    main: {
      intro: {
        title: '"Главное - ваша идея и амбиции"',
        name: 'Якуб'
      },
      header: {
        my_training: 'Моё обучение',
        all_courses: 'Все курсы',
        contacts: 'Контакты',
        about: "О 'Gasyr Lab'",
        dropdown: {
          log_out: 'Выйти'
        },
        login: 'Войти',
        register: 'Регистрация'
      },
      main: {
        scrollHorizontal: {
          title: 'Спонсоры'
        },
        greetingSection: {
          title:
            'Онлайн IT школа, основанная на принципах доступности и инклюзивности, обучающая веку цифровых технологий.',
          subtitle: 'За нашими выпускниками охотятся компании'
        },
        ourCourses: {
          title: 'Направления и Курсы',
          courses: {
            pythonDesc:
              'это архитекторы цифрового мира, мастерски воплощающие сложные алгоритмы в жизнь. Эти специалисты творят магию, превращая теорию в функциональную реальность',
            javaDesc:
              'это как архитекторы и строители для части приложений, которые работают на сервере, т.е. на компьютере, которые обслуживают приложения или сайты',
            cppDesc:
              'В курсе по C++ вы узнаете, как создавать надежные и эффективные компоненты для серверных приложений, обеспечивая им необходимую функциональность и производительность.'
          }
        },
        subscription: {
          title: 'Поможем с выбором',
          desc: 'Если у вас есть вопросы о формате или вы не знаете, что выбрать, оставьте свой номер — мы позвоним и ответим на все вопросы',
          inputName: 'Имя',
          inputSurname: 'Фамилия',
          rules: 'Отправляя форму, вы принимаете «Соглашение об обработке персональных данных» и условия «Оферты», а также соглашаетесь с «Условиями использования»'        }
      },
      footer: {
        newsletter: {
          title: 'Подпишитесь на нашу рассылку чтобы быть в курсе обо всем!',
          desc: 'Будьте в курсе всех событий в нашей области и не упустите ни одной важной детали. Присоединяйтесь к нашей рассылке прямо сейчас и оставайтесь в центре происходящего!'
        },
        list: {
          aboutUs: {
            title: 'О нас',
            school: 'Школа',
            java: 'Курс по "Java"',
            python: 'Курс по "Python"',
            cpp: 'Курс по "C++"'
          },
          help: {
            title: 'Помощь',
            ref: 'Справка',
            community: 'Сообщество',
            support: 'Тех. Поддержка',
            faq: 'Вопросы и Ответы'
          },
          contacts: {
            title: 'Контакты',
            info: 'Информация',
            address: 'Жандосова, 36'
          }
        }
      }
    },
    auth: {
      greetingSignIn: 'Добро пожаловать обратно!',
      greetingSignUp: 'Привет, друг!',
      textSignIn: 'Введите свои личные данные, чтобы воспользоваться всеми функциями сайта',
      textSignUp:
        'Зарегистрируйтесь с помощью своих личных данных, чтобы воспользоваться всеми функциями сайта',

      login: {
        title: 'Войти',
        inputEmail: 'Эл. Почта',
        inputPassword: 'Пароль',
        signIn: 'Войти',
        errors: {
          requiredField: 'Обязательное поле',
          existingPasswordAndEmail: 'Введите правильный адрес электронной почты и пароль'
        }
      },
      register: {
        title: 'Создать аккаунт',
        inputName: 'Имя',
        inputEmail: 'Электронная почта',
        inputPassword: 'Пароль',
        signUp: 'Зарегистрироваться',
        errors: {
          requiredField: 'Обязательное поле',
          minFieldLength: 'Минимум 6 символов',
          correctEmail: 'Введите корректный адрес электронной почты'
        }
      }
    },
    courses: {
      header: {},
      main: {
        course: [{}]
      },
      footer: {}
    }
    // ... another page texts
  },
  global: {
    btn: {
      default: 'Подробнее',
      subscribe: 'Подписаться',
      move: 'Перейти',
      back: 'Назад'
    }
  }
}
