<template>
    <main>
        <div class="container flex flex-col justify-between h-screen px-4 lg:px-0 mx-auto">
            <Header />

            <div>
                <p class="text-white tracking-tight text-base md:text-xl mb-4">
                    Hi, thanks for stopping by! <span>&#128512;</span> I’m
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
                    <Button link="/about" text_btn btn_text="About me" btn_img="/open_in_new-01.png" />
    
                    <div class="flex gap-2 md:gap-4">
                        <Button target="_blank" link="https://www.behance.net/eduardosgndfc0" alt_text="Behance" btn_img="/behance-01.png" />
                        <Button target="_blank" link="https://www.linkedin.com/in/edusgn/" alt_text="LinkedIn" btn_img="/linkedin-01.png" />
                        <Button target="_blank" link="https://www.instagram.com/___edusgn/" alt_text="Instagram" btn_img="/insta-01.png" />
                    </div>
                </div>
            </div>


            <footer class="pb-4 opacity-60">
                <div class="flex md:text-base text-xs items-center justify-center gap-1 text-white">
                    <span>Website made by me with</span>
                    
                    <nuxt-link to="https://nuxt.com/">
                        <img alt="Nuxt" class="w-[50px] md:w-[65px]" src="/nuxt_logo-01.png"/>
                    </nuxt-link>

                    <span>and</span>

                    <nuxt-link to="https://tailwindcss.com/">
                        <img alt="TailwindCSS" class="w-[100px] md:w-[120px]" src="/tailwindcss-logotype-01.png"/>
                    </nuxt-link>
                </div>
            </footer>
        </div>
    </main>
</template>

<script setup></script>

<style scoped></style>