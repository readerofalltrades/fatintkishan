import "./Figure.css";

function Figure({ src, alt, caption }) {
  return (
    <figure className="figure">
      <img src={src} alt={alt} className="figure-img" />
      {caption && <figcaption className="figure-caption">{caption}</figcaption>}
    </figure>
  );
}

export default Figure;
