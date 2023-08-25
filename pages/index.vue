<template>
    <main>
        <div class="container flex flex-col justify-between h-screen px-4 lg:px-0 mx-auto">
            <Header />

            <div>
                <p class="text-white tracking-tight text-base md:text-xl mb-4">
                    Hi, thanks for stopping by! I’m
                </p>

                <div class="max-w-[592px]">
                    <h1 class="leading-none tracking-tight text-white text-6xl md:text-8xl xl:text-9xl">
                        Eduardo Nascimento
                    </h1>
                </div>

                <div class="flex gap-x-4 mt-5">
                    <Pill pill_text="UX/UI" />
                    <Pill pill_text="Graphic Design" />
                </div>

                <div class="flex justify-between w-full mt-10">
                    <Button link="/" text_btn btn_text="About me" btn_img="/open_in_new.svg" />
    
                    <div class="flex gap-2 md:gap-4">
                        <Button target="_blank" link="https://www.behance.net/eduardosgndfc0" alt_text="Behance" btn_img="/behance.svg" />
                        <Button link="https://www.linkedin.com/in/edusgn/" alt_text="LinkedIn" btn_img="/linkedin.svg" />
                        <Button link="https://www.instagram.com/___edusgn/" alt_text="Instagram" btn_img="/insta.svg" />
                    </div>
                </div>
            </div>


            <footer class="pb-4">
                <div class="flex text-sm items-start justify-center gap-2 text-white">
                    <span>Website made by me with</span>
                    
                    <nuxt-link to="https://nuxt.com/">
                        <img src="/nuxt_logo.svg"/>
                    </nuxt-link>

                    <span>and</span>

                    <nuxt-link to="https://tailwindcss.com/">
                        <img class="w-[120px]" src="/tailwindcss-logotype.svg"/>
                    </nuxt-link>
                </div>
            </footer>
        </div>
    </main>
</template>

<script setup></script>

<style scoped></style>