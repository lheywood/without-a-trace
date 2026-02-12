<template>
  <main>
    <!-- HERO -->
    <section class="relative min-h-[90vh] flex items-center">
      <!-- Background image placeholder -->
      <div class="absolute inset-0 bg-white">
        <!-- Replace with image later -->
        <div class="w-full h-full bg-white"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto px-6">
        <div class="max-w-2xl">
          <h1
            class="font-heading text-4xl md:text-4xl leading-tight text-black mb-6 zalando-sans-expanded"
          >
            Without A Trace Aesthetics <br />
            Tailored to You
          </h1>

          <p class="text-neutral-700 mb-8 zalando-sans-expanded">
            Professional, results-driven treatments designed to enhance natural
            beauty and restore confidence.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <RouterLink
              to="/about"
              class="px-6 py-3 rounded-full border bg-primary border-gray-100 text-white text-center hover:scale-105 hover:opacity-75"
            >
              About
            </RouterLink>

            <RouterLink
              to="/treatments"
              class="px-6 py-3 rounded-full border bg-primary border-gray-100 text-white text-center hover:scale-105 hover:opacity-75"
            >
              View Treatments
            </RouterLink>

            
          </div>
        </div>
      </div>
    </section>
    <!-- ABOUT TEASER -->
    <section class="py-20 bg-gray-100">
      <div
        class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
      >
        <div class="h-80 flex items-center justify-center">
          <img
            :src="traceyPowell"
            alt="Portrait of Tracey Powell"
            class="w-60 md:w-80 object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 class="font-heading text-3xl mb-4">Meet Your Practitioner</h2>
          <p class="text-gray-600 mb-6">
            With a commitment to safety, precision, and personalised care, every
            client journey begins with trust.
          </p>

          <RouterLink
            to="/about"
            class="inline-block px-6 py-3 rounded-full bg-primary text-white"
          >
            Learn More
          </RouterLink>
        </div>
      </div>
    </section>
    <GoogleReviews />
    <!-- TRUST / CREDENTIALS -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div
            class="h-16 w-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7 text-gray-700"
            >
              <!-- plunger top -->
              <path d="M9 3h6" />
              <path d="M12 3v4" />

              <!-- barrel -->
              <rect x="9" y="7" width="6" height="9" rx="1" />

              <!-- needle (perfectly vertical) -->
              <path d="M12 16v6" />
            </svg>
          </div>

          <h3 class="font-medium mb-2">Certified Practitioner</h3>
          <p class="text-sm text-gray-600">
            Fully qualified with industry-recognized certifications.
          </p>
        </div>

        <div>
          <div>
            <!-- Icon -->
            <div
              class="h-16 w-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="h-7 w-7 text-gray-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 9l4.5-5h9L21 9l-9 11-9-11z"
                />
              </svg>
            </div>

            <h3 class="font-medium mb-2">Wedding Packages</h3>
            <p class="text-sm text-gray-600">
              Bespoke packages designed to enhance your natural beauty for your
              special day.
            </p>
          </div>
        </div>

        <div>
          <div
            class="h-16 w-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-7 w-7 text-gray-700"
            >
              <path d="M5 12l4 4L19 6" />
            </svg>
          </div>

          <h3 class="font-medium mb-2">Results-Focused</h3>
          <p class="text-sm text-gray-600">
            Natural, refined outcomes with proven techniques.
          </p>
        </div>
      </div>
    </section>

    <!-- TREATMENTS PREVIEW -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="font-heading text-3xl mb-4">Treatments</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            A curated range of advanced skin and aesthetic treatments.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Wrinkle Relaxants -->
          <button
            type="button"
            @click="goTreatment('wrinkle-relaxants')"
            class="text-left bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <div class="h-48 overflow-hidden rounded-t-xl">
              <img :src="wr" alt="Wrinkle Relaxant" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="font-medium mb-2">Wrinkle Relaxants</h3>
              <p class="text-sm text-gray-600">Subtle enhancements for natural results.</p>
            </div>
          </button>

          <!-- Polynucleotides -->
          <button
            type="button"
            @click="goTreatment('polynucleotide')"
            class="text-left bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <div class="h-48 overflow-hidden rounded-t-xl flex items-center justify-center">
              <img :src="pol" alt="" class="w-auto h-full" />
            </div>
            <div class="p-6">
              <h3 class="font-medium mb-2">Polynucleotides</h3>
              <p class="text-sm text-gray-600">
                Skin-repair treatment improving texture, hydration, and radiance
              </p>
            </div>
          </button>

          <!-- Microneedling -->
          <button
            type="button"
            @click="goTreatment('microneedling')"
            class="text-left bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <div class="h-48 overflow-hidden rounded-t-xl flex items-center justify-center">
              <img :src="mic" alt="Treatment image" class="w-auto h-full scale-90" />
            </div>
            <div class="p-6">
              <h3 class="font-medium mb-2">Microneedling</h3>
              <p class="text-sm text-gray-600">Improve texture, tone, and overall skin radiance.</p>
            </div>
          </button>
        </div>

        <div class="text-center mt-12">
          <RouterLink
            to="/treatments"
            class="inline-block px-6 py-3 rounded-full border border-gray-300 transition-all duration-300 ease-out hover:scale-105 hover:bg-primary hover:text-white hover:border-primary"
          >
            Explore All Treatments
          </RouterLink>
        </div>
      </div>
    </section>
    <!-- CTA -->
    <section class="py-20 bg-primary text-white text-center">
      <h2 class="font-heading text-3xl mb-4">Begin Your Skin Journey</h2>
      <p class="mb-8">
        Book a consultation and take the first step towards confident skin.
      </p>

      <button
        class="inline-block px-8 py-4 rounded-full bg-white text-gray-900 font-medium transition-transform hover:scale-105"
        data-openwidget-action="maximize"
        data-openwidget-feature="form-contact"
      >
        Book Consultation
      </button>
    </section>
  </main>
</template>

<script setup>
import GoogleReviews from "../components/GoogleReviews.vue";
import traceyPowell from "../assets/traceypowell.png";
import mic from "../assets/microneedlingpen.png";
import pol from "../assets/polynucleotides.png";
import wr from "../assets/wrinklerelaxant.jpg";
import { useRouter } from 'vue-router'

const router = useRouter()

const goTreatment = (slug) => {
  router.push({ path: '/treatments', query: { treatment: slug } })
}

</script>
