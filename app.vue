<template>
  <div>
    <!-- <Html >
      <Head>
        <Link rel="preload" href="/test.txt" as="script" />
      </Head>
    </Html> -->
    <!-- <NuxtWelcome /> -->

    <div class="max-w-[1200px] m-auto flex justify-around mb-[30px]">
        <NuxtLink to="/">Main</NuxtLink>
        <NuxtLink to="/movies">Movies</NuxtLink>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup>
    // import '/assets/css/style.css'; // TODO: link as single file (may be in nuxt.config.js)

    useMeta({
        title: computed(() => `App Name - `),
        htmlAttrs: {
            lang: 'ru',
        },
        // bodyAttrs: {
        //     class: 'test'
        // },
    });
</script>
