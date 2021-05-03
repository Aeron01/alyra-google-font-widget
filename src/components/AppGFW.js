import { useEffect, useState } from 'react'
import Font from './Fonts'

const AppGFW = () => {
  const [fonts, setFonts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [url, setUrl] = useState(1);


  useEffect(() => {
    let isCancelled = false
    const controller = new AbortController()
    setLoading(true);
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFeVtdBdgyhinW5vdSv-epWGSdHeN457E`)

      .then((response) => {
        console.log("don't forget me here!!!");
        return new Promise((resolved) => {
          setTimeout(() => resolved(response), 2000);
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
          for (let index = 0; index < 10; index++) {
            fonts.push(data.items[index])
            setFonts(() => fonts);
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
  }, [url]);




  return (
    <>
      <div className="col-lg-9">
        <div className="row mb-5">
          <h2 className="mb3">
            <span className="badge bg-danger">Les plus récentes</span>
            {fonts.map((font) => {
              return <Font key={font.family} font={font} />;
            })}
          </h2>
        </div>
      </div>
      {loading && <p className="text-center">loading...</p>}
      {error && <p className="alert alert-danger">{error}</p>}

    </>
  );
}


export default AppGFW