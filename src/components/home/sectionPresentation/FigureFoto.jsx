import miFoto from '../../../assets/img/foto_yo.jpg'

const FigureFoto = () => {
  return (
    <figure className="aspect-square p-4 max-w-xs mx-auto rounded-full">
      <img
        className="w-full object-cover object-top  shadow-2xl shadow-blue-200 h-full rounded-full"
        src={miFoto}
        alt="foto Andres Gama"
      />
    </figure>
  )
}

export default FigureFoto
