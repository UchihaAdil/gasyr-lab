import pythonSvg from '@/assets/images/courses/preview/python.svg'
import javaSvg from '@/assets/images/courses/preview/java.svg'
import dataAnalyticsSvg from '@/assets/images/courses/preview/dataAnalytics.svg'

export default {
	theme: {
		light: 'Жарық',
		dark: 'Қараңғы'
	},
	page: {
		main: {
			intro: {
				title: '"Бастысы - идея мен амбиция"',
				name: 'Якуб'
			},
			header: {
				my_training: 'Менің оқуым',
				all_courses: 'Барлық курстар',
				contacts: 'Байланыстар',
				team: 'Команда',
				about: "'Gasyr Lab' туралы",
				dropdown: {
					log_out: 'Шығу'
				},
				login: 'Кіру',
				register: 'Тіркелу'
			},
			main: {
				scrollHorizontal: {
					title: 'Демеушілер'
				},
				greetingSection: {
					title: 'Сапа мен қолжетімділікке негізделген ғасырға сай білім беретін онлайн IT мектебі',
					subtitle: 'Компаниялар біздің түлектерді өздері күтеді'
				},
				ourCourses: {
					title: 'Бағыттар мен Курстар',
					courses: [
						{
							id: 1,
							title: 'Python Developer',
							cardDescription: `Наш курс состоит из 30 уроков/ 5 частей. В вашем портфолио будет 4 проекта до конца курса. Длительность: ${this.duration} недель. `,
							titleDescription: '',
							duration: 28,
							fullProjects: 3,

							aboutProfession: {
								title: 'О профессии',
								description: 'Python - отличный язык для начинающих. Код Python легко писать и читать, язык постоянно занимает высокие места в рейтингах популярности, а "питонисты" востребованы практически во всех сферах IT-программирования, анализа данных, управления системами и тестирования. YouTube, Intel, Pixar, NASA, ВКонтакте, Яндекс - это лишь несколько известных компаний, которые используют Python в своих продуктах.',
								salary: '400 000 тенге',
								avarageSalary: 'средняя зарплата специалиста',
								durationDescription: 'интенсивные занятия и практика на курсе достаточно, чтобы найти свою первую работу'
							},
							requiredEmployee: {
								title: 'Курс разработан в соответствии с требованиями работодателей',
								description: 'Мы проводим рыночные исследования, опрашиваем крупные компании о требованиях к начинающим специалистам, проверяем вакансии и экспертные мнения. На их основе мы добавляем в курс только самое необходимое.'
							},
							contentsCourse: {
								title: "Содержание курсов",
								description: `Вы найдете ${this.fullProjects} блоков по программированию на Python с разным уровнем сложности и дополнительные курсы.`,
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
									},
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
											},
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
											},
										]
									},
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
					title: 'Таңдаумен көмектесеміз',
					desc: 'Егер сізде формат туралы сұрақтарыңыз болса немесе не таңдау керектігін білмесеңіз, нөміріңізді қалдырыңыз - біз қоңырау шалып, барлық сұрақтарға жауап береміз',
					inputName: 'Есімі',
					inputSurname: 'Тегі',
					rules:
						'Нысанды жіберу арқылы сіз “Дербес деректерді өңдеу туралы келісімді" және "Оферта" шарттарын қабылдау, сондай-ақ "Пайдаланушы шарттары" бойынша келісіміңізді бересіз'
				}
			},
			footer: {
				newsletter: {
					title: 'Барлығы туралы хабардар болу үшін біздің ақпараттық бюллетеньге жазылыңыз!',
					desc: 'Біздің саладағы барлық оқиғалардан хабардар болыңыз және маңызды бөлшектерді жіберіп алмаңыз. Дәл қазір біздің ақпараттық ортаға қосылыңыз және болып жатқан оқиғалардың ортасында болыңыз!'
				},
				list: {
					aboutUs: {
						title: 'Біз жайлы',
						school: 'Мектеп',
						java: '"Java" жайлы Курс',
						python: '"Python" жайлы Курс',
						dataAnalytics: '"Data Analytics" жайлы Курс'
					},
					help: {
						title: 'Көмек',
						ref: 'Анықтама',
						community: 'Қауымдастық',
						support: 'Техникалық көмек',
						faq: 'Сұрақ жән Жауап'
					},
					contacts: {
						title: 'Байланыстар',
						info: 'Ақпарат',
						address: 'Жандосов, 36'
					}
				}
			}
		},
		auth: {
			greetingSignIn: 'Қайта тіркелгендер!',
			greetingSignUp: 'Сәлем, достым!',
			textSignIn:
				'Барлық сайт функцияларын пайдалану үшін сіздің персоналдық маълуметерін енгізіңіз',
			textSignUp:
				'Барлық сайт функцияларын пайдалану үшін сіздің персоналдық маълуметерімен тіркелуді жасаңыз',

			login: {
				title: 'Кіру',
				inputEmail: 'Эл. Пошта',
				inputPassword: 'Құпия сөз',
				signIn: 'Кіру',
				errors: {
					requiredField: 'Міндетті түсінікті қолдану',
					existingPasswordAndEmail: 'Жазымызды емәйлі адресі мен паралі енгізіңіз'
				}
			},
			register: {
				title: 'Тіркелу',
				inputName: 'Аты',
				inputEmail: 'Электронды пошта',
				inputPassword: 'Құпия сөз',
				signUp: 'Тіркелу',
				errors: {
					requiredField: 'Міндетті өріс',
					minFieldLength: 'Ең аз 6 таңба',
					correctEmail: 'Дұрыс электрондық пошта мекенжайын енгізіңіз'
				}
			}
		},
		global: {
			btn: {
				default: 'Толығырақ',
				subscribe: 'Тіркелу',
				move: 'Өту',
				back: 'Артқа'
			}
		}
	}
}
