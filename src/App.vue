<template>
  <div class="zalando-sans-expanded">
    <Analytics />
    <Navbar />

    <!-- Page content -->
    <router-view />

    <Footer />`
  </div>
  <!-- Contact Us Pill -->
  <button
    type="button"
    class="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full px-5 py-3 bg-primary/95 text-gray-50 shadow-lg ring-1 ring-black/5 backdrop-blur transition-all duration-300 ease-out hover:scale-105 hover:opacity-75 active:scale-100"
    aria-label="Contact Us"
    data-openwidget-action="maximize"
    data-openwidget-feature="form-contact"
  >
    <span
      class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20"
    >
      <!-- Chat icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5 text-white"
      >
        <path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.5-4.5A8 8 0 1 1 21 12z" />
      </svg>
    </span>

    <span class="font-medium">Contact Us</span>
  </button>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/vue';
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

import { useHead } from "@vueuse/head";
const openWidget = () => {
  OpenWidget.call("maximize", { feature: "form-contact" });
};
useHead({
  titleTemplate: "%s | Without A Trace Aesthetics",
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "description",
      content:
        "Without a Trace Aesthetics offers professional, results-driven aesthetic treatments including wrinkle relaxants, dermal fillers, and advanced skin rejuvenation, tailored to you.",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AestheticClinic",
        name: "Without A Trace Aesthetics",
        url: "https://withoutatraceaesthetics.co.uk",
        logo: "https://withoutatraceaesthetics.co.uk/logo.jpg",
        description:
          "Professional aesthetic clinic offering wrinkle relaxants, dermal fillers, microneedling, skin boosters, Profhilo and chemical peels.",
        telephone: "+447584674327",
        address: {
          "@type": "PostalAddress",
          streetAddress: "85 Wansbeck Road",
          addressLocality: "Jarrow",
          postalCode: "NE32 5SS",
          addressCountry: "GB",
        },
        sameAs: [
          "hhttps://www.instagram.com/withoutatraceaesthetics/",
          "https://www.facebook.com/profile.php?id=61576557208393",
        ],
        priceRange: "££",
        openingHours: "Mo-Sa 09:00-18:00",
        areaServed: "United Kingdom",
      }),
    },
  ],
});
</script>
