<template>
  <nav class="sticky top-0 z-50 bg-primary/95 backdrop-blur shadow px-4 py-3">
    <div class="max-w-7xl mx-auto flex justify-between items-center text-gray-50">

      <!-- Logo -->
      <div class="text-xl font-bold">
        <RouterLink to="/" class="hover:text-white-900 text-xl poiret-one-regular text-gray-50">Without a Trace Aesthetics</RouterLink>
      </div>
      

      <!-- Desktop -->
      <div class="hidden md:flex items-center space-x-6">

        <!-- Router Links -->
        <RouterLink to="/about" class="hover:text-gray-900">
          About
        </RouterLink>
        <RouterLink to="/treatments" class="hover:text-gray-900">
          Treatments
        </RouterLink>
        <RouterLink to="/gallery" class="hover:text-gray-900">
          Gallery
        </RouterLink>


        <!-- WhatsApp -->
        <a href="https://www.facebook.com/profile.php?id=61576557208393" target="_blank" class="text-gray-50">
          <i class="fa-brands fa-facebook text-lg"></i>
        </a>

        <!-- Email -->
        <a href="mailto:withoutatrace0405@gmail.com" class="text-gray-50">
          <i class="fa-solid fa-envelope text-lg"></i>
        </a>

        <!-- Instagram -->
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

      <RouterLink to="/treatments" class="block">
        Treatments
      </RouterLink>
      <RouterLink to="/about" class="block">
        About
      </RouterLink>
      <RouterLink to="/gallery" class="block">
        Gallery
      </RouterLink>


      
    </div>
  </nav>

  <router-view />

  <!-- Footer -->
    <footer class="bg-[--color-background] border-t border-gray-200">
      <div class="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

        <!-- Brand -->
        <div>
          <h3 class="font-heading text-xl mb-3">Your Clinic Name</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Advanced skin aesthetics providing personalised, results-driven
            treatments in a calm and professional environment.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="font-medium mb-4">Explore</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li><RouterLink to="/" class="hover:text-[--color-primary]">Home</RouterLink></li>
            <li><RouterLink to="/treatments" class="hover:text-[--color-primary]">Treatments</RouterLink></li>
            <li><RouterLink to="/gallery" class="hover:text-[--color-primary]">Gallery</RouterLink></li>
            <li><RouterLink to="/about" class="hover:text-[--color-primary]">About</RouterLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-medium mb-4">Contact</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>📍 Your City, Country</li>
            <li>📞 +44 0000 000000</li>
            <li>✉️ hello@yourclinic.com</li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-medium mb-4">Follow</h4>

          <div class="flex gap-4">
            <!-- Facebook -->
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              class="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-[--color-primary] hover:text-white transition"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>

            <!-- Instagram placeholder -->
            <div class="w-10 h-10 rounded-full bg-white shadow"></div>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-gray-200">
        <div class="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <span>
            © {{ new Date().getFullYear() }} Without A Trace Aesthetics. All rights reserved.
          </span>

          <div class="flex gap-6">
            <a href="#" class="hover:text-[--color-primary]">Privacy Policy</a>
            <a href="#" class="hover:text-[--color-primary]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'


const mobileOpen = ref(false)
</script>
