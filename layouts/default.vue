<template>
  <div class="site">
    <header class="site-header">

      <div class="container">
        <nav>
          <ul class="list-unstyled list-inline">
            <li>
              <nuxt-link :class="{'nuxt-link-exact-active': isRouteActive() }" to="/">
                {{ isRouteActive() ? '☚' : '' }} kingsley.sh
              </nuxt-link>
            </li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/projects">Projects</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <Nuxt />

    <footer class="site-footer">
      <div class="container">
        <nav>
          <a class="site-footer__link" href="https://github.com/kingsloi" rel="noopener" target="_blank">
            <span class="text">GitHub</span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
              <title>The GitHub.com icon, linking to Kingsley's profile.</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>

          <a class="site-footer__link" href="https://stackoverflow.com/users/1132557/kingsley" rel="noopener" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="32px" height="32px" viewBox="-135 22 32 38" enable-background="new -135 22 190 38" xml:space="preserve" class="icon">
              <title>The StackOverflow icon, linking to Kingsley's profile.</title>
                <g>
                    <polygon points="-108.5,56.2 -108.5,46.3 -105.2,46.3 -105.2,59.5 -135,59.5 -135,46.3 -131.7,46.3 -131.7,56.2"/>
                    <path d="M-128,45.4l16.2,3.4l0.7-3.2l-16.2-3.4L-128,45.4z M-125.9,37.6l15,7l1.4-3l-15-7L-125.9,37.6z     M-121.7,30.2l12.7,10.6l2.1-2.5l-12.7-10.6L-121.7,30.2z M-113.5,22.4l-2.7,2l9.9,13.3l2.7-2L-113.5,22.4z M-128.4,52.9h16.6    v-3.3h-16.6V52.9z"/>
                </g>
            </svg>
          </a>

          <a class="site-footer__link" href="https://www.linkedin.com/in/kingsleyraspe/" rel="noopener" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <title>The LinkedIn icon, linking to Kingsley's profile.</title>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </nav>

        <p>
          Kingsley Raspe is a full-stack developer, residing in the beautiful lake-side city of Gary, Indiana. All thoughts are his own, and unless otherwise stated, content on this site is licensed under <a target="_blank" rel="license" href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>.
        </p>
      </div>
    </footer>

  </div>
</template>

<script>
  export default{
    methods: {
      isRouteActive() {
        return this.$route.path.includes('posts');
      },
    },
  }
</script>
