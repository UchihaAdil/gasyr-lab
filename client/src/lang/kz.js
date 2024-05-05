import pythonSvg from '@/assets/images/courses/preview/python.svg'
// import javaSvg from '@/assets/images/courses/preview/java.svg'
// import dataAnalyticsSvg from '@/assets/images/courses/preview/dataAnalytics.svg'

import pythonLogo from '@/assets/images/courses/python.png'

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
				team: 'Біздің тобымыз',
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
							title: 'Python бағдарламашы',
							titleDescription() {
								return `Python үйрену оңай, тіпті сіз ешқашан бағдарламаламасаңыз да. Тренинг барысында сізге тәжірибелі тәлімгер көмектеседі. Сіз ${this.fullProjects} портфолио жобасын әзірлейсіз, ал Мансап орталығы сізге Python әзірлеушісі ретінде жұмыс табуға көмектеседі.`
							},
							cardDescription() { return `Біздің курсы ${this.contentsCourse.allListChapters()} дерс/ ${this.contentsCourse.list.length} бөлімден тұрғыз. Курс аяқталған ертеңде сенің портфолиода ${this.fullProjects} проект болады. Мәлімет: ${this.duration} апта. ` },
							duration: 28,
							weeks: 'апта',
							currency: 'тенге',
							fullProjects: 3,
							previewImage: pythonSvg,
							circleItem: ['Онлайн', 'Басталуы: 6 мамыр'],
							courseImage: pythonLogo,
							beingScratch() {
								return `${this.duration} апта ішінде`
							},
							aboutProfession: {
								title: 'Жұмыс туралы',
								description:
									'Python-жаңадан бастаушылар үшін тамаша тіл. Python кодын жазу және оқу оңай, тіл танымалдық рейтингтерінде үнемі жоғары орынға ие және" питанистер " IT бағдарламалау, деректерді талдау, жүйені басқару және тестілеудің барлық салаларында сұранысқа ие. YouTube, Intel, Pixar, NASA, ВКонтакте, Яндекс - бұл Python тілін қолданатын бірнеше танымал компаниялар.',
								salary: '400 000 теңге',
								avarageSalary: 'мамандардың орташа айлығы',
								durationDescription:
									'алғашқы жұмысыңызды табу үшін курстағы оқумен тәжірибе жеткілікті деңгейде'
							},
							requiredEmployee: {
								title: 'Курсымыз жұмыс талап етушілілердің талаптарына сай негізделген',
								description:
									'Біз нарықтық зерттеулерін жүргіземіз, әрі ірі компаниялардан өз клиенттерінің қажеттіліктерін сұраймыз. Жұмыс орындары мен сараптамалық шолуларды тексереміз. Біз курсымызға ең таңдаулыларды ғана қосамыз'
							},
							contentsCourse: {
								title: 'Курс мазмұны',
								fullProjects: 3,
								description() {
									return `Сіз Python бағдарламалау тілінде ${this.list.length} бөлікке бөлінген, әрі әр түрлі қиындықтарға жіктелген қосымша курстарды таба аласыз`
								},
								trainingMonth: 'оқу айы',
								finalProjects: 'мәресіндегі жоба',
								allListChapters() {
									let sum = 0
									this.list.forEach(item => sum += item.accordionList.length)
									return sum
								},
								list: [
									{
										id: 1,
										title: 'Python Базасы. 1-бөлім',
										accordionList: [
											{
												title: 'Қосылу'
											},
											{
												title: 'Python базасы'
											},
											{
												title: 'Операторлар және функциялар'
											}
										]
									},
									{
										id: 2,
										title: 'Python Базасы. 2-бөлім: Telegram үшін чат-бот',
										accordionList: [
											{
												title: 'IDE орнату және конфигурациялау'
											},
											{
												title: 'Бастапқы түсініктер. Массивтер'
											},
											{
												title: 'List: массивтермен жұмыс істеу әдістері'
											}
										]
									},
									{
										id: 3,
										title: 'Python-фреймворк Django',
										accordionList: [
											{
												title: 'Веб-фреймворктардың кіріспесі'
											},
											{
												title: 'Django-ға қосылу'
											},
											{
												title: 'Веб және Linux-ға қосылу'
											},
											{
												title: 'Деректер қоры және модельдер'
											}
										]
									},
									{
										id: 4,
										title: 'Командалық проект: маркетплейс жасау',
										accordionList: [
											{
												title:
													'Тимлидпен және 3-5 адамнан тұратын топпен бірге сіз толық маркетинг үшін артқы жағын жасайсыз. Сіз Scrum немесе Kanban жүйесінде жұмыс істейсіз, тимлидпен ағымдағы прогресті үнемі талқылайсыз және жаңа тапсырмалар аласыз. Барлық процестер нақты жағдайларға мүмкіндігінше жақын-жұмыс беруші компанияларда коммерциялық бағдарламалық жасақтама осылай жасалады. Нәтижесінде сіз өзіңіздің "Yandex market" аналогын жасайсыз.'
											}
										]
									},
									{
										id: 5,
										title: 'Python Advanced: әлеуметтік желі',
										accordionList: [
											{
												title: 'Flask: басталу'
											},
											{
												title: 'Linux Базасы. 1-бөлім'
											}
										]
									}
								]
							},
							helpCenter: {
								title: 'Жұмыс алу қызметі',
								benefits: [
									{
										id: 1,
										bgColor: '#FFE96E',
										title: 'Түйіндеме',
										description: 'Біз сізді жұмыс берушіге жағымды жақпен таныстырамыз'
									},
									{
										id: 2,
										bgColor: '#DCF4FE',
										title: 'Жеке мансап жоспары',
										description:
											'Біз сізге мапсапты қалай бастау керектігін және дамыту қажеттігін үйретеміз'
									},
									{
										id: 3,
										bgColor: '#AFE9B4',
										title: 'Серіктестермен вакансия',
										description: 'Біз сіздің түйіндемеңізді ұсынамыз'
									},
									{
										id: 4,
										bgColor: '#FEBCB4',
										title: 'Портфолио жасау',
										description: 'Біз сіздің проекттеріңізді қосымша көрсетуге көмектесеміз'
									}
								]
							},
							rate: {
								title: 'Тарифіңізді таңдаңыз',
								paket: [
									{
										title: 'Standart',
										description: 'Интенсивті топта студенттермен оқу',
										list: [
											{
												fullProjects: 3,
												title: function () {
													return `Портфолияңызға ${this.fullProjects} жоба`;
												}
											},
											{
												title: function () {
													return 'Мансап жолы';
												}
											},
											{
												title: function () {
													return 'Жұмыспен қамту кепілдігі';
												}
											},
											{
												title: function () {
													return 'Оқу материалдарына шексіз қол жетімділік';
												}
											},
											{
												title: function () {
													return 'Комплексті үйрету';
												}
											},
											{
												title: function () {
													return 'Профориентация';
												}
											},
										]
									},
									{
										title: 'Ultimate',
										description: 'Қарқынды және жеке оқыту',
										list: [
											{
												fullProjects: 3,
												title: function () {
													return `Портфолияңызға ${this.fullProjects} жоба`;
												}
											},
											{
												title: function () {
													return 'Мансап жолы';
												}
											},
											{
												title: function () {
													return 'Жұмыспен қамту кепілдігі';
												}
											},
											{
												title: function () {
													return 'Оқу материалдарына шексіз қол жетімділік';
												}
											},
											{
												title: function () {
													return 'Комплексті үйрету';
												}
											},
											{
												title: function () {
													return 'Профориентация';
												}
											},
											{
												title: function () {
													return 'Жеке оқу күнтізбесі';
												}
											},
											{
												title: function () {
													return 'Жеке бағытталған оқу жаспары';
												}
											},
											{
												title: function () {
													return '80 сағат ұстазбен жеке кеңес алу мүмкіндігі';
												}
											}
										]
									}
								]
							},
							modalWindow: {
								title: 'Тариф',
								subtitle: 'Өтініш қоюға жазыңыз және біздің басқарушымыз сенің қолдаңыздағы болады',
								description: 'Сіз программаны төлеп, оқытуға баста аласыз',

								input: {
									name: 'Атыңыз',
									email: 'Электрондық пошта',
									tel: 'Телефон нөмірі'
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
				},
				aboutCEO: {
					title: 'Якуб Халықбердиев',
					descriptionFirst:
						'Білім беруде он жылдан астам тәжірибесі бар көрнекті көшбасшы және стратег. Оның осы жобадағы көшбасшылық қызметі оқытудың инновациялық әдістерін енгізуге және білім беру қызметтерінің жоғары деңгейін қамтамасыз етумен дамуға бағытталған.',
					descriptionSecond:
						'Оның арманы - тек білім беру ғана емес, сонымен бірге бұл білімнің сақталуын және бір ұрпақтан екінші ұрпаққа берілуін қамтамасыз ету, бұл Gasyr Foundation философиясының негізгі бөлігі.'
				},
				ourTeam: {
					title: 'Біздің тобымыз'
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
			greetingSignIn: 'Тіркелгендер үшін!!',
			greetingSignUp: 'Сәлем, достым!',
			textSignIn:
				'Сайттың барлық функцияларына қолжетімділік қайттан алу үшін өзіңіздің персоналдық деректеріңізді енгізіңіз',
			textSignUp: 'Сайттың барлық мүмкіндіктерін пайдалану үшін жеке деректеріңізбен тіркеліңіз',

      login: {
        title: 'Кіру',
        inputEmail: 'Эл. Пошта',
        inputPassword: 'Құпия сөз',
        signIn: 'Кіру',
        errors: {
          requiredField: 'Міндетті өріс',
          existingPasswordAndEmail: 'Дұрыс электрондық пошта мен құпия сөзді енгізіңіз'
        }
      },
      register: {
        title: 'Тіркелу',
        inputName: 'Аты',
        inputSurname: 'Тегі',
        inputEmail: 'Электронды пошта',
        inputPassword: 'Құпия сөз',
        signUp: 'Тіркелу',
        errors: {
          requiredField: 'Міндетті өріс',
          minFieldLength: 'Ең аз 6 таңба',
          correctEmail: 'Дұрыс электрондық пошта енгізіңіз'
        }
      }
    }
  },
  global: {
    btn: {
      default: 'Толығырақ',
      subscribe: 'Тіркелу',
      move: 'Өту',
      back: 'Артқа',
      bookCourse: 'Курсқа жазылу',
      demand: 'Өтініш қалдыру'
    }
  }
}
