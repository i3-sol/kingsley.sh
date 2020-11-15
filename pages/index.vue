<template>
  <main class="site-content site-content--index">

    <section class="container about-kingsley">
      <blockquote class="blockquote">
        <div class="avatar" id="photo"></div>
        <p class="lead">Hi there! My name's Kingsley. I'm a Brit, who's been living in the US since 2016. I write code for things on the internet. More specifically, I'm an Open Source Enthusiast &amp; I work as a DevOps Engineer for Pearson.</p>
        <p>A full-stack developer, generalist, and environmentalist, I enjoy combining my obsessive attention to detail, with my love for making things, and the environment, with a mission-driven work ethic of changing the world, one small positive way at a time. Checkout some of my <nuxt-link to="/projects">work</nuxt-link>, or say <nuxt-link to="/about">hello!</nuxt-link></p>
      </blockquote>
    </section>

    <section class="blogroll">
      <div class="container">

        <section v-for="(posts, index) in blogroll" class="blogroll__section">
          <h3 class="blogroll__year">{{ posts.year }}</h3>
          <ul class="list-unstyled pl-0">
            <li v-for="post in posts.posts">
              <article class="blogroll__post">
                <header class="blogroll__post__heading"
                  :class="{'starred': post.starred }"
                >
                  <a :href="`/posts/${getPostYear(post.createdAt)}/${post.slug}`">{{ post.title }}</a>
                  <time class="small" :class="post.createdAt">{{ formatToHumanDate(post.createdAt) }}</time>
                </header>
                <p>{{ post.description }}</p>
              </article>
            </li>
          </ul>
        </section>

      </div>
    </section>

  </main>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import $ from 'jquery';
import getSiteMeta from '~/utilities/getSiteMeta';

export default {
  head() {
    return {
      meta: [
        ...this.meta,
      ],
    };
  },

  computed: {
    meta() {
      return getSiteMeta();
    }
  },

  mounted() {
    function photoPosition(photo, {left, top}, {pageX, pageY}, photoPos) {
      const coordX = pageX - left - 96;
      const coordY = pageY - top - 96;

      const absY = Math.abs(coordY);
      const absX = Math.abs(coordX);

      if(coordX + 96 >= 0 && coordX + 96 <= 194 && coordY + 96 >= 0 && coordY + 96 <= 194){
        photo.css({
          'background-position': `0px ${photoPos}`,
          'filter': 'grayscale(0)'
        });
      } else if(coordX >= 0 && coordY < 0){
        photo.css('filter', 'grayscale(1)');
        if(absX / absY >= 2) {
          photo.css('background-position', `-200px ${photoPos}`);
        } else if(absY / absX >= 2) {
          photo.css('background-position', `-800px ${photoPos}`);
        } else {
          photo.css('background-position', `-1200px ${photoPos}`);
        }
      } else if(coordX >= 0 && coordY >= 0){
        photo.css('filter', 'grayscale(1)');
        if(absX / absY >= 2) {
          photo.css('background-position', `-200px ${photoPos}`);
        } else if(absY / absX >= 2) {
          photo.css('background-position', `-600px ${photoPos}`);
        } else {
          photo.css('background-position', `-1400px ${photoPos}`);
        }
      } else if(coordX < 0 && coordY >= 0){
        photo.css('filter', 'grayscale(1)');
        if(absX / absY >= 2) {
          photo.css('background-position', `-400px ${photoPos}`);
        } else if(absY / absX >= 2) {
          photo.css('background-position', `-600px ${photoPos}`);
        } else {
          photo.css('background-position', `-1600px ${photoPos}`);
        }
      } else if(coordX < 0 && coordY < 0){
        photo.css('filter', 'grayscale(1)');
        if(absX / absY >= 2) {
          photo.css('background-position', `-400px ${photoPos}`);
        } else if(absY / absX >= 2) {
          photo.css('background-position', `-800px ${photoPos}`);
        } else {
          photo.css('background-position', `-1000px ${photoPos}`);
        }
      }
    }

    const photos = [{
      elem: $('#photo'),
      pos: '200px'
    }];

    photos.forEach(photo => {
      photo.offset = photo.elem.offset();

      photo.elem.click(() => {
        $('#photo').toggleClass('incognito');
        photo.elem.css({
          'background-position': `-1800px ${photo.pos}`,
          'filter': 'grayscale(0)'
        });
      });
    });

    $(document).mousemove((e) => {
      if (! $('#photo').hasClass('incognito')) {
        photos.forEach(({elem, offset, pos}) => {
          photoPosition(elem, offset, e, pos);
        });
      }
    });
  },

  methods: {
    formatToHumanDate(datetime) {
      return moment(datetime).format('DD/MM');
    },
    getPostYear(datetime) {
      return moment(datetime).format('YYYY');
    }
  },

  data() {
    return {
      blogroll: [],
    }
  },

  async asyncData ({ $content }) {
    try {
      const content = await $content('posts', { deep: true }).sortBy('createdAt', 'desc').fetch();

      const blogroll = _(content)
        .groupBy(v => moment(v.createdAt).format('YYYY'))
        .map((posts, year) => ({ year, posts }))
        .orderBy(year => Number(year), ['asc'])
        .value();

      return {
        blogroll
      }
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
