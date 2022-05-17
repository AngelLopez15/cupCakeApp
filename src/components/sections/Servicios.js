import useFetch from "../../hooks/useFetch"

function Servicios(props) {

  const { peticion } = props;

  // Cada vez que comencemos a tener logica repetida y en especial logica de los hooks
  // useState y useEffect entonces es momento de comenzar a realizar nuestros propios Hooks
  const [servicios, error] = useFetch(peticion);

  if (error) {
    return <span>Ocurrio un error</span>
  }

  if (!servicios || servicios.length === 0) {
    return <span>NO HAY SERVICIOS</span>
  }

  return (
    <div className="flex justify-between">
      {
        servicios.map(servicioItem => (
          <div key={servicioItem.id} className="w-1/3 bg-slate-200 shadow-xl rounded-md m-10 p-10" >
            <h2>{ servicioItem.nombre }</h2>
            <p>{ servicioItem.descripcion }</p>
          </div>
        ))
      }
    </div>
  )
}

export default Servicios