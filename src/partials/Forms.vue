<template>
  <section class="relative border-t border-gray-100" id="contact-us">
    <!-- Bg gradient -->
    <div
      class="
        absolute
        top-0
        left-0
        right-0
        bg-gradient-to-b
        from-gray-50
        to-white
        h-1/2
        pointer-events-none
        -z-10
      "
      aria-hidden="true"
    ></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 class="h2 font-cabinet-grotesk">Join HR Globe Now!</h2>
        </div>

        <!-- Pricing tables -->
        <div>
          <!-- Pricing toggle -->
          <div class="flex justify-center max-w-[18rem] m-auto mb-8 lg:mb-16">
            <div class="relative flex w-full mx-6 p-1 bg-gray-200 rounded-full">
              <span
                class="absolute inset-0 m-1 pointer-events-none"
                aria-hidden="true"
              >
                <span
                  class="
                    absolute
                    inset-0
                    w-1/2
                    bg-white
                    rounded-full
                    shadow
                    transform
                    transition
                    duration-150
                    ease-in-out
                  "
                  :class="formType ? 'translate-x-0' : 'translate-x-full'"
                ></span>
              </span>
              <button
                class="
                  relative
                  flex-1
                  text-sm
                  font-medium
                  p-1
                  transition
                  duration-150
                  ease-in-out
                "
                :class="{ 'text-gray-500': !formType }"
                @click.prevent="formType = true"
              >
                Employee
              </button>
              <button
                class="
                  relative
                  flex-1
                  text-sm
                  font-medium
                  p-1
                  transition
                  duration-150
                  ease-in-out
                "
                :class="{ 'text-gray-500': formType }"
                @click.prevent="formType = false"
              >
                Employeer
              </button>
            </div>
          </div>

          <!-- Form -->
          <div class="max-w-sm mx-auto">
            <form @submit="submitForm">
              <div
                class="flex flex-wrap mb-4"
                v-for="(item, index) in formInputs[formType ? 0 : 1]"
                :key="index"
              >
                <div class="w-full">
                  <label
                    class="block text-gray-500 text-sm font-medium mb-1"
                    :for="item.id"
                    >{{ item.label }}</label
                  >
                  <input
                    :id="item.id"
                    :type="item.type"
                    class="form-input w-full text-gray-800"
                    v-model="formData[formType ? 0 : 1][item.value]"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-wrap items-center justify-between mt-6">
                <button
                  class="
                    btn-sm
                    text-white
                    bg-red-500
                    hover:bg-red-600
                    shadow-sm
                    text-sm
                    w-full
                  "
                >
                  <div v-if="!submitted">SUBMIT</div>
                  <div v-else class="loader"></div>
                </button>
              </div>
            </form>
            <div
              v-if="showSubmittedMsg"
              class="
                p-2
                bg-green-100
                rounded
                border border-green-300
                text-sm text-green-800
                mt-3
              "
            >
              Thanks for contacting us, we will reach out to you shortly!
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import sheetdb from "sheetdb-node";
export default {
  name: "Pricing",
  setup() {
    const formType = ref(true),
      submitted = ref(false),
      showSubmittedMsg = ref(false),
      formInputs = [
        [
          {
            label: "First Name",
            type: "text",
            id: "fname",
            value: "fname",
          },
          {
            label: "Last Name",
            type: "text",
            id: "lname",
            value: "lname",
          },
          {
            label: "Email Address",
            type: "email",
            id: "email",
            value: "email",
          },
          {
            label: "Phone Number",
            type: "text",
            id: "phone",
            value: "phone",
          },
          {
            label: "Field of employment",
            type: "text",
            id: "field",
            value: "field",
          },
          {
            label: "CV (Google Drive Link)",
            type: "url",
            id: "cv",
            value: "cv",
          },
        ],
        [
          {
            label: "Company Name",
            type: "text",
            id: "company",
            value: "company",
          },
          {
            label: "Email Address",
            type: "email",
            id: "email",
            value: "email",
          },
          {
            label: "Contact Name",
            type: "text",
            id: "contact",
            value: "contactName",
          },
          {
            label: "Phone Number",
            type: "text",
            id: "phone",
            value: "phone",
          },
          {
            label: "No of employees to be hired",
            type: "text",
            id: "numberOfEmployees",
            value: "numberOfEmployees",
          },
        ],
      ],
      formData = ref([
        { fname: "", lname: "", email: "", phone: "", field: "", cv: "" },
        {
          company: "",
          email: "",
          contactName: "",
          phone: "",
          numberOfEmployees: "",
        },
      ]);

    async function submitForm(e) {
      e.preventDefault();

      // Adds single row
      if (formType.value) {
        const client = sheetdb({ address: "t1r7rle2arpto" });
        try {
          submitted.value = true;
          await client.create({
            FIRSTNAME: formData.value[0].fname,
            LASTNAME: formData.value[0].lname,
            EMAIL: formData.value[0].email,
            PHONE: formData.value[0].phone,
            FIELD: formData.value[0].field,
            CV: formData.value[0].cv,
          });
          formData.value = [
            { fname: "", lname: "", email: "", phone: "", field: "", cv: "" },
            {
              company: "",
              email: "",
              contactName: "",
              phone: "",
              numberOfEmployees: "",
            },
          ];
          submitted.value = false;
          showSubmittedMsg.value = true;
        } catch (err) {
          if (err) console.log(err);
        }
      } else {
        const client = sheetdb({ address: "4bq85krex849q" });
        try {
          submitted.value = true;
          await client.create({
            COMPANY: formData.value[1].company,
            EMAIL: formData.value[1].email,
            CONTACTNAME: formData.value[1].contactName,
            PHONE: formData.value[1].phone,
            NUMBEROFEMPLOYEES: formData.value[1].numberOfEmployees,
          });
          formData.value = [
            { fname: "", lname: "", email: "", phone: "", field: "", cv: "" },
            {
              company: "",
              email: "",
              contactName: "",
              phone: "",
              numberOfEmployees: "",
            },
          ];
          submitted.value = false;
          showSubmittedMsg.value = true;
        } catch (err) {
          if (err) console.log(err);
        }
      }
    }

    return {
      formType,
      formInputs,
      formData,
      submitForm,
      submitted,
      showSubmittedMsg,
    };
  },
};
</script>

<style>
.loader {
  color: #ffffff;
  font-size: 3px;
  margin: 20px auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load4 1.3s infinite linear;
  animation: load4 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
@keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
</style>