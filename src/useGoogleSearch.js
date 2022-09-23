import {useEffect,useState} from 'react'
import API_KEY from './keys'
// this context key helps us to create our own search engine i.e acts as our own searxh engine and searches from the entire web and gives back the results
const CONTEXT_KEY='458d3c5953d7b439a';
const useGoogleSearch=(term)=> {
  const [data, setData]= useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
        await fetch(
            // the url for searching which on fetching, the response is converted into json whose result is then initialised to data
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        ).then(response => response.json()).then(result=>{
            setData(result)
        })
    }
    fetchData();
  },[term]) // term is the one through which the useEffect hook is applied

//   returns the data as an object
  return {data}
}

export default useGoogleSearch
