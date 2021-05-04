import { useEffect, useState } from 'react'
import Font from './Font'

const Fonts = (props) => {
  const [fonts, setFonts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { select, url, setUrl } = props;


  useEffect(() => {
    let isCancelled = false
    const controller = new AbortController()
    setLoading(true);

    switch (select) {
      case 'recent':
        setUrl("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFeVtdBdgyhinW5vdSv-epWGSdHeN457E&sort=date")
        break;
      case 'popularity':
        setUrl("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFeVtdBdgyhinW5vdSv-epWGSdHeN457E&sort=popularity")
        break;
      case 'trending':
        setUrl("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFeVtdBdgyhinW5vdSv-epWGSdHeN457E&sort=trending")
        break;
      default:
        console.log('select error')
    }

    fetch(url) /*(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFeVtdBdgyhinW5vdSv-epWGSdHeN457E`)*/

      .then((response) => {
        console.log("don't forget me here!!!");
        return new Promise((resolved) => {
          setTimeout(() => resolved(response), 100);
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Nous n'avons pas pu lire les données, status : ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("I get data")

        if (!isCancelled) {
          console.log("I will update component")
          setFonts(() => [])
          for (let index = 0; index < 10; index++) {
            /*fonts.push(data.items[index])*/
            /*setFonts(() => fonts);*/
            setFonts((f) => [...f, data.items[index]]);
          }
          console.log(fonts)
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error.message)
        if (!isCancelled) {
          setError(error.message);
          setLoading(false);
        }
      });
    return () => {

      isCancelled = true
      controller.abort()
    }
  }, [select, url]);




  return (
    <>

      <div className="container">
        <div className="col-lg-9">
          <section className="d-flex row mb-5">
            <h2 className="mb3">
              <span className="badge bg-danger">Les plus récentes</span>
              {fonts.map((font) => {
                return <Font key={font.family} font={font} />;
              })}
            </h2>
          </section>
        </div>
      </div>
      {loading && <p className="text-center">loading...</p>}
      {error && <p className="alert alert-danger">{error}</p>}

    </>
  );
}


export default Fonts