<template>
  <main class="site-content site-content--about">
    <section class="container">
      <h1>About Kingsley Raspe</h1>
      <p class="lead mb-5">
        Kingsley is a open-source enthusiast and generalist, who writes code for the internet. He uses a variety of languages and technology in his job as a DevOps Engineer at Pearson. Originally from the UK, he now resides in the beautiful lakeside city of Gary, Indiana, with his wife, son, and pets. He likes DIY, long walks on the beach, gardening/nature/greenery, and vintage roots reggae.
      </p>

      <div class="inline-table">
        <div>Expertise</div>
        <div class="mb-4">10+ years expertise building/shipping with open-source tech. PHP (Laravel), Node.js, Vue.js, Express.js, Lambda/serverless, DevOps, Bash, AWS, MySQL, Redis</div>

        <div>Employed</div>
        <div>DevOps Engineer at Pearson</div>

        <div>Resume</div>
        <div><a href="/kingsley-raspe-full-stack-developer-resume.pdf" target="_blank">kingsley-raspe-full-stack-developer-resume.pdf</a></div>

        <div>Availability</div>
        <div class="mb-4"><span class="mark mark--other d-inline-block pr-2">open to new opportunities ✅</span></div>

        <div>Email</div>
        <div><abbr title="you have to manually type me into your email field"><span data-user="olleh" data-website="hs.yelsgnik" class="d-inline-block mark e-mail"></span></abbr></div>

        <div>Location</div>
        <div class="mb-4"><strike>Tamworth, UK</strike> ↣ Gary, IN, USA (GMT +6)</div>

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
import getSiteMeta from '~/utilities/getSiteMeta'

export default {

  computed: {
    meta () {
      const metaData = {
        type: 'website',
        title: 'About Kingsley Raspe',
        description: 'Who is Kingsley Raspe?'
      }
      return getSiteMeta(metaData)
    }
  },
  head () {
    return {
      title: 'About Kingsley Raspe | kingsley.sh',
      meta: [
        ...this.meta
      ]
    }
  }
}
</script>
