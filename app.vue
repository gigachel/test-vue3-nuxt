<template>
  <div>
    <!-- <Html >
      <Head>
        <Link rel="preload" href="/test.txt" as="script" />
      </Head>
    </Html> -->
    <!-- <NuxtWelcome /> -->

    <NuxtPage />
  </div>
</template>

<script setup>
    import '/assets/css/style.css'; // in nuxt.config.js

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
