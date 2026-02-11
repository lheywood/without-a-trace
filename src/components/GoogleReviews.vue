<template>
  <section class="py-20 bg-gray-50 overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="font-heading text-3xl mb-8">What Our Clients Say</h2>

      <!-- ✅ LARGE SCREENS: original grid -->
      <div class="hidden lg:grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(review, index) in reviews"
          :key="'grid-' + index"
          class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <div class="flex items-center mb-2 justify-center gap-2">
            <img
              v-if="review.profile_photo_url"
              :src="review.profile_photo_url"
              alt="Profile photo"
              class="w-10 h-10 rounded-full"
            />
            <p class="font-bold text-gray-800">{{ review.author_name }}</p>
          </div>

          <div class="flex justify-center mb-2">
            <span
              v-for="i in Math.round(review.rating)"
              :key="'grid-star-' + index + '-' + i"
              class="text-yellow-400 text-lg"
            >★</span>
          </div>

          <p class="text-gray-700 text-sm mb-2">{{ review.text }}</p>

          <p class="text-gray-400 text-xs mb-1">{{ review.relative_time_description }}</p>

          <a
            v-if="review.author_url"
            :href="review.author_url"
            target="_blank"
            class="text-blue-500 text-xs hover:underline"
          >Read on Google</a>
        </div>
      </div>

      <!-- ✅ MOBILE + TABLET: carousel -->
      <div class="lg:hidden relative">
        <!-- Track -->
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          @touchstart="handleTouchStart"
          @mouseenter="stopAutoPlay"
          @mouseleave="startAutoPlay"
          @touchend="handleTouchEnd"
        >
          <div
            v-for="(review, index) in reviews"
            :key="'slide-' + index"
            class="min-w-full px-2"
          >
            <div class="bg-white p-6 rounded-xl shadow">
              <div class="flex items-center mb-2 justify-center gap-2">
                <img
                  v-if="review.profile_photo_url"
                  :src="review.profile_photo_url"
                  alt="Profile photo"
                  class="w-10 h-10 rounded-full"
                />
                <p class="font-bold text-gray-800">{{ review.author_name }}</p>
              </div>

              <div class="flex justify-center mb-2">
                <span
                  v-for="i in Math.round(review.rating)"
                  :key="'slide-star-' + index + '-' + i"
                  class="text-yellow-400 text-lg"
                >★</span>
              </div>

              <p class="text-gray-700 text-sm mb-2">{{ review.text }}</p>

              <p class="text-gray-400 text-xs mb-1">{{ review.relative_time_description }}</p>

              <a
                v-if="review.author_url"
                :href="review.author_url"
                target="_blank"
                class="text-blue-500 text-xs hover:underline"
              >Read on Google</a>
            </div>
          </div>
        </div>

        <!-- Arrows -->
        <button
          type="button"
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          aria-label="Previous review"
        >
          ‹
        </button>

        <button
          type="button"
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          aria-label="Next review"
        >
          ›
        </button>

        <!-- Dots -->
        <div class="flex justify-center mt-6 gap-2">
          <button
            v-for="(_, i) in reviews"
            :key="'dot-' + i"
            type="button"
            @click="goToSlide(i)"
            class="w-2.5 h-2.5 rounded-full transition"
            :class="i === currentIndex ? 'bg-gray-800' : 'bg-gray-300'"
            :aria-label="`Go to review ${i + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const reviews = ref([])
const currentIndex = ref(0)

let interval = null
let touchStartX = 0
let isLargeScreen = false

const fallbackReviews = [
  {
    author_name: "Jane D.",
    rating: 5,
    text: "Amazing clinic!",
    relative_time_description: "1 month ago",
    profile_photo_url: "",
    author_url: "#",
  },
]

function nextSlide() {
  if (!reviews.value.length) return
  currentIndex.value =
    (currentIndex.value + 1) % reviews.value.length
}

function prevSlide() {
  if (!reviews.value.length) return
  currentIndex.value =
    (currentIndex.value - 1 + reviews.value.length) %
    reviews.value.length
}

function goToSlide(i) {
  currentIndex.value = i
  restartAutoPlay()
}

function startAutoPlay() {
  if (isLargeScreen || interval) return
  interval = setInterval(nextSlide, 5000)
}

function stopAutoPlay() {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
}

function restartAutoPlay() {
  stopAutoPlay()
  startAutoPlay()
}

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].clientX
  stopAutoPlay()
}

function handleTouchEnd(e) {
  const diff = e.changedTouches[0].clientX - touchStartX
  if (diff > 50) prevSlide()
  if (diff < -50) nextSlide()
  restartAutoPlay()
}

function checkScreenSize() {
  isLargeScreen = window.innerWidth >= 1024 // Tailwind lg breakpoint
  if (isLargeScreen) stopAutoPlay()
  else startAutoPlay()
}

onMounted(async () => {
  try {
    const res = await fetch("/api/reviews")
    const data = await res.json()

    reviews.value =
      Array.isArray(data) && data.length
        ? data.slice(0, 9)
        : fallbackReviews
  } catch {
    reviews.value = fallbackReviews
  }

  checkScreenSize()
  window.addEventListener("resize", checkScreenSize)
})

onBeforeUnmount(() => {
  stopAutoPlay()
  window.removeEventListener("resize", checkScreenSize)
})

</script>
