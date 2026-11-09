import Nav from "./Nav";
import SocialIcons from "./SocialIcons";

export default function Footer({ hideNav = false, showSocial = false }: { hideNav?: boolean; showSocial?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="container">
        {showSocial ? (
          <div className="nav-right">
            {!hideNav && <Nav />}
            <SocialIcons />
          </div>
        ) : (
          !hideNav && <Nav />
        )}
        <p className="meta">
          © {new Date().getFullYear()} Rodrigo Tavares — rodrigotavares.com.br
        </p>
      </div>
    </footer>
  );
}
