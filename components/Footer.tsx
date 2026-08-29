import Nav from "./Nav";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Nav />
        <p className="meta">
          © {new Date().getFullYear()} Rodrigo Tavares — rodrigotavares.com.br
        </p>
      </div>
    </footer>
  );
}
