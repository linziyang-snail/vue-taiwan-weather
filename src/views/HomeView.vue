<script setup>
import { ref, computed, onMounted} from 'vue';
import { fetchWeatherData } from '@/api';

const weatherData = ref(null);
const searchQuery = ref(''); 

onMounted(async () => {
  const data = await fetchWeatherData();
  weatherData.value = data;
});

const locationInfo = computed(() => {
  if (!weatherData.value) return [];
  return weatherData.value.records.location.map(loc => ({
    name: loc.locationName,
    weather: loc.weatherElement[0].time[0].parameter.parameterName,
    maxT: loc.weatherElement[4].time[0].parameter.parameterName,
    minT:loc.weatherElement[2].time[0].parameter.parameterName,
    rain:loc.weatherElement[1].time[0].parameter.parameterName,
    
  }));
});

//綁定Input即時搜尋地區
const filteredLocations = computed(() => {
  if (!searchQuery.value) return locationInfo.value;
  return locationInfo.value.filter(location => 
    location.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

//依照降雨機率選擇Icon
const getRainIcon = (rainProbability) => {
  if (rainProbability <= 20) return 'fa-solid fa-sun fa-5x';
  if (rainProbability <= 40) return 'fa-solid fa-cloud-sun fa-5x';
  if (rainProbability <= 60) return 'fa-solid fa-cloud fa-5x';
  if (rainProbability <= 80) return 'fa-solid fa-cloud-rain fa-5x';
  return 'fa-solid fa-cloud-showers-heavy fa-5x';
};

const rainIconColor = (rainProbability) => {
  if (rainProbability <= 20) return 'color: #Fdd130 ';
  if (rainProbability <= 40) return 'color: #41b1c8';
  if (rainProbability <= 60) return 'color: #515f61';
  if (rainProbability <= 80) return 'color: #13515d';
  return 'color: #000 ';
}

</script>


<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 ">
      <input 
        type="text"
        v-model="searchQuery"
        placeholder="搜尋地區"
        class="py-2 px-1 w-full bg-transparent border-b foucs:border-weather-secondary foucs:outline-none focus:shadow-[0px_1px_0_0_#004E71] mb-4"      
      >
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <li 
          v-for="location in filteredLocations" 
          :key="location.name" 
          class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer 
          w-full max-w-sm  border border-gray-200 flex justify-between
          "
        >
        <div>
          <h1 class="text-black text-2xl font-bold mb-2">{{ location.name }}</h1>
          <p class="text-gray-700 mb-1">{{ location.weather }}</p>
          <p class="text-gray-700 mb-1"><span class="text-gray-800">降雨機率：</span>{{ location.rain }}%</p>
          <p class="text-gray-500"><span class="text-gray-800">最高溫：</span>{{ location.maxT }} C</p>
          <p class="text-gray-500"><span class="text-gray-800">最低溫：</span>{{ location.minT }} C</p>
        </div>

         <div class="">
          <i :class="[getRainIcon(location.rain)]" :style="[rainIconColor(location.rain)]"></i>
          <!-- <i class="fa-solid fa-cloud-sun fa-5x" style="color: #ffa21f;"></i> -->
         </div>

        </li>
      </ul>


    </div>
  </main>
</template>

