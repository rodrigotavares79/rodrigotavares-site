export type Photo = {
  src: string | null;
  label: string;
  caption?: string;
  // "tall" faz a foto ocupar duas linhas na grade — útil pra variar o ritmo visual.
  tall?: boolean;
};

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="photo-grid">
      {photos.map((photo, i) => (
        <figure className={`photo-tile ${photo.tall ? "tall" : ""}`} key={i}>
          {photo.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo.src} alt={photo.caption ?? photo.label} />
          ) : (
            <div className="photo-placeholder">
              <span className="index">{photo.label}</span>
              <span className="text-muted">[placeholder]</span>
            </div>
          )}
          {photo.caption && <figcaption>{photo.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
