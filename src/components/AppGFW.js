import { useEffect, useState } from 'react'

const AppGFW = () => {
  const [fonts, setFonts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [url, setUrl] = useState(1);
  //const [hasNext, setHasNext] = useState(null)


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
            `Nous n'avons pas pu lire les registres des planètes, status : ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("I get data")
        console.log(data);
        if (!isCancelled) {
          console.log("I will update component")

          setFonts((f) => [...f, ...data.family]);
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
    </>
  );
}


export default AppGFW