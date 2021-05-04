const Select = (props) => {
  const { select, setSelect } = props
  return (
    /*<div style="position: sticky; top: 0px;"> // cette ligne se trouve après la ligne 8
      </div>*/
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-3 mb-4">

          <label className="fw-bold mb-2" htmlFor="sort">Afficher des polices</label>
          <select id="sort" className="form-select mb-4" aria-label="select"
            onChange={(event) => setSelect(event.target.value)}>
            <option value="date">Les plus récentes</option>
            <option value="popularity">Les plus populaires</option>
            <option value="trending">Top 10 trending</option>
          </select>
        </div>
      </div>
    </div >
  );
}

export default Select