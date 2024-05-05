import { defineStore } from "pinia";
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthUserStore = defineStore('auth', () => {
	const isAuthUser = ref(localStorage.getItem('isAuth'))

	const router = useRouter()
	// Functions
	function registrationUserCompleted(name, email, password) {
		localStorage.setItem('isAuth', true)
		localStorage.userData = JSON.stringify({
			name,
			email,
			password,
		})
		let userData = JSON.parse(localStorage.userData)
		console.log(userData)
	}

	function loggedOut() {
		localStorage.setItem('isAuth', false)
	}

	function loggedIn(email, password) {
		const userData = JSON.parse(localStorage.getItem('userData'))

		if (userData.email === email && userData.password === password) {
			localStorage.setItem('isAuth', true)
			console.log('User success logged in')
			router.push({ name: 'home' })
			return true
		}
		return false
	}


	function checkLocalAuthUser() {
		let tmp = JSON.parse(localStorage.getItem('isAuth'))
		return tmp
	}


	function getName() {
		let userName = JSON.parse(localStorage.userData)
		return userName.name
	}


	function goHomePage() {
		router.push({ name: 'home' })
	}





	function transitionRemoveMove(linkRef) {
		linkRef.value.classList.add('active')
	}

	function transitionAddMove(linkRef) {
		linkRef.value.classList.remove('active')
	}

	onMounted(() => {
		checkLocalAuthUser()
	})


	return {
		isAuthUser,
		transitionRemoveMove,
		transitionAddMove,
		goHomePage,
		loggedIn,
		loggedOut,
		getName,
		registrationUserCompleted,
		checkLocalAuthUser,
	}
})