<template>
    <nuxt-link :to="link">
        <div 
            class="
                text-white 
                font-bold 
                text-base 
                md:text-xl 
                flex 
                gap-x-2 
                border-2 
                border-violet 
                rounded-[20px]
                py-4
                px-5
                md:py-6
                md:px-7
                items-center
                transition-all
                hover:bg-violet
            "
            v-if="text_btn"
        >
            <span>{{ btn_text }}</span>
            <nuxt-img :src="btn_img" class="w-[22px] h-[22px]" />
        </div>

        <div v-else class="border-2 border-violet rounded-[20px] p-4 md:p-6 transition-all hover:bg-violet">
            <nuxt-img :src="btn_img" class="w-7 h-7 md:w-12 md:h-12" />
        </div>
    </nuxt-link>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  btn_text: String,
  btn_img: String,
  text_btn: Boolean,
  link: String,
});

const btn_text = ref(props.btn_text);
const btn_img = ref(props.btn_img);
const text_btn = ref(props.text_btn);
const link = ref(props.link);
</script>

<style scoped></style>