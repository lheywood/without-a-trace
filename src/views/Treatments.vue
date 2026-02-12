<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h2 class="font-heading text-3xl mb-4">Treatments</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          A curated range of advanced skin and aesthetic treatments. Bespoke wedding packages are available upon request.
        </p>
      </div>

      <!-- Treatments Grid -->
      <div class="grid md:grid-cols-3 gap-8">

        <TreatmentCard
          slug="wrinkle-relaxants"
          :forceOpen="activeTreatment  === 'wrinkle-relaxants'"
          @modalClosed="clearTreatmentQuery"
          title="Wrinkle Relaxants"
          description="Wrinkle relaxant treatments soften the appearance..."
          :prices="['1 Area — £130', '2 Areas — £160', '3 Areas — £205', 'Lip Flip — £120']"
          :benefits="[
            'Softens fine lines and wrinkles',
            'Helps prevent deeper lines forming over time',
            'Maintains natural facial movement',
            'Quick treatment with minimal downtime',
            'Creates a refreshed, rested appearance'
          ]"
          from="£130"
          bg-class="bg-gradient-to-r from-purple-400 to-purple-600"
        />

        <!-- Dermal Fillers -->
        <TreatmentCard
          title="Polynucleotide"
          slug="polynucleotide"
          :forceOpen="activeTreatment  === 'polynucleotide'"
          description="Polynucleotide treatments support skin repair and rejuvenation, improving texture, hydration, and overall skin quality for a fresher, healthier look."
          subtitle="For face, under eye, neck and décolletage.",
          fullDescription="Polynucleotides are injectable skin-rejuvenation treatments designed to improve skin quality by supporting repair, hydration, and elasticity. Rather than adding volume, they work within the skin to promote a healthier skin environmenthelping to refine texture, improve radiance, and soften the look of fine lines. Treatments are tailored to your skin concerns and are commonly used for delicate areas such as the face, under-eyes, neck, and décolletage."
          :prices="['1 Session - £125', '2 Sessions - £240', '3 Session -£325']"
          :benefits="[
            'Improves skin texture, tone, and overall radiance',
            'Supports skin repair and strengthens the skin barrier',
            'Boosts hydration and enhances skin elasticity',
            'Softens the appearance of fine lines',
            'Suitable for delicate areas and natural-looking rejuvenation'
          ]"

          prices="From £140"
          
          from="£140"
          bg-class="bg-gradient-to-r from-pink-400 to-pink-600"
        />

        <!-- Microneedling -->
        <TreatmentCard
          title="Microneedling"
          slug="microneedling"
          description="Microneedling stimulates collagen production to improve skin texture, tone, and overall radiance."
          :forceOpen="activeTreatment  === 'microneedling'"
          fullDescription="Microneedling is a minimally invasive skin treatment that uses fine, medical-grade needles to create controlled micro-injuries in the skin. This process stimulates the body’s natural collagen and elastin production, helping to improve skin texture, firmness, and clarity. It is suitable for a range of skin concerns and can be tailored to your individual skin goals."
          :benefits="[
            'Improves skin texture and smoothness',
            'Enhances skin tone and overall radiance',
            'Reduces the appearance of fine lines and wrinkles',
            'Helps minimise pores, acne scarring, and pigmentation',
            'Stimulates natural collagen and elastin production'
          ]"
                    
          :prices="['1 session — £50', 'Block of 3 — £140']"
          from="£50"
          bg-class="bg-gradient-to-r from-green-400 to-green-600"
        />

        <!-- Skin Boosters -->
        <TreatmentCard
          title="Skin Boosters"
          slug="skinbootser"
          description="Skin boosters deeply hydrate and revitalise the skin, improving texture, elasticity, and overall glow from within."
          fullDescription="Skin boosters are injectable treatments designed to improve skin quality rather than alter facial shape. They work by delivering hydrating and skin-strengthening ingredients directly into the skin, helping to enhance elasticity, smoothness, and radiance. This treatment is ideal for dull, dehydrated, or ageing skin and is tailored to your individual skin needs."

          :benefits="[
            'Deeply hydrates and improves skin quality',
            'Enhances skin elasticity and firmness',
            'Smooths fine lines and crepey skin',
            'Restores a healthy, radiant glow',
            'Improves overall skin texture without adding volume'
          ]"
          :prices="['1 session — £115', '2 sessions — £210']"
          from="£115"
          bg-class="bg-gradient-to-r from-yellow-400 to-yellow-600"
        />

        <!-- Profhilo -->
        <TreatmentCard
          title="Profhilo"
          slug="profhilo"
          description="Profhilo is a unique injectable treatment that deeply hydrates the skin while improving firmness, elasticity, and overall skin quality."

          fullDescription="Profhilo is an advanced injectable treatment containing a high concentration of hyaluronic acid designed to improve skin quality rather than add volume. It works by stimulating collagen and elastin production while providing intense hydration, resulting in firmer, smoother, and more radiant skin. Profhilo is ideal for treating skin laxity and improving overall skin texture in a natural, subtle way."

          :benefits="[
            'Deeply hydrates and improves overall skin quality',
            'Stimulates collagen and elastin production',
            'Improves skin firmness and elasticity',
            'Smooths fine lines and crepey skin',
            'Enhances skin tone and radiance without adding volume'
          ]"
          :prices="['1 session — £150', '2 sessions — £240', '3 sessions — £300']"
          from="£150"
          bg-class="bg-gradient-to-r from-indigo-400 to-indigo-600"
        />

        <!-- Skin Peels -->
        <TreatmentCard
          title="Skin Peels"
          slug="skinpeel"
          description="Skin peels refresh and resurface the skin to improve tone, texture, and clarity for a brighter, smoother complexion."

          fullDescription="Skin peels are professional exfoliating treatments that use carefully selected acids to remove dead skin cells and stimulate cell renewal. They help improve a range of skin concerns including dullness, uneven tone, congestion, and fine lines. Treatments are tailored to your skin type and concerns to achieve safe, effective, and visible results."

          :benefits="[
            'Improves skin tone and overall brightness',
            'Enhances skin texture and smoothness',
            'Helps reduce congestion and breakouts',
            'Minimises the appearance of fine lines and pigmentation',
            'Promotes healthy skin renewal and clarity'
          ]"
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
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { ref, watch } from 'vue'

