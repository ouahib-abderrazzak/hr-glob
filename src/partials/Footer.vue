<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-8 md:py-12">
        <!-- Top area -->
        <div
          class="
            flex flex-col
            sm:flex-row
            items-center
            justify-center
            sm:justify-between
            mb-12
            md:mb-6
          "
        >
          <div class="shrink-0 mr-4">
            <!-- Logo -->
            <router-link
              class="inline-flex group mb-8 sm:mb-0"
              to="/"
              aria-label="Cruip"
            >
              <img
                class="w-36"
                src="/hr-globe-logo.png"
                alt="HR Globe Company"
              />
            </router-link>
          </div>
        </div>

        <!-- Bottom area -->
        <div
          class="
            text-center
            md:flex md:items-center md:justify-between
            mb-8
            md:mb-6
          "
        >
          <!-- Social links -->
          <ul class="inline-flex mb-4 md:order-2 md:ml-4 md:mb-0">
            <li>
              <a
                class="
                  flex
                  justify-center
                  items-center
                  text-red-500
                  bg-red-100
                  hover:text-white hover:bg-red-500
                  rounded-full
                  transition
                  duration-150
                  ease-in-out
                "
                href="#0"
                aria-label="Twitter"
              >
                <svg
                  class="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                  />
                </svg>
              </a>
            </li>
            <li class="ml-4">
              <a
                class="
                  flex
                  justify-center
                  items-center
                  text-red-500
                  bg-red-100
                  hover:text-white hover:bg-red-500
                  rounded-full
                  transition
                  duration-150
                  ease-in-out
                "
                href="#0"
                aria-label="Github"
              >
                <svg
                  class="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
            </li>
            <li class="ml-4">
              <a
                class="
                  flex
                  justify-center
                  items-center
                  text-red-500
                  bg-red-100
                  hover:text-white hover:bg-red-500
                  rounded-full
                  transition
                  duration-150
                  ease-in-out
                "
                href="#0"
                aria-label="Telegram"
              >
                <svg
                  class="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <!-- Left links -->
          <div class="text-sm font-medium md:order-1 space-x-6 mb-2 md:mb-0">
            <router-link
              class="
                text-gray-500
                decoration-red-500 decoration-2
                underline-offset-2
                hover:underline
              "
              to="/about"
              >About</router-link
            >
            <router-link
              class="
                text-gray-500
                decoration-red-500 decoration-2
                underline-offset-2
                hover:underline
              "
              to="/services"
              >Services</router-link
            >
            <router-link
              class="
                text-gray-500
                decoration-red-500 decoration-2
                underline-offset-2
                hover:underline
              "
              to="/contact-us"
              >Contact Us</router-link
            >
          </div>
        </div>

        <!-- Bottom notes -->
        <div class="text-xs text-gray-400 text-center md:text-left">
          Some of our posts may contain affiliate links to partner brands. We
          earn a small commission if you click the link and make a purchase.
          There is no extra cost to you, so it's just a nice way to help support
          the site. All images, videos, and other content posted on the site is
          attributed to their creators and original sources. If you see
          something wrong here or you would like to have it removed, please
          <router-link
            class="
              font-medium
              text-red-500
              decoration-red-500
              underline-offset-2
              hover:underline
            "
            to="/contact-us"
            >contact us</router-link
          >.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>