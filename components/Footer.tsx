import Nav from "./Nav";

export default function Footer({ hideNav = false }: { hideNav?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="container">
        {!hideNav && <Nav />}
        <p className="meta">
          © {new Date().getFullYear()} Rodrigo Tavares — rodrigotavares.com.br
        </p>
      </div>
    </footer>
  );
}
