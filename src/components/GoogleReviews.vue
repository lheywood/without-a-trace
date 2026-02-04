<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="font-heading text-3xl mb-8">What Our Clients Say</h2>

      <!-- Loading -->
      <div v-if="loading" class="text-gray-500">Loading reviews...</div>

      <!-- Reviews Grid -->
      <div v-else class="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer"
        >
          <!-- Author & Stars -->
          <div class="flex items-center mb-2 justify-center">
            <p class="font-bold mr-2">{{ review.author_name }}</p>
            <div class="flex">
              <span
                v-for="i in Math.round(review.rating)"
                :key="i"
                class="text-yellow-400 text-lg"
              >★</span>
            </div>
          </div>

          <!-- Review Text -->
          <p class="text-gray-700 text-sm mb-2">{{ review.text }}</p>

          <!-- Date -->
          <p class="text-gray-400 text-xs">{{ formatDate(review.time) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive variables
const reviews = ref([])
const loading = ref(true)

// Helper to format timestamp
const formatDate = (timestamp) => {
  if (!timestamp) return ''
  return new Date(timestamp * 1000).toLocaleDateString()
}

// Fallback reviews if API fails
const fallbackReviews = [
  { author_name: 'Jane D.', rating: 5, text: 'Amazing clinic!', time: 1688000000 },
  { author_name: 'John S.', rating: 4, text: 'Professional staff.', time: 1687500000 },
  { author_name: 'Emily R.', rating: 5, text: 'Highly recommend!', time: 1687000000 },
]

// Load reviews from serverless function
onMounted(async () => {
  loading.value = true

  // Use environment variables to check if production API is available
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
  const PLACE_ID = import.meta.env.VITE_PLACE_ID

  if (!API_KEY || !PLACE_ID) {
    reviews.value = fallbackReviews
    loading.value = false
    return
  }

  try {
    const res = await fetch('/api/reviews')
    const data = await res.json()

    if (Array.isArray(data) && data.length > 0) {
      reviews.value = data.slice(0, Math.min(data.length, 5)) // top 5 reviews
    } else {
      console.warn('No reviews found, using fallback')
      reviews.value = fallbackReviews
    }
  } catch (err) {
    console.error('Failed to fetch reviews:', err)
    reviews.value = fallbackReviews
  } finally {
    loading.value = false
  }
})
</script>
