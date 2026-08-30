import Footer from "@/components/Footer";

// [placeholder] Substitua por shows reais quando houver algum agendado.
// Deixe a lista vazia (SHOWS = []) para mostrar o estado vazio abaixo.
const SHOWS: { data: string; local: string; cidade: string }[] = [];

export default function Shows() {
  return (
    <>
      <section className="block" style={{ paddingTop: "4rem" }}>
        <div className="container">
          <span className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="nav-dot" aria-hidden="true" /> Shows
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginTop: "0.5rem" }}>
            Agenda
          </h1>

          {SHOWS.length === 0 ? (
            <div className="empty-state">
              <strong>Nenhum show agendado no momento</strong>
              Assim que uma data for confirmada, ela aparece aqui.
            </div>
          ) : (
            <div style={{ marginTop: "2rem" }}>
              {SHOWS.map((show, i) => (
                <div className="show-row" key={i}>
                  <span className="show-date">{show.data}</span>
                  <span>{show.local} — {show.cidade}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
