import cityServerInstance from './instance';

export const fetchCityList = () => cityServerInstance.get('/by-cities.json')