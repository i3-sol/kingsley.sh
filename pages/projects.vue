<template>
  <main class="site-content site-content--projects">
    <section class="container">
      <h1>Things I've Done</h1>
      <p class="lead">
        Here's a sample of projects I've worked on recently.
      </p>

      <article class="project-single">
        <h2><a target="_blank" href="https://millerbeach.community">millerbeach.community</a></h2>
        <p>At the southernmost point of Lake Michigan sits the Miller Beach neighbourhood of Gary, Indiana, with its beautiful sandy beaches, dunes, and unique habitats. But not too far away lie distinctly unnatural steel mills, oil refineries, chemical companies, major international airports and highways, cargo trains and ships, etc. Necessary by-products of modern society, but at what cost?</p>
        <p>After a bout of foul odor caused residents of Miller Beach to experience eye irritation and nausea, my neighbors and I pitched in and bought a PurpleAir II air quality sensor, allowing us to track the air quality in real time, 24/7. Not long after the PurpleAir II sensor was up and running, Aviation Edge generously provided API access to their flight database, enabling us to track airplanes passing over our community, and those arriving/departing to/from nearby Chicago O'Hare (ORD), Midway (MDW), and Gary (GYY) international airports. Around the same time, FleetMon generously provided an AIS antenna, allowing us to also track boats/ships on Lake Michigan as they move to/from the ports, mills and refineries in the region.</p>

        <a target="_blank" href="https://millerbeach.community">
          <img src="/i/projects/fleetmon-vessel-tracking.png" class="img-fluid mb-3">
        </a>

        <div class="inline-table">
          <div>Date</div>
          <div>Nov 2019 - ongoing</div>
          <div>Stack</div>
          <div>Express.js, Vue.js, Redis, JavaScript</div>
          <div>Repo</div>
          <div><a target="_blank" href="https://github.com/kingsloi/community-airmonitor">github.com/kingsloi/community-airmonitor</a></div>
        </div>
      </article>

      <article class="project-single">
        <h2><a target="_blank" href="https://happybirthdaymaddie.com">happybirthdaymaddie.com</a></h2>
        <p>I wish my wife a happy birthday with a website that I customise ever year with a different theme. 2017-2019 were custom rap music videos, 2020's theme was a game I developed based on our life in Miller Beach.</p>

        <a target="_blank" href="https://happybirthdaymaddie.com">
          <img src="/i/projects/happybirthdaymaddie.com.jpg" class="img-fluid mb-3">
        </a>

        <div class="inline-table">
          <div>Date</div>
          <div>Every year</div>
          <div>Stack</div>
          <div><a target="_blank" href="https://gdevelop-app.com/">GDevelop</a>, custom graphics/characters</div>
          <div>Repo</div>
          <div><a target="_blank" href="https://github.com/kingsloi/happybirthdaymaddie.com">github.com/kingsloi/happybirthdaymaddie.com</a></div>
        </div>
      </article>

      <article class="project-single">
        <h2><a target="_blank" href="https://heyareyou.online/">heyareyou.online</a></h2>
        <p>I was fortunate to live in Dubai for a year whilst contracting as a full stack developer. I contracted for companies in Dubai, the UK, and the USA, I was available between GMT -4 through GMT +6. Originally through <code>iskingsley.online</code>, I wanted to share my online status with the teams I worked with, eventually launching <a target="_blank" href="https://heyareyou.online/">heyareyou.online</a> for others to share their online status.</p>

        <a target="_blank" href="https://heyareyou.online">
          <img src="/i/projects/heyareyou.online.png" class="img-fluid mb-3">
        </a>

        <div class="inline-table">
          <div>Date</div>
          <div>Oct 2017</div>
          <div>Stack</div>
          <div>Laravel, Vue.js</div>
          <div>Repo</div>
          <div><a target="_blank" href="https://github.com/kingsloi/heyareyou.online">github.com/kingsloi/heyareyou.online</a></div>
        </div>
      </article>

      <article class="project-single">
        <h2><a target="_blank" href="https://whynotemploy.me/">whynotemploy.me</a></h2>
        <p>In 2011, after months of unsuccessfully securing an internship through university, I decided I needed to do something different. After discovering the .me domain extension, I knew there was opportunity to create something unique to get my name out there. That's when whynotemploy.me was born.</p>

        <p>I created a single page website of who I am and what I was searching for, and after my late-night <a target="_blank" href="https://twitter.com/Grossbauer/status/73166111910264832?s=20">tweet</a>, <a target="_blank" href="https://whynotemploy.me">whynotemploy.me</a> was picked up by <a target="_blank" href="https://grossbauer.com">The Grossbauer Group</a>, an integrated marketing agency in Northwest Indiana.</p>

        <p>2 interviews and a trip to the US Embassy in London later, I was on a flight to the USA to begin a 12 month internship with The Grossbauer Group.</p>

        <a target="_blank" href="https://whynotemploy.me/">
          <img src="/i/projects/whynotemploy.me.png" class="img-fluid mb-3">
        </a>

        <div class="inline-table">
          <div>Date</div>
          <div>2011-2019</div>
          <div>Stack</div>
          <div>Laravel</div>
          <div>Repo</div>
          <div><a target="_blank" href="https://github.com/kingsloi/whynotemploy.me">github.com/kingsloi/whynotemploy.me</a></div>
        </div>
      </article>

      <article class="project-single">
        <h2><a target="_blank" href="https://madabouthair.online/">madabouthair.online</a></h2>
        <p>Trying to encapsulate her unique style, I designed and developed a website/blog for my wife's love/business: hair.</p>

        <a target="_blank" href="https://madabouthair.online/">
          <img src="/i/projects/madabouthair.online.png" class="img-fluid mb-3">
        </a>

        <div class="inline-table">
          <div>Date</div>
          <div>January 2017</div>
          <div>Stack</div>
          <div>Laravel &amp; cnvs/easel</div>
          <div>Repo</div>
          <div><a target="_blank" href="https://github.com/kingsloi/madabouthair.online">github.com/kingsloi/madabouthair.online</a></div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import $ from 'jquery'
import getSiteMeta from '~/utilities/getSiteMeta'

export default {

  computed: {
    meta () {
      const metaData = {
        type: 'website',
        title: 'Projects',
        description: 'Selected Projects by Kingsley Raspe, Full Stack Developer/DevOps Engineer based in Gary, Indiana.'
      }
      return getSiteMeta(metaData)
    }
  },
  head () {
    return {
      title: 'Recent Projects | kingsley.sh',
      meta: [
        ...this.meta
      ]
    }
  }
}
</script>
