import "./PortfolioItem.scss";
type PortfolioProps = {
  alt: string;
  //   src: {
  //     [key: string]: string;
  //   };
  src: string;
  name: string;
  stack: string;
  demo: string;
  repo: string;
  description: string[];
};

export function PortfolioItem({
  alt,
  src,
  name,
  stack,
  demo,
  repo,
  description,
}: PortfolioProps) {
  return (
    <div className="portfolio__item">
      <div className="portfolio__imageWrapper">
        <img className="portfolio__image" alt={alt} src={src} />
      </div>
      <div className="portfolio__info">
        <div className="portfolio__about">
          <h3 className="portfolio__header">{name}</h3>
          <p className="portfolio__stack">
            {" "}
            Технологии: <span className="portfolio__skill">{stack}</span>
          </p>
          <ul className="portfolio__description">
            {description.map((item) => (
              <li className="portfolio__list" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="portfolio__links">
          <a href={demo} className="portfolio__link">
            Демо
          </a>
          <a href={repo} className="portfolio__link">
            Гитхаб
          </a>
        </div>
      </div>
    </div>
  );
}
