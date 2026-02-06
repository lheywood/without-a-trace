<template>
  <footer class="bg-[--color-background] border-t border-gray-200">
    <div class="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
      <!-- Brand -->
      <div>
        <h3 class="font-heading text-xl mb-3">Without A Trace Aesthetics</h3>
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
          <li>📍 Jarrow, UK</li>
          <li>📞 +447584674327</li>
          <li>✉️ withoutatrace0405@gmail.com</li>
        </ul>
      </div>

      <!-- Social -->
      <div>
        <h4 class="font-medium mb-4">Follow</h4>
        <div class="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=61576557208393" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-white text-blue-700 shadow flex items-center justify-center hover:bg-[--color-primary] hover:text-blue-500 transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/withoutatraceaesthetics/"
            target="_blank"
            rel="noopener"
            class="w-10 h-10 rounded-full bg-white text-pink-600 shadow flex items-center justify-center hover:bg-[--color-primary] hover:text-pink-500 transition"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.4a2.9 2.9 0 1 1 2.9-2.9 2.9 2.9 0 0 1-2.9 2.9zm4.7-7.9a1.05 1.05 0 1 0-1.05-1.05 1.05 1.05 0 0 0 1.05 1.05z"
              />
            </svg>
          </a>

        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-gray-200">
      <div class="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <span>© {{ new Date().getFullYear() }} Without A Trace Aesthetics. All rights reserved.</span>
        
      </div>
    </div>
  </footer>
</template>

<script setup></script>
