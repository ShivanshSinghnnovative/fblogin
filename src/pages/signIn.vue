
<template>
  <div class="h-screen w-full bg-gray-200 flex items-center justify-center">
    <div class="flex flex-col md:gap-10 md:flex-row w-5/6 p-8 ">
      <div class="md:w-3/6 text-center gap-4 md:text-left mb-4 md:mb-0 pt-6">
        <h1 class="lg:text-6xl mt-6 text-3xl font-bold text-blue-700">facebook</h1>
        <p class="mt-3 lg:text-3xl">Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div class="md:w-2/5 p-5 ml-4 bg-white rounded-lg shadow-md">
        <div>
          <div class="mb-4">
            <input
              class="shadow lg:text-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="text" placeholder="Email Address or number" />
          </div>
          <div class="mb-4">
            <input
              class="shadow lg:text-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="Password" />
          </div>
          <button
            class="bg-blue-700 lg:text-xl mb-3 hover:bg-blue-500 justify-center w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Log In
          </button>
          <hr class="mt-2 mb-2 ">
          <div>
            <button
              class="bg-green-500 lg:text-xl mt-3 justify-center m-auto w-full text-center hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button" @click="loginWithFacebook">
              <font-awesome-icon icon="fa-brands fa-facebook" /> Login with facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'vue-router';

const router = useRouter();
const loginWithFacebook = async () => {
  try {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    const userEmail = result.user.email;
    localStorage.setItem('userEmail', userEmail);
    router.push('/home');
  } catch (error) {
    if (error.code === 'auth/popup-closed-by-user') {
      console.log('Facebook login popup was closed by the user.');
    } else {
      console.error('Error logging in with Facebook:', error);
    }
  }
};
</script>