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
              <svg
                class="
                  fill-red-500
                  group-hover:fill-red-600
                  transition
                  duration-150
                  ease-in-out
                  w-8
                  h-8
                "
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m7.799 4.47.325.434a19.264 19.264 0 0 0 4.518 4.204l.27.175-.013.257a17.638 17.638 0 0 1-.437 2.867l-.144.564a18.082 18.082 0 0 1-2.889 5.977c2.272.245 4.492.88 6.5 1.886 1.601.788 3.062 1.798 4.344 2.972l.142.135-.017.232a17.034 17.034 0 0 0 1.227 7.504l-.724.323c-1.555-2.931-4.113-5.287-7.19-6.632-3.075-1.351-6.602-1.622-9.857-.844-.822.194-1.532.094-2.146-.183a3.138 3.138 0 0 1-1.29-1.146l-.076-.133-.078-.154-.085-.201a2.893 2.893 0 0 1-.095-1.694c.174-.624.55-1.2 1.239-1.67 2.734-1.85 4.883-4.537 5.944-7.68.704-2.076.925-4.32.633-6.545l-.101-.647Zm4.674-.284.16.2a15.87 15.87 0 0 0 5.629 4.322c3.752 1.76 8.363 2.075 12.488.665.419-.14.78-.044 1.002.158l.106.12.066.11.026.063c.125.33.024.751-.4.994-3.404 1.905-5.92 5.05-6.98 8.573a13.967 13.967 0 0 0 .727 10.055l.241.484-.724.323c-.913-2.227-2.326-4.302-4.12-6.05l-.28-.262.026-.305a16.667 16.667 0 0 1 1.121-4.652l.206-.488c1.05-2.443 2.676-4.59 4.664-6.293-3.064.442-6.273.17-9.243-.858a19.036 19.036 0 0 1-4.072-1.93l-.204-.132.017-.322a18.337 18.337 0 0 0-.415-4.605l-.04-.17ZM10.957 0a18.125 18.125 0 0 1 1.424 3.792l.092.394-.174-.219A14.803 14.803 0 0 1 10.235.322L10.957 0ZM7.046 1.746c.277.725.494 1.463.653 2.206l.1.519-.012-.016a17.99 17.99 0 0 1-1.203-1.891l-.262-.495.724-.323Z"
                />
              </svg>
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
            <a
              class="
                text-gray-500
                decoration-red-500 decoration-2
                underline-offset-2
                hover:underline
              "
              href="#0"
              >About</a
            >
            <a
              class="
                text-gray-500
                decoration-red-500 decoration-2
                underline-offset-2
                hover:underline
              "
              href="#0"
              >Get in touch</a
            >
            <a
              class="
                text-gray-500
                decoration-red-500 decoration-2
                underline-offset-2
                hover:underline
              "
              href="#0"
              >Privacy &amp; Terms</a
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
          <a
            class="
              font-medium
              text-red-500
              decoration-red-500
              underline-offset-2
              hover:underline
            "
            href="#0"
            >contact us</a
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