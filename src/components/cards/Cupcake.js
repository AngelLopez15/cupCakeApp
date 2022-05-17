import PropTypes from "prop-types";

const Cupcake = ( props ) => {
  // Los propTypes nos permiten decirle al componente que tipo de dato sera nuestra prop
  const { 
    descripcion, 
    sabor, 
    color,
    precio,
    imagen, 
  } = props;

  return (
    <div className="bg-slate-100 m-8 w-96 rounded-lg shadow-lg shadow-cyan-500/50">
      <img src={ imagen } alt={ sabor } className="rounded-lg" />
      <div className="text-center my-5">
        <p>Sabor: { sabor }</p>
        <p>Descripcion: { descripcion }</p>
        <div className="flex  flex-col">
          <span>Color: { color }</span>
          <span>Precio: { precio }</span>
        </div>
      </div>
    </div>
  )
}

// Podemos desestructurar los tipos de PropTypes para no repetir tanto PropTypes
// isRequired nos sirve para decirle a la app que valores son obligatorios
Cupcake.propTypes = {
  descripcion: PropTypes.string.isRequired,
  sabor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  precio: PropTypes.number,
  imagen: PropTypes.string,
}

// Poner Default props
Cupcake.defaultProps = {
  imagen: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  precio: 0,
}

export default Cupcake;