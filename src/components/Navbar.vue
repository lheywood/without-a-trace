<template>
  <nav class="sticky top-0 z-50 bg-primary/95 backdrop-blur shadow px-4 py-3">
    <div class="max-w-7xl mx-auto flex justify-between items-center text-gray-50">

  <!-- Logo -->
<div class="flex items-center gap-3">
  <RouterLink
    to="/"
    class="flex items-center gap-3 hover:opacity-90 text-gray-50"
  >
    <img
      :src="logo"
      alt="Without a Trace Aesthetics logo"
      class="h-30 w-30 rounded-full object-cover bg-white "
    />
    <span class="hidden sm:inline text-xl zalando-sans-expanded font-bold">
      Without a Trace Aesthetics
    </span>
  </RouterLink>
</div>

      
      <!-- Desktop -->
      <div class="hidden md:flex items-center space-x-6">
        <RouterLink to="/about" class="hover:text-gray-900">About</RouterLink>
        <RouterLink to="/treatments" class="hover:text-gray-900">Treatments</RouterLink>
        <RouterLink to="/gallery" class="hover:text-gray-900">Gallery</RouterLink>

        <a href="https://www.facebook.com/profile.php?id=61576557208393" target="_blank" class="text-gray-50">
          <i class="fa-brands fa-facebook text-lg"></i>
        </a>
        <a href="mailto:withoutatrace0405@gmail.com" class="text-gray-50">
          <i class="fa-solid fa-envelope text-lg"></i>
        </a>
        <a href="https://www.instagram.com/withoutatraceaesthetics" target="_blank" class="text-gray-50">
          <i class="fa-brands fa-instagram text-lg"></i>
        </a>
      </div>

      <!-- Mobile Button -->
      <button class="md:hidden" @click="mobileOpen = !mobileOpen">
        <i class="fa-solid fa-bars text-xl"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileOpen" class="md:hidden mt-4 space-y-3 text-gray-100">
      <RouterLink to="/treatments" class="block">Treatments</RouterLink>
      <RouterLink to="/about" class="block">About</RouterLink>
      <RouterLink to="/gallery" class="block">Gallery</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from "../assets/logo_nobackground.png"

const mobileOpen = ref(false)
</script>
