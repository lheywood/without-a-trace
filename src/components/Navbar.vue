<template>
  <nav class="sticky top-0 z-50 bg-primary/95 backdrop-blur shadow px-4 py-3">
    <div class="max-w-7xl mx-auto flex justify-between items-center text-gray-50">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <RouterLink to="/" class="flex items-center gap-3 hover:opacity-90 text-gray-50">
          <img
            :src="logo"
            alt="Without a Trace Aesthetics logo"
            class="h-30 w-30 rounded-full object-cover bg-white"
          />
          <span class="hidden sm:inline text-xl zalando-sans-expanded font-bold">
            Without a Trace Aesthetics
          </span>
        </RouterLink>
      </div>

      <!-- Desktop -->
      <div class="hidden md:flex items-center space-x-6">
        <RouterLink to="/about" class="hover:text-gray-500">About</RouterLink>
        <RouterLink to="/treatments" class="hover:text-gray-500">Treatments</RouterLink>

        <a
          href="https://www.facebook.com/profile.php?id=61576557208393"
          target="_blank"
          class="text-gray-50 hover:text-gray-500"
        >
          <i class="fa-brands fa-facebook text-lg"></i>
        </a>
        <a href="mailto:withoutatrace0405@gmail.com" class="text-gray-50 hover:text-gray-500">
          <i class="fa-solid fa-envelope text-lg"></i>
        </a>
        <a
          href="https://www.instagram.com/withoutatraceaesthetics"
          target="_blank"
          class="text-gray-50 hover:text-gray-500"
        >
          <i class="fa-brands fa-instagram text-lg"></i>
        </a>
      </div>

      <!-- Mobile Button -->
      <button class="md:hidden" type="button" @click="openDrawer" aria-label="Open menu">
        <i class="fa-solid fa-bars text-xl"></i>
      </button>
    </div>

    <!-- Mobile Drawer (teleported to body so it overlays properly) -->
    <teleport to="body">
      <!-- Backdrop -->
      <transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="mobileOpen"
          class="fixed inset-0 z-[60] bg-black/40"
          @click="closeDrawer"
          aria-hidden="true"
        />
      </transition>

      <!-- Drawer panel -->
      <transition
        enter-active-class="transition-transform duration-200 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-150 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <aside
          v-if="mobileOpen"
          class="fixed right-0 top-0 z-[70] h-dvh w-[85%] max-w-sm bg-primary text-gray-50 shadow-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div class="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <span class="font-bold zalando-sans-expanded">Menu</span>
            <button type="button" class="p-2" @click="closeDrawer" aria-label="Close menu">
              <i class="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <nav class="px-4 py-4 space-y-2">
            <RouterLink
              to="/treatments"
              class="block rounded-lg px-3 py-3 transition hover:bg-white/10"
              @click="closeDrawer"
            >
              Treatments
            </RouterLink>

            <RouterLink
              to="/about"
              class="block rounded-lg px-3 py-3 transition hover:bg-white/10"
              @click="closeDrawer"
            >
              About
            </RouterLink>

            <div class="pt-4 mt-4 border-t border-white/10 flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576557208393"
                target="_blank"
                class="hover:text-gray-300"
                aria-label="Facebook"
              >
                <i class="fa-brands fa-facebook text-lg"></i>
              </a>
              <a
                href="mailto:withoutatrace0405@gmail.com"
                class="hover:text-gray-300"
                aria-label="Email"
              >
                <i class="fa-solid fa-envelope text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/withoutatraceaesthetics"
                target="_blank"
                class="hover:text-gray-300"
                aria-label="Instagram"
              >
                <i class="fa-brands fa-instagram text-lg"></i>
              </a>
            </div>
          </nav>
        </aside>
      </transition>
    </teleport>
  </nav>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from "vue"
import { useRoute } from "vue-router"
import logo from "../assets/logo_nobackground.png"

const mobileOpen = ref(false)
const route = useRoute()

function openDrawer() {
  mobileOpen.value = true
}
function closeDrawer() {
  mobileOpen.value = false
}

function onKeydown(e) {
  if (e.key === "Escape") closeDrawer()
}

// Close on route change (keeps your behaviour)
watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
  }
)

// Lock body scroll + Esc listener
watch(mobileOpen, (openNow) => {
  document.body.style.overflow = openNow ? "hidden" : ""
  if (openNow) window.addEventListener("keydown", onKeydown)
  else window.removeEventListener("keydown", onKeydown)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ""
  window.removeEventListener("keydown", onKeydown)
})
</script>
