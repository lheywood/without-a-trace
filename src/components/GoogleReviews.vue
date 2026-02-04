<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="font-heading text-3xl mb-8">What Our Clients Say</h2>

      <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
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
          <p class="text-gray-400 text-xs">
            {{ formatDate(review.time) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const reviews = ref([])

// Load from environment variables
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
const PLACE_ID = import.meta.env.VITE_PLACE_ID

// Helper to format timestamp
const formatDate = (timestamp) => {
  if (!timestamp) return ''
  // Google API returns Unix timestamp in seconds
  return new Date(timestamp * 1000).toLocaleDateString()
}

onMounted(async () => {
  if (!API_KEY || !PLACE_ID) {
    // Fallback mock reviews during development
    reviews.value = [
      { author_name: 'Jane D.', rating: 5, text: 'Amazing clinic!', time: 1688000000 },
      { author_name: 'John S.', rating: 4, text: 'Professional staff.', time: 1687500000 },
      { author_name: 'Emily R.', rating: 5, text: 'Highly recommend!', time: 1687000000 },
    ]
    return
  }

  try {
    // Use a CORS proxy during development if needed
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const url = `${proxy}https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
    const res = await fetch(url)
    const data = await res.json()

    if (data.result?.reviews) {
      reviews.value = data.result.reviews.slice(0, 5) // top 3 reviews
    } else {
      console.warn('No reviews found, using fallback')
      reviews.value = [
        { author_name: 'Jane D.', rating: 5, text: 'Amazing clinic!', time: 1688000000 },
      ]
    }
  } catch (err) {
    console.error('Failed to fetch reviews:', err)
    reviews.value = [
      { author_name: 'Jane D.', rating: 5, text: 'Amazing clinic!', time: 1688000000 },
    ]
  }
})
</script>
