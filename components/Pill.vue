<template>
    <div class="bg-violet px-7 text-base md:text-xl font-bold py-2 md:py-3 rounded-full text-white">
        {{ pill_text }}
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  pill_text: String,
});

const pill_text = ref(props.pill_text);
</script>

<style scoped></style>