const FontPreview = (props) => {
  const { textPreview, textSize, font } = props

  return (
    <div>
      <p
        style={{
          fontSize: `${textSize}px`,
          fontFamily: `${font.family}`,
        }}
      >{textPreview}</p>
      <FontPreview font={font} textSize={textSize} textPreview={textPreview} />
    </div>
  );
}

export default FontPreview