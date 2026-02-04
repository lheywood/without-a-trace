<template>
  <Navbar />
  
  <!-- Page content -->
  <router-view />

  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


import { useHead } from '@vueuse/head'

useHead({
  titleTemplate: '%s | Without A Trace Aesthetics',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Without A Trace Aesthetics",
        "url": "https://withoutatraceaesthetics.co.uk",
        "logo": "https://withoutatraceaesthetics.co.uk/logo.jpg",
        "description":
          "Professional aesthetic clinic offering wrinkle relaxants, dermal fillers, microneedling, skin boosters, Profhilo and chemical peels.",
        "telephone": "+447584674327",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "85 Wansbeck Road",
          "addressLocality": "Jarrow",
          "postalCode": "NE32 5SS",
          "addressCountry": "GB"
        },
        "sameAs": [
          "hhttps://www.instagram.com/withoutatraceaesthetics/",
          "https://www.facebook.com/profile.php?id=61576557208393"
        ],
        "priceRange": "££",
        "openingHours": "Mo-Sa 09:00-18:00",
        "areaServed": "United Kingdom"
      })
    }
  ]
})
</script>

