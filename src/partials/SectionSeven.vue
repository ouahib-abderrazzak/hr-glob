<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div>
          <!-- Section header -->
          <div class="pb-12 md:pb-14">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              class="relative text-center md:text-left"
            >
              <svg
                class="fill-gray-300 hidden md:block absolute -ml-7 -mt-8"
                width="22"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.07 1.468c-.288-.134-.161-.496.199-1.005.115-.16.583-.483.693-.462.218.039.433.08.612.152.113.04 1.233 1.173 1.62 1.564.385.368.678.795.958 1.234l.841 1.337c.279.446.553.895.814 1.35.089.152.161.312.217.48l.051.17c.177.68.48 1.289.809 1.885l.242.439a.4.4 0 0 0 .179.173c.246.114 1.162 2.064 1.203 2.35.139.698.161 1.445.28 2.146l.028.118a.256.256 0 0 1-.017.196c-.148.296-.038.478.016.685.078.288.145.58.181.883.019.152-.036.331-.064.5-.028.156-.318.209-.367.18-.139-.081-.222.072-.327.133l-.08.043a.206.206 0 0 1-.037.013c-.045.004-1.215-1.096-1.449-1.349l-.032-.037-.77-1.069c-.43-.514-.737-1.116-.83-1.223-.088-.12-.091-.277-.116-.424-.01-.075-1.069-1.706-1.103-1.772-.151-.371-.426-.678-.377-1.151.01-.092-.039-.159-.078-.228-.34-.595-.563-1.25-.826-1.887-.134-.325-.333-.613-.494-.923-.03-.056-.028-.129-.044-.193l-.04-.159a.39.39 0 0 0-.032-.074c-.426-.706-.726-1.492-1.247-2.138-.112-.153-.366-1.07-.52-1.233-.079-.093.024-.652-.093-.704ZM.414 27.098c-.28.091-.397-.262-.414-.873-.006-.196.156-.74.244-.802.172-.117.342-.228.5-.3.098-.038 1.44.005 1.902-.03.446-.021.872.039 1.293.12.859.154 1.728.267 2.596.387.193.027.379.085.562.168.55.26 1.13.358 1.714.417l.386.037a.315.315 0 0 0 .21-.055c.199-.133 2.005.124 2.23.231.561.244 1.11.605 1.677.856.08.04.172.028.236.148.147.276.331.271.509.328.248.077.494.165.737.28.12.059.228.198.341.307.1.1.006.379-.037.407-.124.08-.048.23-.052.353a.583.583 0 0 1-.012.127c-.015.043-1.373.511-1.681.59l-.047.01-1.166.121c-.596.104-1.197.054-1.324.074-.13.013-.25-.07-.374-.124l-1.882-.043c-.352-.077-.728-.03-1.042-.341-.062-.06-.137-.061-.207-.069-.62-.073-1.214-.283-1.813-.465-.305-.092-.623-.129-.934-.196-.056-.012-.104-.059-.158-.086l-.132-.073a.27.27 0 0 0-.07-.023c-.74-.137-1.447-.433-2.202-.517-.175-.017-.911-.496-1.112-.512-.114-.008-.366-.487-.478-.451Z"
                  fill-rule="evenodd"
                />
              </svg>
              <h2 class="h2 font-cabinet-grotesk mb-4 md:mb-10">
                Making the Right Match for Your Company in Canada - Our Services
                for Candidates
              </h2>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                v-for="(item, index) in [
                  {
                    name: 'Job Openings',
                    description: `Finding job vacancies and openings is the first step to working in Canada as foreign
talent. Keep yourself prepared for opportunities by browsing through our current job
openings. Apply to the ones that suit your profile and join the expanding pool of
candidates.`,
                  },
                  {
                    name: 'Job Offer Negotiation',
                    description: `Once you???ve applied for your dream job, we???ll step in to negotiate the job offer with your
Canadian employer.`,
                  },
                  {
                    name: 'Job Interview Practice',
                    description: `Get prepared to excel at in-depth interviews professionally and convincingly. It???ll give
you a competitive edge over other candidates. Our coaching services prepare you for
the interview with your prospective Canadian employer.`,
                  },
                ]"
                :key="index"
              >
                <b class="text-hr-globe-color">{{ item.name }}</b>
                <p class="text-xl text-gray-500 mb-10">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div>
          <!-- Section header -->
          <div class="pb-12 md:pb-14">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              class="relative text-center md:text-left"
            >
              <svg
                class="fill-gray-300 hidden md:block absolute -ml-7 -mt-8"
                width="22"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.07 1.468c-.288-.134-.161-.496.199-1.005.115-.16.583-.483.693-.462.218.039.433.08.612.152.113.04 1.233 1.173 1.62 1.564.385.368.678.795.958 1.234l.841 1.337c.279.446.553.895.814 1.35.089.152.161.312.217.48l.051.17c.177.68.48 1.289.809 1.885l.242.439a.4.4 0 0 0 .179.173c.246.114 1.162 2.064 1.203 2.35.139.698.161 1.445.28 2.146l.028.118a.256.256 0 0 1-.017.196c-.148.296-.038.478.016.685.078.288.145.58.181.883.019.152-.036.331-.064.5-.028.156-.318.209-.367.18-.139-.081-.222.072-.327.133l-.08.043a.206.206 0 0 1-.037.013c-.045.004-1.215-1.096-1.449-1.349l-.032-.037-.77-1.069c-.43-.514-.737-1.116-.83-1.223-.088-.12-.091-.277-.116-.424-.01-.075-1.069-1.706-1.103-1.772-.151-.371-.426-.678-.377-1.151.01-.092-.039-.159-.078-.228-.34-.595-.563-1.25-.826-1.887-.134-.325-.333-.613-.494-.923-.03-.056-.028-.129-.044-.193l-.04-.159a.39.39 0 0 0-.032-.074c-.426-.706-.726-1.492-1.247-2.138-.112-.153-.366-1.07-.52-1.233-.079-.093.024-.652-.093-.704ZM.414 27.098c-.28.091-.397-.262-.414-.873-.006-.196.156-.74.244-.802.172-.117.342-.228.5-.3.098-.038 1.44.005 1.902-.03.446-.021.872.039 1.293.12.859.154 1.728.267 2.596.387.193.027.379.085.562.168.55.26 1.13.358 1.714.417l.386.037a.315.315 0 0 0 .21-.055c.199-.133 2.005.124 2.23.231.561.244 1.11.605 1.677.856.08.04.172.028.236.148.147.276.331.271.509.328.248.077.494.165.737.28.12.059.228.198.341.307.1.1.006.379-.037.407-.124.08-.048.23-.052.353a.583.583 0 0 1-.012.127c-.015.043-1.373.511-1.681.59l-.047.01-1.166.121c-.596.104-1.197.054-1.324.074-.13.013-.25-.07-.374-.124l-1.882-.043c-.352-.077-.728-.03-1.042-.341-.062-.06-.137-.061-.207-.069-.62-.073-1.214-.283-1.813-.465-.305-.092-.623-.129-.934-.196-.056-.012-.104-.059-.158-.086l-.132-.073a.27.27 0 0 0-.07-.023c-.74-.137-1.447-.433-2.202-.517-.175-.017-.911-.496-1.112-.512-.114-.008-.366-.487-.478-.451Z"
                  fill-rule="evenodd"
                />
              </svg>
              <h2 class="h2 font-cabinet-grotesk mb-4 md:mb-10">
                Check Our Simple Recruitment Process for International Talents
              </h2>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                v-for="(item, index) in [
                  {
                    name: 'Check Job Offers',
                    description: `Regular job offers are featured on our website. You can access the available offers right
away!`,
                  },
                  {
                    name: 'Apply',
                    description: `Qualified candidates interested in any of the offers posted on our website can submit a
strong and competitive application through the portal using the best version of your
resume and other relevant details.`,
                  },
                  {
                    name: 'Wait',
                    description: `Upon receipt of your CVs and cover letters, we kickstart the profile review. Experienced
recruiters and human resource professionals will carefully and thoroughly review your
profile.`,
                  },
                  {
                    name: 'Interview',
                    description: `After carefully reviewing your application, we will shortlist candidates that meet the job
offer and schedule a meeting. You are advised to be fully prepared, as this is the best
time to put your best foot forward and showcase the best version of yourself.`,
                  },
                  {
                    name: 'Hiring Process',
                    description: `If you???ve successfully passed the interview, the hiring process begins immediately. This
involves the candidate???s language evaluation, documentation verification, and
presentation of successful candidates to employers. Upon final selection, candidates
are then formally integrated into the organization.`,
                  },
                ]"
                :key="index"
              >
                <b class="text-hr-globe-color">{{ item.name }}</b>
                <p class="text-xl text-gray-500 mb-10">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div>
        <!-- Section header -->
        <div class="pb-12 md:pb-14">
          <div class="relative text-center md:text-left">
            <svg
              class="fill-gray-300 hidden md:block absolute -ml-7 -mt-8"
              width="22"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.07 1.468c-.288-.134-.161-.496.199-1.005.115-.16.583-.483.693-.462.218.039.433.08.612.152.113.04 1.233 1.173 1.62 1.564.385.368.678.795.958 1.234l.841 1.337c.279.446.553.895.814 1.35.089.152.161.312.217.48l.051.17c.177.68.48 1.289.809 1.885l.242.439a.4.4 0 0 0 .179.173c.246.114 1.162 2.064 1.203 2.35.139.698.161 1.445.28 2.146l.028.118a.256.256 0 0 1-.017.196c-.148.296-.038.478.016.685.078.288.145.58.181.883.019.152-.036.331-.064.5-.028.156-.318.209-.367.18-.139-.081-.222.072-.327.133l-.08.043a.206.206 0 0 1-.037.013c-.045.004-1.215-1.096-1.449-1.349l-.032-.037-.77-1.069c-.43-.514-.737-1.116-.83-1.223-.088-.12-.091-.277-.116-.424-.01-.075-1.069-1.706-1.103-1.772-.151-.371-.426-.678-.377-1.151.01-.092-.039-.159-.078-.228-.34-.595-.563-1.25-.826-1.887-.134-.325-.333-.613-.494-.923-.03-.056-.028-.129-.044-.193l-.04-.159a.39.39 0 0 0-.032-.074c-.426-.706-.726-1.492-1.247-2.138-.112-.153-.366-1.07-.52-1.233-.079-.093.024-.652-.093-.704ZM.414 27.098c-.28.091-.397-.262-.414-.873-.006-.196.156-.74.244-.802.172-.117.342-.228.5-.3.098-.038 1.44.005 1.902-.03.446-.021.872.039 1.293.12.859.154 1.728.267 2.596.387.193.027.379.085.562.168.55.26 1.13.358 1.714.417l.386.037a.315.315 0 0 0 .21-.055c.199-.133 2.005.124 2.23.231.561.244 1.11.605 1.677.856.08.04.172.028.236.148.147.276.331.271.509.328.248.077.494.165.737.28.12.059.228.198.341.307.1.1.006.379-.037.407-.124.08-.048.23-.052.353a.583.583 0 0 1-.012.127c-.015.043-1.373.511-1.681.59l-.047.01-1.166.121c-.596.104-1.197.054-1.324.074-.13.013-.25-.07-.374-.124l-1.882-.043c-.352-.077-.728-.03-1.042-.341-.062-.06-.137-.061-.207-.069-.62-.073-1.214-.283-1.813-.465-.305-.092-.623-.129-.934-.196-.056-.012-.104-.059-.158-.086l-.132-.073a.27.27 0 0 0-.07-.023c-.74-.137-1.447-.433-2.202-.517-.175-.017-.911-.496-1.112-.512-.114-.008-.366-.487-.478-.451Z"
                fill-rule="evenodd"
              />
            </svg>
            <h2 class="h2 font-cabinet-grotesk mb-4 md:mb-10">
              Find Your Future Now!
            </h2>
            <img
              data-aos="fade-right"
              data-aos-delay="200"
              src="../images/services-img-two.jpg"
              class="mb-10"
            />
            <p
              class="text-xl text-gray-500 mb-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              From mid to senior-level positions, finding the best talents for
              your organization is our fundamental goal at HR Globe. Our success
              depends on not just providing skilled and qualified candidates but
              finding the RIGHT Candidate that perfectly matches your job
              vacancies and openings and will align with your corporate culture.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div>
        <!-- Section header -->
        <div class="pb-12 md:pb-14">
          <div class="relative text-center md:text-left">
            <svg
              class="fill-gray-300 hidden md:block absolute -ml-7 -mt-8"
              width="22"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.07 1.468c-.288-.134-.161-.496.199-1.005.115-.16.583-.483.693-.462.218.039.433.08.612.152.113.04 1.233 1.173 1.62 1.564.385.368.678.795.958 1.234l.841 1.337c.279.446.553.895.814 1.35.089.152.161.312.217.48l.051.17c.177.68.48 1.289.809 1.885l.242.439a.4.4 0 0 0 .179.173c.246.114 1.162 2.064 1.203 2.35.139.698.161 1.445.28 2.146l.028.118a.256.256 0 0 1-.017.196c-.148.296-.038.478.016.685.078.288.145.58.181.883.019.152-.036.331-.064.5-.028.156-.318.209-.367.18-.139-.081-.222.072-.327.133l-.08.043a.206.206 0 0 1-.037.013c-.045.004-1.215-1.096-1.449-1.349l-.032-.037-.77-1.069c-.43-.514-.737-1.116-.83-1.223-.088-.12-.091-.277-.116-.424-.01-.075-1.069-1.706-1.103-1.772-.151-.371-.426-.678-.377-1.151.01-.092-.039-.159-.078-.228-.34-.595-.563-1.25-.826-1.887-.134-.325-.333-.613-.494-.923-.03-.056-.028-.129-.044-.193l-.04-.159a.39.39 0 0 0-.032-.074c-.426-.706-.726-1.492-1.247-2.138-.112-.153-.366-1.07-.52-1.233-.079-.093.024-.652-.093-.704ZM.414 27.098c-.28.091-.397-.262-.414-.873-.006-.196.156-.74.244-.802.172-.117.342-.228.5-.3.098-.038 1.44.005 1.902-.03.446-.021.872.039 1.293.12.859.154 1.728.267 2.596.387.193.027.379.085.562.168.55.26 1.13.358 1.714.417l.386.037a.315.315 0 0 0 .21-.055c.199-.133 2.005.124 2.23.231.561.244 1.11.605 1.677.856.08.04.172.028.236.148.147.276.331.271.509.328.248.077.494.165.737.28.12.059.228.198.341.307.1.1.006.379-.037.407-.124.08-.048.23-.052.353a.583.583 0 0 1-.012.127c-.015.043-1.373.511-1.681.59l-.047.01-1.166.121c-.596.104-1.197.054-1.324.074-.13.013-.25-.07-.374-.124l-1.882-.043c-.352-.077-.728-.03-1.042-.341-.062-.06-.137-.061-.207-.069-.62-.073-1.214-.283-1.813-.465-.305-.092-.623-.129-.934-.196-.056-.012-.104-.059-.158-.086l-.132-.073a.27.27 0 0 0-.07-.023c-.74-.137-1.447-.433-2.202-.517-.175-.017-.911-.496-1.112-.512-.114-.008-.366-.487-.478-.451Z"
                fill-rule="evenodd"
              />
            </svg>
            <h2 class="h2 font-cabinet-grotesk mb-4 md:mb-10">
              Check Out Testimonials from Our Past Clients
            </h2>
            <p
              class="text-xl text-gray-500 mb-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Thank you for the excellent career support and advice. It was
              indeed a pleasure working with HR Globe to seek qualified and
              skilled foreign workers. If I have or know anyone with talent
              recruitment needs involving foreign talents, I will not hesitate
              to send them your way.
              <b class="text-hr-globe-color">(Name and Company)</b>
            </p>
            <p
              class="text-xl text-gray-500 mb-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              (Team Member) at HR Globe did an excellent job! We had a tight
              turnaround, and he performed excellently to meet the deadline. She
              delivered quality talents that fit into the available position,
              and we successfully hired one who would make the needed impact on
              our company.
              <b class="text-hr-globe-color">(Name), Happy Client</b>
            </p>
            <p
              class="text-xl text-gray-500 mb-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              (Team Member) is an excellent personality to work with. She has a
              great work ethic, excellent communication skills, and
              open-mindedness. She continually strives to get the job done
              regardless of the circumstances. She clearly understood the
              expectations of the role and delivered the best fit for the
              position. I will work with HR Globe again.
              <b class="text-hr-globe-color">(Name), Happy Client</b>
            </p>
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              class="
                text-4xl
                font-cabinet-grotesk font-bold
                text-hr-globe-color
                aos-init aos-animate
              "
            >
              Begin Your Search Now Reach Out to Us Any Day, Any Time.
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SectionThree",
};
</script>
<style lang="">
</style>