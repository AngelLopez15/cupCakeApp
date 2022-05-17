import Servicios from "../sections/Servicios"
import CupCakes from "./CupCakes"

const Home = () => {
  return (
    <section className="home w-full p-20">
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="text-5xl font-bold text-violet-900 bg-cyan-200 p-5 rounded-lg opacity-80">Bienvenidos a el mejor sitio de CupCakes</h1>
      </div>
      <div className="pt-10">
        <CupCakes peticion="cupcakes?precio_like=30" />
      </div>
      <div className="pt-10">
        <Servicios peticion="servicios" />
      </div>
    </section>
  )
}

export default Home
