<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link class="block group" to="/" aria-label="Cruip">
            <img class="w-36" src="/hr-globe-logo.png" alt="HR Globe Company" />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="flex grow">
          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li class="ml-3">
              <a
                class="
                  btn
                  text-white
                  bg-red-500
                  hover:bg-red-600
                  w-full
                  shadow-sm
                "
                href="#contact-us"
                >Contact Us</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>