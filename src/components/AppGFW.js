import { useState } from 'react'
//import Font from './Font'
import Select from './Select'
import TextPreview from './TextPreview'
import TextSize from './TextSize'
import Fonts from './Fonts'

const AppGFW = (props) => {

  const [select, setSelect] = useState('recent')
  const [url, setUrl] = useState("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDFeVtdBdgyhinW5vdSv-epWGSdHeN457E&sort=date");

  return (
    <div>
      <Select setSelect={setSelect} />
      <TextPreview />
      <TextSize />
      <Fonts select={select} url={url} setUrl={setUrl} />
    </div>
  );
}
export default AppGFW