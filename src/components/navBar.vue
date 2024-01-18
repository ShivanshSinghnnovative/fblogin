<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="bg-blue-500 p-4 flex justify-between">
      <div class="flex items-center">
        <font-awesome-icon icon="fa-brands fa-facebook" />
        <p class="text-white text-lg ml-2 font-semibold">Facebook</p>
      </div>
      <div>
        <p class="text-white mt-2 text-right">Welcome {{ userEmail }}</p>
      </div>
    </div>
    <span class="m-3 bg-white rounded-lg shadow ">
      <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-600 focus:outline-none"
        @click="logout">
        Sign Out
      </button>
    </span>
    <div class="max-w-3xl mx-auto mt-6 p-4 bg-white rounded-lg shadow">
      <div class="flex items-center space-x-4">
        <font-awesome-icon icon="fa-brands fa-instagram" />
        <textarea placeholder="What's on your mind?"
          class="w-full p-2 text-gray-800 border rounded-lg focus:outline-none"></textarea>
      </div>
      <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-600 focus:outline-none">
        Post
      </button>
      <div class="mt-4">
        <div class="flex items-center space-x-4">
          <font-awesome-icon icon="fa-brands fa-instagram" />
          <div>
            <p class="font-semibold">Friend's Name</p>
            <p class="text-gray-600">Posted 2 hours ago</p>
          </div>
        </div>
        <p class="mt-2">This is a sample post content. Lorem ipsum dolor sit amet...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
const router = useRouter();
const userEmail = ref('');
const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('userEmail');
    router.push('/');
  } catch (error) {
    console.error('Error during signout:', error);
  }
};

onMounted(() => {
  userEmail.value = localStorage.getItem('userEmail') || '';
});
</script>
