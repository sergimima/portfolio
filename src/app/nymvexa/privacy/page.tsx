import type { Metadata } from 'next';
import { Bloque, Pagina } from '../Legal';

export const metadata: Metadata = {
  title: 'nymvexa — Privacy Policy',
  description: 'Privacy Policy of nymvexa and its desktop publishing tool.',
};

export default function PrivacyPage() {
  return (
    <Pagina titulo="Privacy Policy · Política de privacidad">
      <Bloque
        idioma="en"
        titulo="Privacy Policy"
        actualizado="Last updated: 12 October 2026"
        secciones={[
          { titulo: 'Who we are', parrafos: ['nymvexa publishes short videos and articles about myths and legends. Contact: nymvexa@gmail.com'] },
          {
            titulo: 'The desktop publishing tool',
            parrafos: ['The nymvexa desktop tool is used only by the channel owner to publish to the owner\'s own accounts. When the owner connects a platform account (TikTok, YouTube, Instagram), the tool receives from that platform:'],
            lista: [
              'an access token and a refresh token, to publish on the owner\'s behalf;',
              'basic account information: the account ID (for TikTok, the open ID) and the username.',
            ],
          },
          {
            titulo: 'How that data is used',
            parrafos: [],
            lista: [
              'It is stored only on the owner\'s computer, in the tool\'s local files.',
              'It is used only to publish the videos the owner chooses and to show the link to each published video.',
              'It is never sold, shared with third parties, or used for advertising.',
              'The owner can disconnect at any time by revoking the app\'s access in the platform\'s account settings and by deleting the local files.',
            ],
          },
          {
            titulo: 'Website visitors',
            parrafos: [
              'These pages do not ask visitors for personal data. This website uses Google Analytics, which sets cookies and collects usage data (such as pages visited, approximate location and device) under Google\'s privacy policy. The hosting server keeps standard technical logs (such as IP address and pages visited) for security and operation.',
            ],
          },
          { titulo: 'Children', parrafos: ['nymvexa is not directed at children under 13 and does not knowingly collect their data.'] },
          { titulo: 'Changes and contact', parrafos: ['We will update this page if anything changes. Questions or deletion requests: nymvexa@gmail.com'] },
        ]}
      />
      <Bloque
        idioma="es"
        titulo="Política de privacidad"
        actualizado="Última actualización: 12 de octubre de 2026"
        secciones={[
          { titulo: 'Quiénes somos', parrafos: ['nymvexa publica vídeos cortos y artículos sobre mitos y leyendas. Contacto: nymvexa@gmail.com'] },
          {
            titulo: 'La herramienta de publicación de escritorio',
            parrafos: ['La herramienta de escritorio de nymvexa solo la usa el titular del canal para publicar en sus propias cuentas. Al conectar una cuenta (TikTok, YouTube, Instagram), la herramienta recibe de esa plataforma:'],
            lista: [
              'un token de acceso y uno de refresco, para publicar en nombre del titular;',
              'datos básicos de la cuenta: su identificador (en TikTok, el open ID) y el nombre de usuario.',
            ],
          },
          {
            titulo: 'Para qué se usan',
            parrafos: [],
            lista: [
              'Se guardan solo en el ordenador del titular, en los archivos locales de la herramienta.',
              'Se usan solo para publicar los vídeos que el titular elige y para mostrar el enlace de cada vídeo publicado.',
              'Nunca se venden, se comparten con terceros ni se usan para publicidad.',
              'El titular puede desconectarse cuando quiera retirando el acceso de la app en los ajustes de su cuenta en la plataforma y borrando los archivos locales.',
            ],
          },
          {
            titulo: 'Visitantes de la web',
            parrafos: [
              'Estas páginas no piden datos personales. Esta web usa Google Analytics, que instala cookies y recoge datos de uso (como las páginas visitadas, la ubicación aproximada y el dispositivo) según la política de privacidad de Google. El servidor guarda registros técnicos habituales (como la dirección IP y las páginas visitadas) por seguridad y funcionamiento.',
            ],
          },
          { titulo: 'Menores', parrafos: ['nymvexa no está dirigida a menores de 13 años y no recoge sus datos a sabiendas.'] },
          { titulo: 'Cambios y contacto', parrafos: ['Actualizaremos esta página si algo cambia. Dudas o solicitudes de borrado: nymvexa@gmail.com'] },
        ]}
      />
    </Pagina>
  );
}
