<template>
    <div class="max-w-[1200px] m-auto">
        <form
            @submit.prevent="fetchMovies"
            action=""
            class="flex mb-[20px]"
        >
            <input
                v-model="searchText"
                type="text"
                class="border border-black outline-none"
            >
            <button
                type="submit"
                class="ml-[20px] border"
            >Search</button>
        </form>
        <ul>
            <li
                v-for="movie in movies"
                :key="movie.id"
                class="flex py-[15px] border-b"
            >
                <img
                    :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path"
                    alt=""
                    class="w-[100px] h-[150px] object-cover"
                >
                <div class="pl-[10px]">
                    <div class="mb-[15px]">
                        <span class="text-[20px] font-medium">{{ movie.title }}</span> ({{ movie.original_title }})
                    </div>
                    <div class="text-[14px]">{{ movie.overview }}</div>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script setup>
    const searchText = ref('');
    const movies = ref([]);

    const fetchMovies = async () => {
        const { data } = await useFetch('/api/movies?query=' + searchText.value);
        movies.value = data.value.results;
    };
</script>