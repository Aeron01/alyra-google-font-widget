const Font = ({ font }) => {
  const { family, variants, category } = font

  return (
    <div className="col-lg-6 mb-4">
      <article className="card p-3 mb-4 shadow">
        <h2 className="h5">{(family)}</h2>
        <p className="mb-0">
          {variants.length}<b> variant(s)</b>
        </p>
        <p className="mb-0">
          <span className="badge bg-dark text-uppercase">{category}</span>
        </p>
        <div style={{ family }}>Aperçu</div>
        <a href={`https://fonts.google.com/specimen/${family}`}>Voir sur Goole Fonts</a>
      </article>
    </div>
  )
}

export default Font