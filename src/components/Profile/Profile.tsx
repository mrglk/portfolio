import "./Profile.scss";
import photo from "../../assets/img/photo.jpeg";

export function Profile() {
  return (
    <div className="profile">
      <div className="profile__photoWrapper">
        <img className="profile__photo" alt="Мария Галко" src={photo}></img>
      </div>
      <div className="profile__info">
        <h1 className="profile__name">Мария Галко</h1>
        <p className="profile__title">Frontend-разработчица JS/React</p>
        <div className="profile__buttonWrapper">
          <a
            className="profile__button"
            href="https://drive.google.com/file/d/1eODbWckO4B1mR8cypgfQxXwZbloLFRBD/view">
            Скачать резюме
          </a>
        </div>
      </div>
    </div>
  );
}
