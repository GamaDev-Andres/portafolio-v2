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
export default ArticleDescription
