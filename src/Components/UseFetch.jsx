import {useState,useEffect} from 'react'

const useFetch = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const fetchApi = async (url) => {
        setLoading(true);
        setError(false);
        try {
          const ApiRes = await fetch(url);
        //   console.log(ApiRes);
          if (!ApiRes.ok) {
            throw new Error(`${ApiRes.status}, ${ApiRes.statusText}`);
          }
          const jsonRes = await ApiRes.json();
          setData(jsonRes);
          setLoading(false);
          setError(false);
        } catch (e) {
          setError(true);
          setLoading(false);
        }
      };
      
      useEffect(() => {
        fetchApi(url);
      }, []);
    
    return[data,loading,error]
}

export default useFetch