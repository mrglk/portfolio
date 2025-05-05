import "./Profile.scss";
import photo from "../../assets/img/photo.jpg";

export function Profile() {
  return (
    <div className="profile">
      <div className="profile__photoWrapper">
        <img className="profile__photo" alt="Мария Галко" src={photo}></img>
      </div>
      <div className="profile__info">
        <h1 className="profile__name">Мария Галко</h1>
        <p className="profile__title">Frontend-разработчик JS/Vue/React</p>
        <div className="profile__buttonWrapper">
          <a
            className="profile__button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://spb.hh.ru/resume/6b823947ff0bb427a70039ed1f376e6e6b6576">
            {/* // href="https://drive.google.com/file/d/1tzVyyqxNBpPaPcjgJxg78ye_Lbca3XEX/view"> */}
            Резюме на HH
          </a>
        </div>
      </div>
    </div>
  );
}
