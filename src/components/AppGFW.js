import { useState } from 'react'
import Select from './Select'
import TextPreview from './TextPreview'
import TextSize from './TextSize'
import Fonts from './Fonts'
import FontPreview from './FontPreview'

const AppGFW = (props) => {
  const [select, setSelect] = useState('Les plus récentes')
  const [url, setUrl] = useState(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GFW_API_KEY}&sort=date`);
  const [textSize, setTextSize] = useState(20);
  const [textPreview, setTextPreview] = useState("Portez ce vieux whisky au juge blond qui fume! ? 0123456789")

  return (
    <>
      <div className="row my-5">
        <Select setSelect={setSelect} />
        <TextPreview setTextPreview={setTextPreview} textPreview={textPreview} />
        <TextSize textSize={textSize} setTextSize={setTextSize} />
        <FontPreview textSize={textSize} setTextSize={setTextSize} />
        <Fonts select={select} url={url} setUrl={setUrl} />
      </div >
    </>
  );
}

export default AppGFW