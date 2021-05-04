import TextPreview from './TextPreview'

const FontPreview = (props) => {
  const { fontPreview, setFontPreview } = props

  return (
    /*<p style="font-family: Karantina; font-size: 20px;" className="sample">{TextPreview}</p>*/
    <>
      <div>
        <p>{TextPreview}</p>
      </div>
    </>
  );
}

export default FontPreview