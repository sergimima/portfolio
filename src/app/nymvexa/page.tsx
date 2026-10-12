import type { Metadata } from 'next';
import { Bloque, Pagina } from './Legal';

export const metadata: Metadata = {
  title: 'nymvexa — myths and legends',
  description: 'nymvexa publishes short videos and articles about myths and legends.',
};

export default function NymvexaPage() {
  return (
    <Pagina titulo="Myths and legends · Mitos y leyendas">
      <Bloque
        idioma="en"
        titulo="About nymvexa"
        actualizado="Short videos and articles about myths and legends"
        secciones={[
          {
            titulo: 'What it is',
            parrafos: [
              'nymvexa tells traditional myths and legends in short narrated videos and articles, grouped in collections such as Catalan, Galician or Basque mythology.',
              'The videos are produced with a desktop tool used only by the channel owner, partly with artificial-intelligence tools, and are published to the owner\'s own accounts on YouTube, TikTok and Instagram.',
            ],
          },
          { titulo: 'Contact', parrafos: ['nymvexa@gmail.com'] },
        ]}
      />
      <Bloque
        idioma="es"
        titulo="Qué es nymvexa"
        actualizado="Vídeos cortos y artículos sobre mitos y leyendas"
        secciones={[
          {
            titulo: 'Qué es',
            parrafos: [
              'nymvexa cuenta mitos y leyendas tradicionales en vídeos cortos narrados y en artículos, agrupados en colecciones como la mitología catalana, la gallega o la vasca.',
              'Los vídeos se producen con una herramienta de escritorio que solo usa el titular del canal, en parte con herramientas de inteligencia artificial, y se publican en sus propias cuentas de YouTube, TikTok e Instagram.',
            ],
          },
          { titulo: 'Contacto', parrafos: ['nymvexa@gmail.com'] },
        ]}
      />
    </Pagina>
  );
}
