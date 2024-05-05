import pythonSvg from '@/assets/images/courses/preview/python.svg'
import pythonLogo from '@/assets/images/courses/python.png'

export default {
	theme: {
		light: 'Light',
		dark: 'Dark'
	},
	page: {
		main: {
			intro: {
				title: '"Main thing - ambitions and idea"',
				name: 'Jakub'
			},
			header: {
				my_training: 'My training',
				all_courses: 'All courses',
				contacts: 'Contacts',
				team: 'Team',
				about: "About 'Gasyr Lab'",
				dropdown: {
					log_out: 'Log out'
				},
				login: 'Sign In',
				register: 'Sign Up'
			},
			main: {
				scrollHorizontal: {
					title: 'Sponsors'
				},
				greetingSection: {
					title:
						'An online IT school founded on the principles of accessibility and inclusivity, providing education for the digital age.',
					subtitle: 'Companies are hunting for our graduates'
				},
				ourCourses: {
					title: 'Directions and courses',
					courses: [
						{
							id: 1,
							title: 'Python Developer',
							cardDescription: function() {
								return `Our course consists of ${this.contentsCourse.allListChapters()} lessons/ ${this.contentsCourse.list.length} parts. There are ${this.fullProjects} projects in your portfolio before the end of the course. Duration: ${this.duration} weeks. `;
							},
							titleDescription: function() {
								return `Python is easy to learn, even if you have never programmed. An expert tutor will assist you during your training. You will develop ${this.fullProjects} portfolio projects, and the Career Center will help you find a job as a Python developer.`;
							},
							duration: 28,
							weeks: 'weeks',
							contentsCourse: {
								input: {
									name: 'Your name',
									email: 'Email',
									tel: 'Phone number'
								},
								description: function() {
									return `You will find ${this.list.length} blocks on Python programming with different levels of difficulty and additional courses.`;
								},
								allListChapters: function() {
									let sum = 0;
									this.list.forEach(item => (sum += item.accordionList.length));
									return sum;
								},
								list: [
									{
										id: 1,
										title: 'Python Basics. Part 1',
										accordionList: [
											{
												title: 'Introduction'
											},
											{
												title: 'Python Basics'
											},
											{
												title: 'Operators and Expressions'
											}
										]
									},
									{
										id: 2,
										title: 'Python Basics. Part 2: Chatbot for Telegram',
										accordionList: [
											{
												title: 'IDE Setup and Configuration'
											},
											{
												title: 'Basic Concepts. Arrays'
											},
											{
												title: 'List: Working with Arrays'
											}
										]
									},
									{
										id: 3,
										title: 'Python Framework Django',
										accordionList: [
											{
												title: 'Introduction to Web Frameworks'
											},
											{
												title: 'Introduction to Django'
											},
											{
												title: 'Introduction to Web and Linux'
											},
											{
												title: 'Database and Models'
											}
										]
									},
									{
										id: 4,
										title: 'Team Project: Creating a Marketplace',
										accordionList: [
											{
												title:
													'Together with a team lead and a team of 3-5 people, you will develop the server part for a full-fledged marketplace. You will work according to the Scrum or Kanban system, regularly discuss the current progress with the team lead and receive new tasks. All processes are maximally close to real conditions - this is how commercial software is created in employer companies. As a result, you will create your own analog of "Yandex Market".'
											}
										]
									},
									{
										id: 5,
										title: 'Python Advanced: Social Network',
										accordionList: [
											{
												title: 'Flask: Getting Started'
											},
											{
												title: 'Linux Basics. Part 1'
											}
										]
									}
								]
							}
						}
					]
				},
				subscription: {
					title: 'Help you with the choice',
					desc: 'If you have questions about the format or do not know what to choose, leave your number — we will call and answer all your questions',
					inputName: 'Name',
					inputSurname: 'Surname',
					rules:
						'By submitting the form, you accept the "Personal Data Processing Agreement" and the terms of the "Offer", as well as agree to the "Terms of Use"'
				},
				ourTeam: {
					title: 'Our Team'
				}
			},
			footer: {
				newsletter: {
					title: 'Subscribe to our newsletter to keep up to date with everything!',
					desc: 'Keep up to date with all the events in our area and do not miss any important details. Join our newsletter right now and stay in the center of what is happening!'
				},
				list: {
					aboutUs: {
						title: 'About Us',
						school: 'School',
						java: 'Course "Java"',
						python: 'Course "Python"',
						dataAnalytics: 'Course "Data Analytics"'
					},
					help: {
						title: 'Help',
						ref: 'Reference',
						community: 'Community',
						support: 'Tech. Support',
						faq: 'Q&A'
					},
					contacts: {
						title: 'Contacts',
						info: 'Information',
						address: 'Jandosov, 36'
					}
				}
			}
		},
		auth: {
			greetingSignIn: 'Welcome Back!',
			greetingSignUp: 'Hello, Friend!',
			textSignIn: 'Enter your Personal details to use all of site features',
			textSignUp: 'Register with your Personal details to use all of site features',
			login: {
				title: 'Sign In',
				inputEmail: 'Email',
				inputPassword: 'Password',
				signIn: 'Sign In',
				errors: {
					requiredField: 'Required field',
					existingPasswordAndEmail: 'Enter the correct email and password'
				}
			},
			register: {
				title: 'Create Account',
				inputName: 'Name',
				inputSurname: 'Surname',
				inputEmail: 'Email',
				inputPassword: 'Password',
				signUp: 'Sign Up',
				errors: {
					requiredField: 'Required field',
					minFieldLength: 'Minimum of 6 letters',
					correctEmail: 'Enter the correct email'
				}
			}
		},
		training: {
			nav: {
				education: 'Education',
				task: 'Tasks',
				form: 'Forms',
				mentors: 'Mentors',
				journal: 'Journal',
				settings: 'Settings'
			},
			preparation: 'Preparation',
			lessonRecord: 'Video Record'
		}
	},
	global: {
		btn: {
			default: 'Learn More',
			subscribe: 'Subscribe',
			move: 'Move to',
			back: 'Back',
			bookCourse: 'Booking course',
			demand: 'Apply request',
			today: 'Today',
			calendar: 'Calendar'
		}
	}
}
