import PropTypes from 'prop-types'

const ArticleDescription = ({ obj, title }) => {
  return (
    <article className="flex flex-col gap-2">
      <p>
        <span className="text-blue-400 font-medium">{title}</span>
        {obj.parrafo1}
      </p>
      <p>{obj.parrafo2}</p>
    </article>
  )
}
ArticleDescription.propTypes = {
  obj: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}
export default ArticleDescription
