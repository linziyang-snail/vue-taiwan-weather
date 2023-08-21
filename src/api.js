import axios from 'axios';

const API_URL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-5ACB44E5-E77A-4BA4-8C6B-A7F5051610E5';

export const fetchWeatherData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
