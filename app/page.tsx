import Footer from "@/components/Footer";
import Carousel, { Slide } from "@/components/Carousel";

// Fotos reais em public/gallery/. Adicione "caption" em cada slide se
// quiser uma legenda por baixo da foto (ex: local, data, nome do show).
const SLIDES: Slide[] = [
  { src: "/gallery/Rodrigo-1.jpg", label: "Foto 1" },
  { src: "/gallery/Rodrigo-2.jpg", label: "Foto 2" },
  { src: "/gallery/Rodrigo-4.jpg", label: "Foto 3" },
];

export default function Home() {
  return (
    <>
      <Carousel slides={SLIDES} />
      <Footer hideNav />
    </>
  );
}
