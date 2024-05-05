import pythonSvg from '@/assets/images/courses/preview/python.svg'
import javaSvg from '@/assets/images/courses/preview/java.svg'
import dataAnalyticsSvg from '@/assets/images/courses/preview/dataAnalytics.svg'
import pythonLogo from '@/assets/images/courses/python.png'
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
				team: 'Команда',
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
					courses: [
						{
							id: 1,
							title: 'Python Developer',
							titleDescription() {
								return `Python просто выучить, даже если вы никогда не программировали. Во время обучения вам будет помогать эксперт-куратор. Вы разработаете ${this.fullProjects} проекта для портфолио, а Центр карьеры поможет найти работу Python-разработчиком.`
							},
							cardDescription() { return `Наш курс состоит из ${this.contentsCourse.allListChapters()} уроков/ ${this.contentsCourse.list.length} частей. В вашем портфолио будет ${this.fullProjects} проекта до конца курса. Длительность: ${this.duration} недель. ` },

							duration: 28,
							fullProjects: 3,
							previewImage: pythonSvg,
							courseImage: pythonLogo,
							circleItem: ['Онлайн', 'Старт: 6 мая'],
							beingScratch() {
								return `с 0 до ${this.duration} недель`
							},
							aboutProfession: {
								title: 'О профессии',
								description:
									'Python - отличный язык для начинающих. Код Python легко писать и читать, язык постоянно занимает высокие места в рейтингах популярности, а "питонисты" востребованы практически во всех сферах IT-программирования, анализа данных, управления системами и тестирования. YouTube, Intel, Pixar, NASA, ВКонтакте, Яндекс - это лишь несколько известных компаний, которые используют Python в своих продуктах.',
								salary: '400 000 тенге',
								avarageSalary: 'средняя зарплата специалиста',
								durationDescription:
									'интенсивные занятия и практика на курсе достаточно, чтобы найти свою первую работу'
							},
							requiredEmployee: {
								title: 'Курс разработан в соответствии с требованиями работодателей',
								description:
									'Мы проводим рыночные исследования, опрашиваем крупные компании о требованиях к начинающим специалистам, проверяем вакансии и экспертные мнения. На их основе мы добавляем в курс только самое необходимое.'
							},
							contentsCourse: {
								title: 'Содержание курсов',
								description: `Вы найдете {this.fullProjects} блоков по программированию на Python с разным уровнем сложности и дополнительные курсы.`,
								allListChapters() {
									let sum = 0
									this.list.forEach(item => sum += item.accordionList.length)
									return sum
								},
								list: [
									{
										id: 1,
										title: 'Python Basics. Часть 1',
										accordionList: [
											{
												title: 'Введение'
											},
											{
												title: 'Основы Python'
											},
											{
												title: 'Операторы и выражения'
											}
										]
									},
									{
										id: 2,
										title: 'Python Basics. Часть 2: Chatbot для Telegram',
										accordionList: [
											{
												title: 'Настройка и конфигурация IDE'
											},
											{
												title: 'Основные понятия. Массивы'
											},
											{
												title: 'List: работа с массивами'
											}
										]
									},
									{
										id: 3,
										title: 'Python Framework Django',
										accordionList: [
											{
												title: 'Введение в веб-фреймворки'
											},
											{
												title: 'Введение в Django'
											},
											{
												title: 'Введение в веб и Linux'
											},
											{
												title: 'База данных и модели'
											}
										]
									},
									{
										id: 4,
										title: 'Командный проект: создание маркетплейса',
										accordionList: [
											{
												title:
													'Вместе с тимлидом и командой из 3-5 человек вы разработаете серверную часть для полноценного маркетплейса. Вы будете работать по системе Scrum или Kanban, регулярно обсуждать с тимлидом текущий прогресс и получать новые задачи. Все процессы максимально приближены к реальным условиям - именно так создают коммерческое программное обеспечение в компаниях-работодателях. В результате вы создадите собственный аналог "Яндекс Маркета".'
											}
										]
									},
									{
										id: 5,
										title: 'Python Advanced: социальная сеть',
										accordionList: [
											{
												title: 'Flask: первые шаги'
											},
											{
												title: 'Основы Linux. Часть 1'
											}
										]
									}
								]
							},
							helpCenter: {
								title: 'Помощь с трудоустройством',
								benefits: [
									{
										id: 1,
										bgColor: '#FFE96E',
										title: 'Резюме',
										description: 'Мы представляем вас работодателю с выгодной стороны'
									},
									{
										id: 2,
										bgColor: '#DCF4FE',
										title: 'Индивидуальный план карьеры',
										description: 'Мы расскажем, как начать и развивать карьеру'
									},
									{
										id: 3,
										bgColor: '#AFE9B4',
										title: 'Вакансии партнеров',
										description: 'Мы рекомендуем вашу кандидатуру'
									},
									{
										id: 4,
										bgColor: '#FEBCB4',
										title: 'Создание портфолио',
										description: 'Мы поможем эффективно презентовать ваши проекты'
									}
								]
							},
							rate: {
								title: 'Выберите ваш тариф',
								paket: [
									{
										title: 'Стадарт',
										description: 'Интенсивное обучение в группе студентов',
										list: [
											{
												title: '3 проекта в портфолио'
											},
											{
												title: 'Карьерный трек'
											},
											{
												title: 'Гарантия трудоустройства'
											},
											{
												title: 'Бессрочный доступ к учебным материалам'
											},
											{
												title: 'Комплексная подготовка'
											},
											{
												title: 'Профориентация'
											}
										]
									},
									{
										title: 'Стадарт',
										description: 'Интенсивное обучение в группе студентов',
										list: [
											{
												title: '3 проекта в портфолио'
											},
											{
												title: 'Карьерный трек'
											},
											{
												title: 'Гарантия трудоустройства'
											},
											{
												title: 'Бессрочный доступ к учебным материалам'
											},
											{
												title: 'Комплексная подготовка'
											},
											{
												title: 'Профориентация'
											},
											{
												title: 'Персональное расписание'
											},
											{
												title: 'Индивидуальная траектория обучения'
											},
											{
												title: '80 часов персональных консультаций с наставником'
											}
										]
									}
								]
							},
							modalWindow: {
								title: 'Тариф',
								subtitle: 'Оставьте заявку, и наш менеджер свяжется с вами',
								description: 'Вы можете оплатить программу и начать обучение',

								input: {
									name: 'Ваше имя',
									email: 'Эл. почта',
									tel: 'Номер телефона'
								}
							}
						}
					]
				},
				subscription: {
					title: 'Поможем с выбором',
					desc: 'Если у вас есть вопросы о формате или вы не знаете, что выбрать, оставьте свой номер — мы позвоним и ответим на все вопросы',
					inputName: 'Имя',
					inputSurname: 'Фамилия',
					rules:
						'Отправляя форму, вы принимаете «Соглашение об обработке персональных данных» и условия «Оферты», а также соглашаетесь с «Условиями использования»'
				},
				ourTeam: {
					title: 'Наша Команда'
				}
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
						dataAnalytics: 'Курс по "Data Analytics"'
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
				inputSurname: 'Фамилия',
				inputEmail: 'Электронная почта',
				inputPassword: 'Пароль',
				signUp: 'Зарегистрироваться',
				errors: {
					requiredField: 'Обязательное поле',
					minFieldLength: 'Минимум 6 символов',
					correctEmail: 'Введите корректный адрес электронной почты'
				}
			}
		}
		// ... another page texts
	},
	global: {
		btn: {
			default: 'Подробнее',
			subscribe: 'Подписаться',
			move: 'Перейти',
			back: 'Назад',
			bookCourse: 'Записаться на курс',
			demand: 'Оставить заявку'
		}
	}
}
