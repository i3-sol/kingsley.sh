<template>
  <main class="site-content site-content--index">
    <section class="container about-kingsley">
      <blockquote class="blockquote">
        <i-am-kingsley />
        <p class="lead">
          Hi there! My name's Kingsley. I'm a Brit, who's been living in the US since 2016. I write code for things on the internet. More specifically, I'm an Open Source Enthusiast &amp; I work as a DevOps Engineer for Pearson.
        </p>
        <p>
          A full-stack developer, generalist, and environmentalist, I enjoy combining my obsessive attention to detail, with my love for making things, and the environment, with a mission-driven work ethic of changing the world, in one small positive way at a time. Checkout some of my <nuxt-link to="/projects">
            work
          </nuxt-link>, or say <nuxt-link to="/about">
            hello!
          </nuxt-link>
        </p>
      </blockquote>
    </section>

    <section class="blogroll">
      <div class="container">
        <section v-for="(posts, index) in blogroll" class="blogroll__section">
          <h3 class="blogroll__year">
            {{ posts.year }}
          </h3>
          <ul class="list-unstyled pl-0">
            <li v-for="post in posts.posts">
              <article class="blogroll__post">
                <header
                  class="blogroll__post__heading"
                  :class="{'starred': post.starred }"
                >
                  <a :href="`/posts/${getPostYear(post.createdAt)}/${post.slug}`">{{ post.title }}</a>
                  <time class="small" :class="post.createdAt">{{ formatToHumanDate(post.createdAt) }}</time>
                </header>
                <p v-html="post.description" />
              </article>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import getSiteMeta from '~/utilities/getSiteMeta'

export default {

  async asyncData ({ $content }) {
    try {
      const content = await $content('posts', { deep: true }).sortBy('createdAt', 'desc').fetch()

      const blogroll = _(content)
        .groupBy(v => moment(v.createdAt).format('YYYY'))
        .map((posts, year) => ({ year, posts }))
        .orderBy(year => Number(year), ['desc'])
        .value()

      return {
        blogroll
      }
    } catch (e) {
      console.log(e)
    }
  },

  data () {
    return {
      blogroll: []
    }
  },

  computed: {
    meta () {
      return getSiteMeta()
    }
  },

  methods: {
    formatToHumanDate (datetime) {
      return moment(datetime).format('DD/MM')
    },
    getPostYear (datetime) {
      return moment(datetime).format('YYYY')
    }
  },
  head () {
    return {
      meta: [
        ...this.meta
      ]
    }
  }
}
</script>
