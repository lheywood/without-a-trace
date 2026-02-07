<template>
  <div
    class="flex flex-col rounded-xl shadow-lg overflow-hidden transform-gpu transition-shadow duration-300
           hover:shadow-2xl hover:scale-105 cursor-pointer"
    @click="openModal = true"
  >
    <!-- Card Header -->
    <div
      class="h-5 flex items-center justify-center text-white font-bold text-xl text-center p-4 bg-primary zalando-sans-expanded"
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
      <div
        v-if="openModal"
        class="fixed inset-0 z-50 flex items-center justify-center"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/40 backdrop-blur-sm"
          @click="openModal = false"
        ></div>

        <!-- Modal -->
        <div
          class="relative z-10 w-11/12 md:w-2/3 lg:w-1/2 max-h-[85vh] overflow-y-auto
                bg-white rounded-2xl shadow-2xl"
          @click.stop
        >
          <!-- Close Button -->
          <button
            @click="openModal = false"
            class="absolute top-4 right-5 text-gray-400 hover:text-gray-700
                  text-2xl transition"
            aria-label="Close modal"
          >
            &times;
          </button>

          <!-- Header -->
          <div class="px-8 py-6 border-b">
            <h2 class="text-2xl font-heading text-gray-900 bg-pr text-center">
              {{ title }}
            </h2>
          </div>

          <!-- Body -->
          <div class="p-8 space-y-6">
            <small class="text-gray-500 leading-relaxed">
              {{ subtitle }}
            </small>
            <p class="text-gray-700 leading-relaxed">
              {{ fullDescription }}
            </p>

            <!-- Benefits -->
            <div v-if="props.benefits.length">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">
                Benefits
              </h3>

              <ul class="space-y-2 text-gray-700">
                <li
                  v-for="(benefit, index) in props.benefits"
                  :key="index"
                  class="flex items-start gap-2"
                >
                  <span class="mt-1 h-2 w-2 rounded-full bg-muted"></span>
                  <span>{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <!-- Prices -->
            <div class="pt-4 border-t">
              <ul
                v-if="Array.isArray(props.prices)"
                class="space-y-2 text-gray-800 font-medium"
              >
                <li v-for="(item, index) in props.prices" :key="index">
                  {{ item }}
                </li>
              </ul>

              <p v-else class="text-gray-800 font-medium">
                {{ props.prices }}
              </p>
            </div>
          </div>
          <!-- Card Footer -->
          <div class="border-t px-6 py-4">
            <button
              type="button"

              class="w-full rounded-full px-5 py-3
                    bg-primary text-white font-medium
                    transition-all duration-300 ease-out
                    hover:opacity-95 hover:scale-105"
            >
              Get Help
            </button>
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
  subtitle: String,
  description: String,
  fullDescription: String,
  prices: [Array, String],
  benefits: {
    type: Array,
    default: () => []
  },
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
