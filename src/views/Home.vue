<template>
  <main>
    <!-- HERO -->
    <section class="relative min-h-[90vh] flex items-center poiret-one-regular">
      <!-- Background image placeholder -->
      <div class="absolute inset-0 bg-primary">
        <!-- Replace with image later -->
        <div class="w-full h-full bg-primary"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto px-6">
        <div class="max-w-2xl">
          <h1 class="font-heading text-4xl md:text-5xl leading-tight text-gray-100 mb-6">
            Without A Trace Aesthetics <br />
            Tailored to You
          </h1>

          <p class="text-neutral-700 mb-8">
            Professional, results-driven treatments designed to enhance
            natural beauty and restore confidence.
          </p>

          <div class="flex gap-4">
              <RouterLink
                to="/about"
                class="px-6 py-3 rounded-full border border-gray-100 text-gray-100"
              >
                About
              </RouterLink>
            <RouterLink
              to="/treatments"
              class="px-6 py-3 rounded-full border border-gray-100 text-gray-100"
            >
              View Treatments
            </RouterLink>
            <RouterLink
              to="/gallery"
              class="px-6 py-3 rounded-full border border-gray-100 text-gray-100"
            >
              Gallery
            </RouterLink>

          </div>
        </div>
      </div>
    </section>

    <!-- TRUST / CREDENTIALS -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div class="h-16 w-16 mx-auto mb-4 bg-gray-200 rounded-full"></div>
          <h3 class="font-medium mb-2">Certified Practitioner</h3>
          <p class="text-sm text-gray-600">
            Fully qualified with industry-recognized certifications.
          </p>
        </div>

        <div>
          <div class="h-16 w-16 mx-auto mb-4 bg-gray-200 rounded-full"></div>
          <h3 class="font-medium mb-2">Personalised Care</h3>
          <p class="text-sm text-gray-600">
            Every treatment plan is tailored to your skin.
          </p>
        </div>

        <div>
          <div class="h-16 w-16 mx-auto mb-4 bg-gray-200 rounded-full"></div>
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
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="h-48 bg-gray-300"></div>
            <div class="p-6">
              <h3 class="font-medium mb-2">Facial Aesthetics</h3>
              <p class="text-sm text-gray-600">
                Subtle enhancements for natural results.
              </p>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="h-48 bg-gray-300"></div>
            <div class="p-6">
              <h3 class="font-medium mb-2">Skin Rejuvenation</h3>
              <p class="text-sm text-gray-600">
                Improve texture, tone, and radiance.
              </p>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="h-48 bg-gray-300"></div>
            <div class="p-6">
              <h3 class="font-medium mb-2">Advanced Treatments</h3>
              <p class="text-sm text-gray-600">
                Science-backed solutions for lasting results.
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <RouterLink
            to="/treatments"
            class="inline-block px-6 py-3 rounded-full border border-gray-300"
          >
            Explore All Treatments
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ABOUT TEASER -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div class="h-80 bg-gray-300 rounded-xl"></div>

        <div>
          <h2 class="font-heading text-3xl mb-4">Meet Your Practitioner</h2>
          <p class="text-gray-600 mb-6">
            With a commitment to safety, precision, and personalised care,
            every client journey begins with trust.
          </p>

          <RouterLink
            to="/about"
            class="inline-block px-6 py-3 rounded-full bg-[--color-primary] text-white"
          >
            Learn More
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gray-900 text-white text-center">
      <h2 class="font-heading text-3xl mb-4">
        Begin Your Skin Journey
      </h2>
      <p class="text-gray-300 mb-8">
        Book a consultation and take the first step towards confident skin.
      </p>

      <a
        href="#"
        class="inline-block px-8 py-4 rounded-full bg-white text-gray-900 font-medium"
      >
        Book Consultation
      </a>
    </section>
  </main>
</template>
