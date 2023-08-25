<template>
    <div class="container px-4 lg:px-0 mx-auto">
        <Header />

        <div class="text-white mt-4 md:mt-8">
            <h2 class="text-4xl">About me</h2>

            <div class="border-2 mt-5 mb-8 border-white border-solid w-32 h-[1px]"></div>

            <div class="flex gap-5 items-start flex-col xl:flex-row xl:items-center max-w-[720px]">
                <img 
                    class="w-32 md:w-48 rounded-full grayscale hover:grayscale-0 transition-all" 
                    src="/eunovo.jpg" 
                    alt="Eduardo Nascimento"
                >

                <div>
                    <p>Hello! I'm Eduardo UX/UI Designer, Graphic Designer and Front-end Dev. with 5 years of experience in web design. I've graduated in Graphic Design at Unicuritiba (Curitiba/PR - Brazil) back in 2018. My mission is to create digital solutions that are efficient, accessible and provide a good experience for the end user.</p>
    
                    <a href="mailto:eduardosgn19@gmail.com" class="flex items-center gap-2 mt-6">
                        <img src="/forward_to_inbox.png" alt="E-mail">
                        <p class="font-bold">eduardosgn19@gmail.com</p>
                    </a>
                </div>

            </div>

            <div class="border-2 my-8 border-white border-solid w-32 h-[1px]"></div>

            <p class="mt-9 max-w-[450px]">Here's my socials to see more about my recent and past works and my resume, also my personal Instagram!</p>

            <div class="flex gap-2 md:gap-4 mt-5 mb-5">
                <Button target="_blank" link="https://www.behance.net/eduardosgndfc0" alt_text="Behance" btn_img="/behance-01.png" />
                <Button target="_blank" link="https://www.linkedin.com/in/edusgn/" alt_text="LinkedIn" btn_img="/linkedin-01.png" />
                <Button target="_blank" link="https://www.instagram.com/___edusgn/" alt_text="Instagram" btn_img="/insta-01.png" />
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>