import "./PortfolioItem.scss";
type PortfolioProps = {
  alt: string;
  srcPhone: string;
  srcDesktop: string;
  name: string;
  stack: string;
  demo?: string;
  repo?: string;
  websait?: string;
  description: string[];
  color: string;
};

export function PortfolioItem({
  alt,
  srcPhone,
  srcDesktop,
  name,
  stack,
  demo,
  repo,
  description,
  color,
  websait,
}: PortfolioProps) {
  return (
    <div className="portfolio__item ">
      <div className={`portfolio__photos portfolio__photos_${color}`}>
        <div className="portfolio__desktopWrapper">
          <img className="portfolio__desktop" alt={alt} src={srcDesktop} />
        </div>
        <div className="portfolio__phoneWrapper">
          <img className="portfolio__phone" alt={alt} src={srcPhone} />
        </div>
      </div>
      <div className="portfolio__infoWrapper">
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
            {demo && (
              <a
                href={demo}
                className="portfolio__link"
                target="_blank"
                rel="noopener noreferrer">
                Демо
              </a>
            )}
            {websait && (
              <a
                href={websait}
                className="portfolio__link"
                target="_blank"
                rel="noopener noreferrer">
                Сайт
              </a>
            )}
            {repo && (
              <a
                href={repo}
                className="portfolio__link"
                target="_blank"
                rel="noopener noreferrer">
                Гитхаб
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
