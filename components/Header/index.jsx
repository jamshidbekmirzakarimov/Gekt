import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/icons/header-logo.svg";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <>
      <header className={`site-header  ${isScrolled ? "header-scroll" : ""}`}>
        <div className="container">
          <div className="site-header-wrapper">
            <Link className="site-header-link" href="/">
              <Image className="site-header-logo" src={Logo} alt="logo" width={100} height={70} />
            </Link>
            <nav className="site-nav">
              <ul className="site-nav-list">
                <li className="site-nav-item">
                  <a className="site-nav-link" href="#">
                    Главная
                  </a>
                </li>
                <li className="site-nav-item">
                  <a className="site-nav-link" href="#">
                    Услуги
                  </a>
                </li>
                <li className="site-nav-item">
                  <a className="site-nav-link" href="#">
                    О нас
                  </a>
                </li>
                <li className="site-nav-item">
                  <a className="site-nav-link" href="#">
                    Отзывы
                  </a>
                </li>
                <li className="site-nav-item">
                  <a className="site-nav-link" href="#">
                    Клиенты
                  </a>
                </li>
                <li className="site-nav-item">
                  <a className="site-nav-link" href="#">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <button className="site-header-btn">Позвонить</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
