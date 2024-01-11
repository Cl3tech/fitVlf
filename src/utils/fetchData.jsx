export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key' :'d43ccf269dmsh6c07f830701bdd1p1c7b2bjsnca3bf804372f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      
    }
  };

export const fetchData = async (url, options) => {
    const reponse = await fetch(url, options);
    const data = await reponse.json();

    return data
}