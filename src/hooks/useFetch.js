import { useState, useEffect } from "react"
import axios from "axios";

// Creando nuestro propios Hook (Custom Hook)
const useFetch = ( endpoint ) => {

  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}${endpoint}`)
      .then(({ data }) => setData(data))
      .catch( err => setError(err))
  }, [endpoint]);
  
  // Para poder retornar dos estados o mas debemos ponerlo en un array
  // por tanto en donde usemos el hooks debemos destructurar los valores
  return [data, error];
}

export default useFetch;