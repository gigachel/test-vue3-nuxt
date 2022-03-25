// ERROR  17:04:49 [vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. Install @vitejs/plugin-vue to handle .vue files.
// Plugin: vite:import-analysis
// File: D:/Work/PROJECTS/TEST/VUE/vue3-nuxt/app.vue
// 1  |  import { default as __nuxt_component_0 } from null;
//     |                                                ^
// 2  |  const _sfc_main = {}
// 3  |  import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"
//     at formatError (D:\Work\PROJECTS\TEST\VUE\vue3-nuxt\node_modules\vite\dist\node\chunks\dep-9c153816.js:38098:46)
//     at TransformContext.error (D:\Work\PROJECTS\TEST\VUE\vue3-nuxt\node_modules\vite\dist\node\chunks\dep-9c153816.js:38094:19)
//     at TransformContext.transform (D:\Work\PROJECTS\TEST\VUE\vue3-nuxt\node_modules\vite\dist\node\chunks\dep-9c153816.js:69775:22)
//     at async Object.transform (D:\Work\PROJECTS\TEST\VUE\vue3-nuxt\node_modules\vite\dist\node\chunks\dep-9c153816.js:38334:30)
//     at async doTransform (D:\Work\PROJECTS\TEST\VUE\vue3-nuxt\node_modules\vite\dist\node\chunks\dep-9c153816.js:53030:29)



// https://v3.nuxtjs.org/docs/usage/error-handling

<template>
    <button @click="handleError">Clear errors</button>
</template>

<script setup>
    const props = defineProps({
        error: Object
    })

    const handleError = () => clearError({ redirect: '/' })
</script>