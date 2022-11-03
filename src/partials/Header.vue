<template>
  <div>
    <header class="absolute w-full z-30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Site branding -->
          <div class="shrink-0 mr-4">
            <!-- Logo -->
            <router-link class="block group" to="/" aria-label="Cruip">
              <img
                class="w-36"
                src="/hr-globe-logo.png"
                alt="HR Globe Company"
              />
            </router-link>
          </div>

          <!-- Desktop navigation -->
          <nav class="flex grow">
            <!-- Desktop sign in links -->
            <ul class="flex grow justify-end flex-wrap items-center">
              <li
                class="
                  px-4
                  py-3
                  text-gray-800
                  decoration-red-500 decoration-2
                  underline-offset-2
                  hover:underline
                  rounded-md
                  cursor-pointer
                  hidden
                  md:block
                "
                v-for="(item, index) in [
                  { name: 'Services', link: '/services' },
                  { name: 'About Us', link: '/about' },
                  { name: 'Contact Us', link: '/contact-us' },
                ]"
                :key="index"
              >
                <router-link
                  class="block group"
                  :to="item.link"
                  aria-label="Cruip"
                >
                  {{ item.name }}
                </router-link>
              </li>
              <li class="ml-3">
                <a
                  class="
                    btn
                    text-white
                    bg-hr-globe-color
                    hover:bg-red-600
                    w-full
                    shadow-sm
                    hidden
                    md:block
                  "
                  href="#contact-us"
                  >Apply Now</a
                >
              </li>
              <li>
                <BurgerIcon
                  class="md:hidden"
                  @click.native="toggleNavbar"
                  :open="!hidden"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div class="absolute left-0 right-0 bg-red-100 mt-16 z-20" v-if="!hidden">
      <ul class="py-4 px-5 space-y-2">
        <li
          class="
            px-4
            py-3
            text-gray-800
            hover:text-hr-globe-color
            rounded-md
            cursor-pointer
          "
          v-for="(item, index) in [
            { name: 'Services', link: '/services' },
            { name: 'About Us', link: '/about' },
            { name: 'Contact Us', link: '/contact-us' },
          ]"
          :key="index"
        >
          <router-link class="block group" :to="item.link" aria-label="Cruip">
            {{ item.name }}
          </router-link>
        </li>
        <li>
          <a
            class="
              btn
              text-white
              bg-hr-globe-color
              hover:bg-red-600
              w-full
              shadow-sm
            "
            href="#contact-us"
            >Apply Now</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BurgerIcon from "./BurgerIcon.vue";
export default {
  name: "Header",
  components: {
    BurgerIcon,
  },
  data() {
    return {
      hidden: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.hidden = !this.hidden;
    },
    goto(url) {
      window.open(url, "_blank");
    },
  },
};
</script>