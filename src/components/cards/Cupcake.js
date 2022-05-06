const Cupcake = ( props ) => {
  
  const { 
    descripcion, 
    sabor, 
    color, 
    precio 
  } = props;

  return (
    <div>
      <p>{ sabor }</p>
      <p>{ descripcion }</p>
      <span>{ color }</span>
      <span>{ precio }</span>
    </div>
  )
}

export default Cupcake;