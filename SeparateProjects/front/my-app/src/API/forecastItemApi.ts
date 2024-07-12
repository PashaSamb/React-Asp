import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { forecastItemModel } from '../Interfaces';




const ApiForecastCall= async (): Promise<forecastItemModel[]> => {
  try {
    const response = await axios.get(`https://localhost:7154/WeatherForecast`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      throw new Error(axiosError.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

export default ApiForecastCall;