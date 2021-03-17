<template>
  <main :class="`post post--${page.slug}`">

    <div class="post__highlight" v-if="page.img" :style="`background-image:url(${page.img})`"></div>

    <section class="post__inner">
      <div class="container">

        <h1 class="page-title">{{ page.title }}</h1>

        <div class="post__meta">
          <span>{{ formatToHumanDate(page.createdAt) }}</span>
        </div>
      </div>

      <nuxt-content :document="page" />

    </section>

  </main>
</template>

<script>
import $ from 'jquery';
import _ from 'lodash';
import moment from 'moment';
import getSiteMeta from '~/utilities/getSiteMeta';

export default {
  head() {
    return {
      title: `${this.page.title} | kingsley.sh`,
      meta: [
        ...this.meta,
        {
          property: "article:published_time",
          content: this.page.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.page.updatedAt,
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://kingsley.sh/posts/${this.$route.params.year}/${this.$route.params.slug}`,
        },
      ],
    };
  },

  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.page.title,
        description: this.page.description,
        url: `${this.$config.baseUrl}/posts/${this.$route.params.year}/${this.$route.params.slug}`,
        mainImage: this.page.image,
      };
      return getSiteMeta(metaData);
    }
  },

  methods: {
    formatToHumanDate(datetime) {
      return moment(datetime).format('DD MMMM, YYYY');
    }
  },

  data() {
    return {}
  },

  async asyncData ({ $content, params }) {
    const page = await $content(`posts/${params.year}/${params.slug}`).fetch()

    return {
      page
    }
  },
}
</script>
