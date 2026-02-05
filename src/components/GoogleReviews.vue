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
          <!-- Author & Profile Photo -->
          <div class="flex items-center mb-2 justify-center gap-2">
            <img
              v-if="review.profile_photo_url"
              :src="review.profile_photo_url"
              alt="Profile photo"
              class="w-10 h-10 rounded-full"
            />
            <p class="font-bold text-gray-800">{{ review.author_name }}</p>
          </div>

          <!-- Stars -->
          <div class="flex justify-center mb-2">
            <span
              v-for="i in Math.round(review.rating)"
              :key="i"
              class="text-yellow-400 text-lg"
            >★</span>
          </div>

          <!-- Review Text -->
          <p class="text-gray-700 text-sm mb-2">{{ review.text }}</p>

          <!-- Relative Time -->
          <p class="text-gray-400 text-xs mb-1">{{ review.relative_time_description }}</p>

          <!-- Link to Google Review -->
          <a
            v-if="review.author_url"
            :href="review.author_url"
            target="_blank"
            class="text-blue-500 text-xs hover:underline"
          >Read on Google</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const reviews = ref([])

// Fallback reviews for dev or if API fails
const fallbackReviews = [
  {
    author_name: 'Jane D.',
    rating: 5,
    text: 'Amazing clinic!',
    time: 1688000000,
    relative_time_description: '1 month ago',
    profile_photo_url: '',
    author_url: '#'
  }
]

onMounted(async () => {
  try {
    const res = await fetch('/api/reviews')
    const data = await res.json()

    if (Array.isArray(data) && data.length > 0) {
      reviews.value = data.slice(0, 5) // top 5 reviews
    } else {
      console.warn('No reviews returned, using fallback')
      reviews.value = fallbackReviews
    }
  } catch (err) {
    console.error('Failed to fetch reviews:', err)
    reviews.value = fallbackReviews
  }
})
</script>
