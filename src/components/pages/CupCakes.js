import { useState, useEffect } from "react"
import  Cupcake from "../cards/Cupcake"

const CupCakes = () => {

  const [cupcake, setCupcake] = useState();

  // Para levantar el moock de la API
  // $ json-server --watch db.json --port 3004

  useEffect(() => {

    fetch("http://localhost:3004/cupcakes")
      .then(response => response.json())
      .then(data => setCupcake(data))
  }, [])
  
  
  return (
    <section>
      <h1>Cupcakes</h1>
      <section>
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
              />
            )
          :
            <p>CARGANDO...</p> 
        }
      </section>
    </section>
  )
}

export default CupCakes