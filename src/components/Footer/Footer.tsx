import "./Footer.scss";
import TelegramIcon from "../../assets/img/telegram.svg";
import VkIcon from "../../assets/img/vk.svg";
import GithubIcon from "../../assets/img/github.svg";

export function Footer() {
  return (
    <div className="container footer">
      <div className="container__row footer__inner">
        <div className="footer__links">
          <a href="https://t.me/mrmnvch">
            <img alt="Telegram" src={TelegramIcon} />
          </a>
          <a
            href="https://github.com/mrglk"
            target="_blank"
            rel="noopener noreferrer">
            <img alt="Github" src={GithubIcon} />
          </a>
          <a
            href="https://vk.com/mrmnvch"
            target="_blank"
            rel="noopener noreferrer">
            <img alt="Vkontakte" src={VkIcon} />
          </a>
        </div>
        <div className="footer__contacts">
          <span>+7 (981) 705-95-56</span>
          <span>mariagalko.info@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
