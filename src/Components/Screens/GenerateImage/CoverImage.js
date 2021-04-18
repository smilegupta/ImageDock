const CoverImage = ({ pattern, textSize, textColor, title, bgColor }) => {
  return (
    <div
      className={`cover ${pattern} `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontSize: `${textSize}px`,
      }}
    >
      <div className="row h-100">
        <div className="col-sm-12 my-auto">
          <p className="text-left">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
