import propTypes from 'prop-types'

const TitleAndLinksProject = ({ project }) => {
  const { titulo, url, codigo } = project

  return (
    <div className="relative py-2 flex justify-center items-center">
      <a
        className="font-bold text-blue-400 text-center mx-auto text-xl"
        target="_blank"
        href={url}
        rel="noreferrer"
      >
        {titulo}{' '}
        <i className="text-sm fa-solid fa-link dark:text-letraDark text-fondos"></i>
      </a>
      <a
        target="_blank"
        className="absolute top-2 right-0 text-xl block text-letra"
        href={codigo}
        rel="noreferrer"
      >
        <i className="dark:text-letraDark fa-brands fa-github"></i>
      </a>
    </div>
  )
}
TitleAndLinksProject.propTypes = {
  project: propTypes.object.isRequired
}
export default TitleAndLinksProject
