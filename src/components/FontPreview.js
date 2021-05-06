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
    </div>
  );
}

export default FontPreview