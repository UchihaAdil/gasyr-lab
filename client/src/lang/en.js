import pythonSvg from '@/assets/images/courses/preview/python.svg'
import javaSvg from '@/assets/images/courses/preview/java.svg'
import dataAnalyticsSvg from '@/assets/images/courses/preview/dataAnalytics.svg'
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
              cardDescription() {
                return `Our course consists of ${this.contentsCourse.allListChapters()} lessons/ ${this.contentsCourse.list.length} parts. There are ${this.fullProjects} projects in your portfolio before the end of the course. Duration: ${this.duration} weeks. `
              },
              titleDescription() {
                return `Python is easy to learn, even if you have never programmed. An expert tutor will assist you during your training. You will develop ${this.fullProjects} portfolio projects, and the Career Center will help you find a job as a Python developer.`
              },
              duration: 28,
              previewImage: pythonSvg,
              circleItem: ['Online', 'Start: 6 may'],
              fullProjects: 3,
              courseImage: pythonLogo,
              beingScratch() {
                return `from 0 to ${this.duration} weeks`
              },
              aboutProfession: {
                title: 'About Profession',
                description:
                  'Python is a great language for beginners. Python code is easy to write and read, the language consistently ranks high in popularity ratings, and "Pythonists" are in demand in almost all areas of IT-Programming, Data Analysis, System Management and testing. YouTube, Intel, Pixar, NASA, VK, Yandex are just a few of the well - known companies that use Python in their products.',
                salary: '400 000 тенге',
                avarageSalary: 'the average salary of a specialist',
                durationDescription:
                  'intensive classes and practice on the course are enough to find your first job'
              },
              requiredEmployee: {
                title: 'The course is designed according to the requirements of employers',
                description:
                  'We conduct market research, interview large companies about the requirements for novice specialists, check vacancies and expert opinions. Based on this, we add only the most necessary things to the course.'
              },
              contentsCourse: {
                title: 'Course content',
                description: `You will find {this.fullProjects} blocks on Python programming with different levels of difficulty and additional courses.`,
                allListChapters() {
                  let sum = 0
                  this.list.forEach((item) => (sum += item.accordionList.length))
                  return sum
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
              },
              helpCenter: {
                title: 'Help with employment',
                benefits: [
                  {
                    id: 1,
                    bgColor: '#FFE96E',
                    title: 'Resume',
                    description: 'We present you to an employer with a profitable side'
                  },
                  {
                    id: 2,
                    bgColor: '#DCF4FE',
                    title: 'Individual career plan',
                    description: 'Let`s tell you how to start and develop a career'
                  },
                  {
                    id: 3,
                    bgColor: '#AFE9B4',
                    title: 'Partner vacancies',
                    description: 'We will recommend your candidacy'
                  },
                  {
                    id: 4,
                    bgColor: '#FEBCB4',
                    title: 'Making a portfolio',
                    description: 'We will help you to present your projects effectively'
                  }
                ]
              },
              rate: {
                title: 'Choose your tariff',
                paket: [
                  {
                    title: 'Stadart',
                    description: 'Intensive study in a group of students',
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
                    title: 'Ultimate',
                    description: 'Intensive study in a group of students',
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
                title: 'Tarif',
                subtitle: 'Leave a request and our manager will contact you',
                description: 'You can pay for the program and start studying',

                input: {
                  name: 'Your name',
                  email: 'Email',
                  tel: 'Phone number'
                }
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
          correctEmail: 'Enter the correct email',
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
    }

    // ... another page texts
  },
  global: {
    btn: {
      default: 'Learn More',
      subscribe: 'Subscribe',
      move: 'Move to',
      back: 'Back',
      bookCourse: 'Booking course',
      demand: 'Apply request'
    }
  }
}
