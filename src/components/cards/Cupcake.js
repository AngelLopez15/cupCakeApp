const Cupcake = ( props ) => {
  
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

export default Cupcake;