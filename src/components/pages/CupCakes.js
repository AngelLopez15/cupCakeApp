import { useState, useEffect } from "react"
import  Cupcake from "../cards/Cupcake"

const CupCakes = (props) => {

  const {peticion, titulo} = props;

  const [cupcake, setCupcake] = useState();
  // const [error, setError] = useState(false);

  // Para levantar el moock de la API
  // $ json-server --watch db.json --port 3004

  useEffect(() => {

    fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
      .then(response => response.json())
      .then(data => setCupcake(data))
      .catch(e => console.log(e))
      // .catch(e=> {
      //   console.log(e);
      //   console.log(error);
      //   setError(true)
      // })
  }, [peticion])
  
  
  return (
    <section>
      <div className="text-center">
        {
          titulo
          ?
          <h1 className="text-violet-800 text-3xl font-extrabold">{ titulo }</h1>
          :
          null
        }
      </div>
      <section className="w-full flex justify-around flex-wrap my-10">
        {
          cupcake 
          ?
            cupcake.map(cupCakeItem =>
              <Cupcake 
                key={ cupCakeItem.id }
                sabor={ cupCakeItem.sabor }
                color={ cupCakeItem.color }
                descripcion={ cupCakeItem.descripcion }
                precio={ cupCakeItem.precio }
                imagen={ cupCakeItem.imagen }
              />
            )
          :
          // !error
          // ?
          // <p>Servicio no disponible</p>
          // :
            <p>CARGANDO...</p> 
        }
      </section>
    </section>
  )
}

export default CupCakes