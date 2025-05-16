export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST, 
    'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
  },
};
//console.log(import.meta.env.VITE_APP_RAPID_API_KEY);

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': import.meta.env.VITE_YOUTUBE_API_HOST,
    'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_API_KEY,
  },
};
//console.log(import.meta.env.VITE_YOUTUBE_API_KEY);

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};