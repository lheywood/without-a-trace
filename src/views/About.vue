<template>
  <main class="max-w-4xl mx-auto px-6 py-16">
    <!-- Profile Image -->
    <section class="flex justify-center mb-10">
      <img
  :src="traceyPowell"
  alt="Portrait of Tracey Powell"
  class="w-60 md:w-60 aspect-square rounded-full object-cover object-[70%_50%] shadow-lg border-4 border-white"
/>


    </section>

    <!-- Heading -->
    <section class="text-center mb-12">
      <h1 class=" text-xl md:text-4xl mb-4 text-gray-900">
        Tracey Powell 
      </h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        👩🏻‍⚕️ Midwife 🩺 25+ yrs experience
      </p>
    </section>

    <!-- Content -->
    <section class="space-y-8 text-gray-700 leading-relaxed">
      <p>
        I’m a passionate practitioner with a focus on helping clients feel
        confident, balanced, and well cared for. My work is grounded in both
        experience and continual learning.
      </p>

      <p>
        Over the years, I’ve developed a personalized approach that combines
        proven techniques with thoughtful, client-centered care. Every
        treatment is tailored to individual needs.
      </p>

      <p>
        When I’m not working with clients, I enjoy spending time with my grandson Charlie,
        walking my dog Rocco, and chit chatting with my daughter.
      </p>
    </section>
  </main>
</template>
<script setup>
import traceyPowell from '../assets/traceypowell.png'
</script>

