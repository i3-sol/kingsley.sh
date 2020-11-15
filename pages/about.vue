<template>
    <main class="site-content site-content--about">
        <section class="container">

            <h1>About Kingsley Raspe</h1>
            <p class="lead mb-5">Kingsley is a open-source enthusiast & generalist, he writes code for the internet. He uses a wide variety of languages &amp; technology at his job as a DevOps Engineer at Pearson. Originally from the UK, he now resides in the beautiful lake-side city of Gary, Indiana with his wife, daughter, &amp; pets. He likes DIY, long walks on the beach, nature/greenery, &amp; vintage roots reggae.</p>

            <div class="inline-table">
                <div>Expertise</div>
                <div>10+ years expertise building/shipping with open-source tech, PHP (Laravel), Node.js, Vue.js, Express.js, Lambda/serverless, DevOps, Bash, AWS, MySQL, Redis</div>

                <div>Employed</div>
                <div>DevOps Engineer at Pearson</div>

                <div>Location</div>
                <div>Tamworth, UK ↣ Gary, IN, USA (GMT +6)</div>

                <div>Email</div>
                <div>kingsley.raspe[at]protonmail.ch</div>

                <div>Github</div>
                <div><a href="https://github.com/kingsloi" target="_blank">github/kingsloi</a></div>

                <div>StackOverflow</div>
                <div><a href="https://stackoverflow.com/users/1132557/kingsley" target="_blank">stackoverflow/kingsley</a></div>

                <div>LinkedIn</div>
                <div><a href="https://www.linkedin.com/in/kingsleyraspe/" target="_blank">linkedin/kingsleyraspe</a></div>
            </div>

        </section>
    </main>
</template>

<script>
import getSiteMeta from '~/utilities/getSiteMeta';

export default {
  head() {
    return {
      title: 'About Kingsley Raspe | kingsley.sh',
      meta: [
        ...this.meta,
      ],
    };
  },

  computed: {
    meta() {
      const metaData = {
        type: 'website',
        title: 'About Kingsley Raspe',
        description: 'Who is Kingsley Raspe?',
      };
      return getSiteMeta(metaData);
    }
  },
}
</script>
