import FontPreview from './FontPreview'
const Font = ({ font }) => {
  const { family, variants, category } = font

  return (
    /*<FontPreview/>*/
    <div className="col-lg-6 mb-4">
      <article className="card p-3 mb-4 shadow-sm border p-3 h-100">
        <h2 className="h6 d-flex aling-items-center justify-content-between">
          <span>{(family)}</span>
          <small>{variants.length} variant(s)</small>
        </h2>
        <p className="mb-0">
          <span className="badge bg-dark text-uppercase">{category}</span>
        </p>
        <FontPreview />
        <a className="text-danger" href={`https://fonts.google.com/specimen/${family}`}>Voir sur Goole Fonts</a>
      </article>
    </div>
  )
}

export default Font