const props = defineProps({
  slug: { type: String, required: false },
  forceOpen: { type: Boolean, default: false },

  // your existing props:
  title: String,
  description: String,
  subtitle: String,
  fullDescription: String,
  prices: Array,
  benefits: Array,
  from: String,
  bgClass: String,
})

const emit = defineEmits(['modalClosed'])

const openModal = ref(false)

// when route query matches this card, open it
watch(
  () => props.forceOpen,
  (val) => {
    if (val) openModal.value = true
  },
  { immediate: true }
)

const closeModal = () => {
  openModal.value = false
  emit('modalClosed')
}

const route = useRoute()
const router = useRouter()

const activeTreatment = computed(() => String(route.query.treatment || ''))

const clearTreatmentQuery = () => {
  // remove just the `treatment` query param
  const q = { ...route.query }
  delete q.treatment
  router.replace({ query: q })
}

useHead({
  title: 'Aesthetic Treatments in Your City | Without A Trace Aesthetics',
  meta: [
    { name: 'description', content: 'Discover professional aesthetic treatments including wrinkle relaxants, dermal fillers, microneedling, skin boosters, Profhilo and chemical peels at Without A Trace Aesthetics.' },
    { name: 'keywords', content: 'aesthetic clinic, wrinkle relaxants, dermal fillers, microneedling, profhilo, skin boosters, chemical peels' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": { "@type": "MedicalBusiness", "name": "Without A Trace Aesthetics" },
        "serviceType": ["Wrinkle Relaxants", "Dermal Fillers", "Microneedling", "Skin Boosters", "Profhilo", "Skin Peels"]
      })
    }
  ]
})
</script>
