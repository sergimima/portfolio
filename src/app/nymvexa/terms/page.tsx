import type { Metadata } from 'next';
import { Bloque, Pagina } from '../Legal';

export const metadata: Metadata = {
  title: 'nymvexa — Terms of Service',
  description: 'Terms of Service of nymvexa and its desktop publishing tool.',
};

export default function TermsPage() {
  return (
    <Pagina titulo="Terms of Service · Términos del servicio">
      <Bloque
        idioma="en"
        titulo="Terms of Service"
        actualizado="Last updated: 12 October 2026"
        secciones={[
          {
            titulo: 'Scope',
            parrafos: ['These terms apply to the nymvexa pages of this website and to the nymvexa desktop publishing tool ("the tool").'],
          },
          {
            titulo: 'What nymvexa is',
            parrafos: ['nymvexa publishes short videos and articles about myths and legends. The tool is used only by the channel owner to prepare videos and publish them to the owner\'s own accounts (YouTube, TikTok and Instagram).'],
          },
          {
            titulo: 'Use of the tool',
            parrafos: [],
            lista: [
              'The tool is not offered to the public. Only the channel owner connects their accounts to it.',
              'Content is published only when the owner explicitly chooses to publish it, and only to the owner\'s own accounts.',
              'Use of each platform is also subject to that platform\'s own terms (for example, TikTok\'s Terms of Service).',
            ],
          },
          {
            titulo: 'Content',
            parrafos: ['The videos and texts are created by nymvexa, partly with artificial-intelligence tools, and are marked as AI-generated where the platform allows it. Stories are retellings of traditional legends for entertainment and cultural purposes.'],
          },
          { titulo: 'Liability', parrafos: ['The website and the content are provided "as is", without warranties of any kind.'] },
          { titulo: 'Contact', parrafos: ['nymvexa@gmail.com'] },
        ]}
      />
      <Bloque
        idioma="es"
        titulo="Términos del servicio"
        actualizado="Última actualización: 12 de octubre de 2026"
        secciones={[
          {
            titulo: 'Alcance',
            parrafos: ['Estos términos se aplican a las páginas de nymvexa de esta web y a su herramienta de publicación de escritorio («la herramienta»).'],
          },
          {
            titulo: 'Qué es nymvexa',
            parrafos: ['nymvexa publica vídeos cortos y artículos sobre mitos y leyendas. La herramienta solo la usa el titular del canal para preparar los vídeos y publicarlos en sus propias cuentas (YouTube, TikTok e Instagram).'],
          },
          {
            titulo: 'Uso de la herramienta',
            parrafos: [],
            lista: [
              'La herramienta no se ofrece al público. Solo el titular del canal conecta sus cuentas.',
              'Solo se publica cuando el titular lo decide expresamente, y solo en sus propias cuentas.',
              'El uso de cada plataforma se rige también por sus propios términos (por ejemplo, los de TikTok).',
            ],
          },
          {
            titulo: 'Contenido',
            parrafos: ['Los vídeos y textos los crea nymvexa, en parte con herramientas de inteligencia artificial, y se marcan como generados con IA donde la plataforma lo permite. Las historias son versiones de leyendas tradicionales con fines de entretenimiento y divulgación.'],
          },
          { titulo: 'Responsabilidad', parrafos: ['La web y el contenido se ofrecen «tal cual», sin garantías de ningún tipo.'] },
          { titulo: 'Contacto', parrafos: ['nymvexa@gmail.com'] },
        ]}
      />
    </Pagina>
  );
}
