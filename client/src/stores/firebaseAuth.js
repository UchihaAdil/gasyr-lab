import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';



export const useFirebaseAuthUserStore = (router) => {
    const auth = getAuth();
    const isAuthUser = ref(false);

    const registrationUserCompleted = async (firstName, lastName, email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(auth.currentUser, {
                displayName: `${firstName} ${lastName}`
            });
            isAuthUser.value = true;
            router.push({ name: 'home' });
            console.log('User successfully registered:', user);
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    const loggedIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            isAuthUser.value = true;
            router.push({ name: 'home' });
            console.log('User successfully logged in:', user);
            return true;
        } catch (error) {
            console.error('Error logging in user:', error);
            // Если ошибка связана с неправильным паролем, выводим сообщение об ошибке
            if (error.code !== 'auth/wrong-password') {
                alert('Неправильный пароль. Пожалуйста, попробуйте еще раз.');
            } else {
                alert('Ошибка входа. Пожалуйста, попробуйте еще раз или обратитесь в службу поддержки.');
            }
        }
    };

    const loggedOut = async () => {
        try {
            await signOut(auth);
            isAuthUser.value = false;
            router.push({ name: 'home' });
            console.log('User successfully logged out');
        } catch (error) {
            console.error('Error logging out user:', error);
        }
    };

    const checkFirebaseAuthUser = () => {
        onAuthStateChanged(auth, user => {
            isAuthUser.value = !!user;
        });
    };

    const goHomePage = async () => {
		router.push({ name: 'home' })
	}

    const getFullName = () => {
        const currentUser = auth.currentUser;
        if (currentUser && currentUser.displayName) {
            const displayName = currentUser.displayName;
            console.log('User name:', displayName);
            return displayName; 
        } else {
            console.log('No user logged in or no display name set');
            return 'Unknown'; 
        }
    }

    onMounted(() => {
        checkFirebaseAuthUser()
    })

    

    return {
        isAuthUser,
        registrationUserCompleted,
        checkFirebaseAuthUser,
        loggedIn,
        loggedOut,
        goHomePage,
        getFullName
    };
};
