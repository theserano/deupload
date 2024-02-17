import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./navlink.scss";
import { TiThMenu } from "react-icons/ti";
import { useEffect, useState } from "react";

const NavLink = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [display, setDisplay] = useState(false);
  console.log(display)

  const checkWindowSize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 1210) {
      setNavMenu(true);
    } else {
        setNavMenu(false)
    }
  };

  const handleOpenNavMenu = () => {
    if(navMenu){
        setDisplay(!display);
    }
  };

  useEffect(() => {
    // Initial check on mount
    checkWindowSize();

    const handleResize = () => {
      checkWindowSize();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`nav_link_container flex w-full flex-row justify-between gap-20 ${navMenu ? 'p-0 pt-4' : 'p-2 items-center'}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {navMenu ? (
        <div className="navMenu_container">
          <div className="navMenu" onClick={handleOpenNavMenu}>
            <TiThMenu />
          </div>

          <div className={`nav_links navMenu_links flex flex-row justify-between gap-4 items-center ${display ? "nav_block" : 'nav_hidden'}`}>
            <ul className="links flex gap-10 text-sm">
              <Link className="links_pages" to="/">
                <li>Features</li>
              </Link>
              <Link className="links_pages" to="/">
                <li>Solutions</li>
              </Link>
              <Link className="links_pages" to="/">
                <li>NFT Storage</li>
              </Link>
              <Link className="links_pages" to="/">
                <li>Pricing</li>
              </Link>
              <Link className="links_pages" to="/">
                <li>Developers</li>
              </Link>
              <Link className="links_pages" to="/">
                <li>Resource</li>
              </Link>
            </ul>

            <div className="action_links flex gap-6 items-center">
              <li className="actions_links_buttonless list-none text-sm">
                App
              </li>
              <li className="actions_links_buttonless list-none text-sm">
                English
              </li>

              <Link className="sign_in_button" to="/">
                <li className="list-none">Sign in</li>
              </Link>
              <Link className="create_an_account" to="/">
                <li className="list-none">Create an account</li>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="nav_links flex flex-row justify-between gap-4 items-center">
          <ul className="links flex gap-10 text-sm">
            <Link className="links_pages" to="/">
              <li>Features</li>
            </Link>
            <Link className="links_pages" to="/">
              <li>Solutions</li>
            </Link>
            <Link className="links_pages" to="/">
              <li>NFT Storage</li>
            </Link>
            <Link className="links_pages" to="/">
              <li>Pricing</li>
            </Link>
            <Link className="links_pages" to="/">
              <li>Developers</li>
            </Link>
            <Link className="links_pages" to="/">
              <li>Resource</li>
            </Link>
          </ul>

          <div className="action_links flex gap-6 items-center">
            <li className="actions_links_buttonless list-none text-sm">App</li>
            <li className="actions_links_buttonless list-none text-sm">
              English
            </li>

            <Link className="sign_in_button" to="/">
              <li className="list-none">Sign in</li>
            </Link>
            <Link className="create_an_account" to="/">
              <li className="list-none">Create an account</li>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavLink;
