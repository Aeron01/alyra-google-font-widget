import TextPreview from './TextPreview'
import TextSize from './AppGFW'

const FontPreview = (props) => {
  const { textPreview, textSize, setTextSize } = props


  return (
    <div>
      <p
        style={{
          fontSize: `${textSize}px`,
          fontWeight: 'bold',
          fontFamily: 'Karantina',
        }}
      >Il vaut mieux vivre pour l'Empreur que vivre pour soit même.</p>
    </div>
  );
}

export default FontPreview