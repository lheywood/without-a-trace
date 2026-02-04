<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h2 class="font-heading text-3xl mb-4">Treatments</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          A curated range of advanced skin and aesthetic treatments.
        </p>
      </div>

      <!-- Treatments Grid -->
      <div class="grid md:grid-cols-3 gap-8">

        <!-- Wrinkle Relaxants -->
        <TreatmentCard
          title="Wrinkle Relaxants"
          description="Smooth fine lines and wrinkles by relaxing targeted facial muscles."
          full-description="Wrinkle relaxants are used to treat fine lines, dynamic wrinkles, and crow's feet. Wrinkle relaxants are used to treat fine lines, dynamic wrinkles, and crow's feet. Wrinkle relaxants are used to treat fine lines, dynamic wrinkles, and crow's feet. Wrinkle relaxants are used to treat fine lines, dynamic wrinkles, and crow's feet. Wrinkle relaxants are used to treat fine lines, dynamic wrinkles, and crow's feet. Wrinkle relaxants are used to treat fine lines, dynamic wrinkles, and crow's feet. Wrinkle relaxants are used to treat fine lines, dynamic wrinkles, and crow's feet. Wrinkle relaxants are used to treat fine lines, dynamic wrinkles, and crow's feet. Wrinkle relaxants are used to treat fine lines, dynamic wrinkles, and crow's feet. Wrinkle relaxants are used to treat fine lines, dynamic wrinkles, and crow's feet. Wrinkle relaxants are used to treat fine lines, dynamic wrinkles, and crow's feet. Treatments are tailored to each facial area to achieve natural-looking results, preserving facial expression while reducing visible signs of aging."
          :prices="['1 Area — £120', '2 Areas — £150', '3 Areas — £195', 'Lip Flip — £50']"
          from="£50"
          bg-class="bg-gradient-to-r from-purple-400 to-purple-600"
        />

        <!-- Dermal Fillers -->
        <TreatmentCard
          title="Dermal Fillers"
          description="Restore facial volume and enhance contours."
          full-description="Dermal fillers are a minimally invasive treatment used to restore volume, enhance facial contours, and smooth out wrinkles. From subtle lip enhancements to cheek and jawline rejuvenation, results are natural and long-lasting."
          prices="From £140"
          from="£140"
          bg-class="bg-gradient-to-r from-pink-400 to-pink-600"
        />

        <!-- Microneedling -->
        <TreatmentCard
          title="Microneedling"
          description="Improve skin texture, tone, and radiance."
          full-description="Microneedling stimulates collagen production by creating micro-injuries in the skin. It improves skin texture, reduces fine lines, minimizes scars, and enhances overall radiance."
          :prices="['1 session — £40', 'Block of 3 — £115']"
          from="£40"
          bg-class="bg-gradient-to-r from-green-400 to-green-600"
        />

        <!-- Skin Boosters -->
        <TreatmentCard
          title="Skin Boosters"
          description="Deeply hydrate and rejuvenate the skin."
          full-description="Skin boosters deliver hyaluronic acid into the skin to improve hydration, elasticity, and overall glow. Ideal for dull or dehydrated skin, results are natural and cumulative with repeated sessions."
          :prices="['1 session — £115', '2 sessions — £210']"
          from="£115"
          bg-class="bg-gradient-to-r from-yellow-400 to-yellow-600"
        />

        <!-- Profhilo -->
        <TreatmentCard
          title="Profhilo"
          description="Hydrate and tighten the skin for a lifted look."
          full-description="Profhilo is an advanced anti-aging treatment that uses stabilized hyaluronic acid to hydrate, lift, and tighten the skin. It improves elasticity and gives a smoother, rejuvenated appearance over multiple sessions."
          :prices="['1 session — £160', '2 sessions — £250', '3 sessions — £320']"
          from="£160"
          bg-class="bg-gradient-to-r from-indigo-400 to-indigo-600"
        />

        <!-- Skin Peels -->
        <TreatmentCard
          title="Skin Peels"
          description="Exfoliate and renew skin for a brighter complexion."
          full-description="Skin peels remove dead skin cells, promote cell renewal, and improve skin texture. They help reduce pigmentation, blemishes, and uneven tone, leaving skin refreshed and radiant."
          :prices="['1 session — £50', 'Course of 3 — £135']"
          from="£50"
          bg-class="bg-gradient-to-r from-red-400 to-red-600"
        />

      </div>
    </div>
  </section>
</template>

<script setup>
import TreatmentCard from '../components/TreatmentCard.vue'
import { useHead } from '@vueuse/head'


useHead({
  title: 'Aesthetic Treatments in Your City | Without A Trace Aesthetics',
  meta: [
    {
      name: 'description',
      content:
        'Discover professional aesthetic treatments including wrinkle relaxants, dermal fillers, microneedling, skin boosters, Profhilo and chemical peels at Without A Trace Aesthetics.'
    },
    {
      name: 'keywords',
      content:
        'aesthetic clinic, wrinkle relaxants, dermal fillers, microneedling, profhilo, skin boosters, chemical peels'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Without A Trace Aesthetics"
        },
        "serviceType": [
          "Wrinkle Relaxants",
          "Dermal Fillers",
          "Microneedling",
          "Skin Boosters",
          "Profhilo",
          "Skin Peels"
        ]
      })
    }
  ]
})

</script>
