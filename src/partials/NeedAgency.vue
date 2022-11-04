<template>
  <section class="bg-gray-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-4 md:pb-8">
          <h2
            data-aos="fade-right"
            data-aos-delay="200"
            class="h2 font-cabinet-grotesk text-gray-100"
          >
            Need a Recruitment Agency to Work With? Choose HR Globe Now!
          </h2>
        </div>
        <img
          data-aos="fade-right"
          data-aos-delay="200"
          src="../images/images-meeting-rrom.jpg"
          class="mx-auto w-1/2 pb-4 md:pb-8"
        />
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          class="text-gray-200 text-center w-9/12 mx-auto"
        >
          Hiring international talents in Canada doesn’t have to be a
          challenging task. Count on us at HR Globe to give you and your foreign
          talents the tools and information you need to make the process easy
          and seamless while helping you fill labor shortages and benefiting
          from the diverse team and culture.
        </p>
        <br />
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          class="text-gray-200 text-center w-9/12 mx-auto"
        >
          Save time, source highly qualified talents, and fill your vacancies in
          Canada with HR Globe. Contact our team today! Let’s work together to
          help your business achieve its ultimate goals and objectives.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper
import Swiper, { Navigation } from "swiper";
import "swiper/css";
Swiper.use([Navigation]);

export default {
  name: "Carousel",
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper(".carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  },
};
</script>