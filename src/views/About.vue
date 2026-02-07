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
        👩🏻‍⚕️ Midwife 🩺 20+ yrs experience
      </p>
    </section>

    <!-- Content -->
    <section class="space-y-8 text-gray-700 leading-relaxed">
      <p>
        I have been a Midwife for over 20 years and have always been fully committed to helping people feel their best while supporting them to make safe, 
        well-informed choices about their care.

      </p>
      <p>
        Throughout my midwifery career, I have worked in a variety of roles including Senior Midwife, Practice Development Midwife, hospital-based practice and community care. 
        I have worked in several hospitals and gained a wide range of experience caring for women and families. 
        I am passionate about keeping my knowledge and skills up to date through regular training, study and professional development.
      </p>
      <p>
        My move into the aesthetics industry felt like a natural step. I have always had a strong interest in skin health, especially as someone who has personally struggled with sensitive skin for most of my life. This allows me to genuinely understand how skin concerns can affect confidence and wellbeing. I am committed to using premium, evidence-based products and treatments to achieve natural, safe and effective results.
        </p>
      <p>
        I pride myself on being approachable, friendly and honest, ensuring every client feels comfortable, listened to and fully informed before choosing treatment.
      </p>
      <p>
        Outside of work, I love socialising, spending time with my family and keeping active. I enjoy walking (especially with my dog), swimming, and attending pump and spin classes when I can. I have also recently become a Nana, and I am looking forward to spending lots of my spare time with gorgeous little Charlie.
      </p>

      
    </section>
  </main>
</template>
<script setup>
import traceyPowell from '../assets/traceypowell.png'
</script>

