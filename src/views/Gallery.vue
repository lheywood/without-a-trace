<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import img1 from '../assets/gallery/1.png'
import img2 from '../assets/gallery/2.jpg'
import img3 from '../assets/gallery/3.jpg'

const images = [
  img1,
  img2,
  img3
]

const activeImage = ref(null)

const close = () => activeImage.value = null

const handleEscape = (e) => {
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', handleEscape))
onUnmounted(() => window.removeEventListener('keydown', handleEscape))
</script>

<template>
  <main class="max-w-6xl mx-auto px-4 py-16">

    <!-- Page Header -->
    <div class="text-center mb-12">
      <h1 class="font-heading text-3xl mb-3">Gallery</h1>
      <p class="text-gray-600">
        Real results, real clients.
      </p>
    </div>

    <!-- Grid -->
    <section class="grid grid-cols-2 md:grid-cols-3 gap-3">
      <button
        v-for="(img, i) in images"
        :key="i"
        @click="activeImage = img"
        class="relative aspect-square overflow-hidden bg-gray-200"
      >
        <img
          :src="img"
          alt=""
          class="absolute inset-0 w-full h-full  hover:scale-105 transition"
        />
      </button>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="activeImage"
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center"
        @click.self="close"
      >
        <!-- Close Button -->
        <button
          @click="close"
          class="absolute top-6 right-6 text-white text-3xl"
        >
          ×
        </button>

        <!-- Image -->
        <img
          :src="activeImage"
          class="max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>
    </Teleport>

  </main>
</template>
