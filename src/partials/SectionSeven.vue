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
              <h2 class="h2 font-cabinet-grotesk mb-10">
                Faire le bon match pour votre entreprise au Canada - Nos
                services aux candidats
              </h2>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                v-for="(item, index) in [
                  {
                    name: 'Offres d’emploi',
                    description: `Trouver des postes vacants et des postes vacants est la première étape pour travailler au
Canada en tant que talents étrangers. Restez prêt pour les opportunités en parcourant nos
offres d’emploi actuelles. Postulez à ceux qui conviennent à votre profil et rejoignez le bassin
croissant de candidats.`,
                  },
                  {
                    name: 'Négociation de l’offre d’emploi',
                    description: `Une fois que vous aurez postulé pour l’emploi de vos rêves, nous interdiront pour négocier
l’offre d’emploi avec votre employeur canadien.`,
                  },
                  {
                    name: 'Pratique d’entrevue d’emploi',
                    description: `Préparez-vous à exceller dans les entrevues approfondies de manière professionnelle et
convaincante. Cela vous donnera un avantage concurrentiel sur les autres candidats. Nos
services de coaching vous préparent à l’entrevue avec votre employeur canadien potentiel.`,
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
              <h2 class="h2 font-cabinet-grotesk mb-10">
                Consultez notre processus de recrutement simple pour les talents
                internationaux
              </h2>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                v-for="(item, index) in [
                  {
                    name: 'Vérifier les offres d’emploi',
                    description: `Les offres d’emploi régulières sont présentées sur notre site Web. Vous pouvez accéder aux
offres disponibles tout de suite!`,
                  },
                  {
                    name: 'Présenter une demande',
                    description: `Les candidats qualifiés intéressés par l’une des offres affichées sur notre site Web peuvent
soumettre une candidature solide et compétitive via le portail en utilisant la meilleure version
de votre CV et d’autres détails pertinents.`,
                  },
                  {
                    name: 'Attendre',
                    description: `À la réception de vos CV et lettres de motivation, nous lamarsons l’examen de profil. Des
recruteurs expérimentés et des professionnels des ressources humaines examineront
attentivement et minutieusement votre profil.`,
                  },
                  {
                    name: 'Entretien',
                    description: `Après avoir examiné attentivement votre candidature, nous présélectionnerons les candidats
qui répondent à l’offre d’emploi et planifierons une réunion. Il est conseillé d’être pleinement
préparé, car c’est le meilleur moment pour mettre votre meilleur pied en avant et présenter la
meilleure version de vous-même.`,
                  },
                  {
                    name: 'Processus d’embauche',
                    description: `Si vous avez réussi l’entrevue, le processus d’embauche commence immédiatement. Cela
implique l’évaluation linguistique du candidat, la vérification de la documentation et la
présentation des candidats retenus aux employeurs. Dès la sélection finale, les candidats sont
officiellement intégrés à l’organisation.`,
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
            <h2 class="h2 font-cabinet-grotesk mb-10">
              Trouvez votre avenir maintenant!
            </h2>
            <p
              class="text-xl text-gray-500 mb-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Des postes de niveau intermédiaire à supérieur, trouver les
              meilleurs talents pour votre organisation est notre objectif
              fondamental chez HR Globe. Notre succès dépend non seulement de
              fournir des candidats qualifiés et qualifiés, mais aussi de
              trouver le BON candidat qui correspond parfaitement à vos offres
              d’emploi et à vos offres d’emploi et qui s’alignera sur votre
              culture d’entreprise.
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
            <h2 class="h2 font-cabinet-grotesk mb-10">
              Découvrez les témoignages de nos anciens clients
            </h2>
            <p
              class="text-xl text-gray-500 mb-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Merci pour l’excellent soutien professionnel et les conseils. Ce
              fut en effet un plaisir de travailler avec HR Globe pour
              rechercher des travailleurs étrangers qualifiés et qualifiés. Si
              j’ai ou connais quelqu’un qui a des besoins de recrutement de
              talents impliquant des talents étrangers, je n’hésiterai pas à les
              envoyer à votre façon.
              <b class="text-hr-globe-color">(Nom et société)</b>
            </p>
            <p
              class="text-xl text-gray-500 mb-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              (Membre de l’équipe) à HR Globe a fait un excellent travail! Nous
              avons eu un revirement serré, et il a très bien performé pour
              respecter l’échéance. Elle a fourni des talents de qualité qui
              correspondent au poste disponible, et nous avons embauché avec
              succès un qui aurait l’impact nécessaire sur notre entreprise.
              <b class="text-hr-globe-color">(Nom), Client heureux</b>
            </p>
            <p
              class="text-xl text-gray-500 mb-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              (Membre de l’équipe) est une excellente personnalité avec laquelle
              travailler. Elle a une grande éthique de travail, d’excellentes
              compétences en communication et de l’ouverture d’esprit. Elle
              s’efforce continuellement de faire le travail, quelles que soient
              les circonstances. Elle comprenait clairement les attentes du
              poste et a fourni le meilleur ajustement pour le poste. Je
              travaillerai à nouveau avec HR Globe.
              <b class="text-hr-globe-color">(Nom), Client heureux</b>
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
              Commencez votre recherche maintenant Contactez-nous n’importe quel
              jour, n’importe quel moment.
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