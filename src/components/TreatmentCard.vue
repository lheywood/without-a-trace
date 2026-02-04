<template>
  <div
    class="flex flex-col rounded-xl shadow-lg overflow-hidden transform-gpu transition-shadow duration-300
           hover:shadow-2xl hover:scale-105 cursor-pointer"
    @click="openModal = true"
  >
    <!-- Card Header -->
    <div
      class="h-5 flex items-center justify-center text-white font-bold text-xl text-center p-4 bg-muted"
    >
      {{ title }}
    </div>

    <!-- Description Preview -->
    <div class="p-6 flex flex-col flex-grow">
      <p class="text-gray-700 mb-4 line-clamp-3">{{ description }}</p>

      <!-- Footer: From lowest price -->
      <div class="mt-auto border-t pt-2 text-gray-700 font-medium">
        From: {{ from }}
      </div>
    </div>

    <!-- Modal rendered outside the card using teleport -->
    <teleport to="body">
      <div v-if="openModal" class="fixed inset-0 bg-gray-200  flex items-center justify-center z-50">
        <!-- Click outside to close -->
        <div class="absolute inset-0" @click="openModal = false"></div>

        <!-- Modal Content -->
        <div
          class="bg-white rounded-xl w-11/12 md:w-2/3 lg:w-1/2 overflow-hidden shadow-xl relative z-10"
          @click.stop
        >
          <!-- Close Button -->
          <button
            @click="openModal = false"
            class="absolute top-3 right-4 text-gray-100 hover:text-gray-00 text-3xl font-bold"
            aria-label="Close modal"
          >
            &times;
          </button>

          <!-- Modal Header -->
          <div class="h-15 flex items-center justify-center text-white font-bold text-2xl text-center p-4 bg-muted">
            {{ title }}
          </div>

          <!-- Modal Body -->
          <div class="p-6">
            <p class="text-gray-700 mb-4">{{ fullDescription }}</p>

            <!-- Prices only in modal -->
            <ul v-if="Array.isArray(props.prices)" class="space-y-2 text-gray-700 mb-4">
              <li v-for="(item, index) in props.prices" :key="index">{{ item }}</li>
            </ul>
            <p v-else class="text-gray-700 mb-4">{{ props.prices }}</p>

            
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  fullDescription: String,
  prices: [Array, String],
  from: {
    type: String,
    default: ''
  }
})

const openModal = ref(false)
</script>

<style>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
