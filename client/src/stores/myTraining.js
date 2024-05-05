import { defineStore } from "pinia";



export const useMyTrainingStore = defineStore('myTraining', () => {
	const myCourses = []



	function addMyCourses(id, courses) {
		const currentCourse = courses.find(course => id === course.id)



		if (myCourses.length === 0) {
			myCourses.push(currentCourse)
		}

		for (let i = 0; i < myCourses.length; i++) {
			if (myCourses[i].id === id) {
				myCourses[i] = currentCourse
			} else {
				myCourses.push(currentCourse)
			}
		}
	}

	return { addMyCourses, myCourses }
})