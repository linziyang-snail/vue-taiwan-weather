<template>
    <header class="sticky top-0 bg-weather-primary shadow-lg">
        <nav class="container flex-col flex sm:flex-row items-center gap-4 text-white py-6">
            <router-link :to="{name: 'home'}">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-sun text-xl"></i>
                    <p class="text-2xl">臺 灣 地 區 天 氣</p>
                </div>
            </router-link>
            <div class="flex gap-3 flex-1 justify-end">

                <i class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer" @click="toggleModal"></i>
<!-- 
                <i class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"></i> -->

            </div>

            <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
                <div class="text-black">
                    <h1 class="text-2xl mb-1">關於：</h1>
                    <p class="mb-4">
                        可查看全臺各地區天氣
                    </p>
                    <h2 class="text-2xl">如何使用：</h2>
                    <ol class="list-decimal list-inside mb-4">
                        <li>
                            查看全臺各區天氣（最高溫,最低溫,降雨機率）
                        </li>
                        <li>
                            可搜尋您所在地區的天氣資訊
                        </li>
                        <li>
                            沒別的功能了
                        </li>
                    </ol>
                    <!-- <h2 class="text-2xl">刪除城市：</h2>
                    <p>不想追蹤某地區的話，就把它刪了吧</p> -->
                </div>
                
            </BaseModal>

        </nav>
    </header>
</template>

<script setup>
import { ref, reactive } from 'vue'

import BaseModal from './BaseModal.vue';

const modalActive = ref(null);

const toggleModal = () => {
    modalActive.value =! modalActive.value
}

</script>