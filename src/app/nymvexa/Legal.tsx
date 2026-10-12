import Link from 'next/link';

export type Seccion = { titulo: string; parrafos: string[]; lista?: string[] };

export function Bloque({ idioma, titulo, actualizado, secciones }: {
  idioma: string;
  titulo: string;
  actualizado: string;
  secciones: Seccion[];
}) {
  return (
    <section lang={idioma} className="bg-white shadow-sm rounded-xl p-8 mb-8 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{titulo}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{actualizado}</p>
      {secciones.map(s => (
        <div key={s.titulo} className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{s.titulo}</h3>
          {s.parrafos.map(p => (
            <p key={p} className="text-gray-600 dark:text-gray-300 mb-2">{p}</p>
          ))}
          {s.lista && (
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
              {s.lista.map(x => <li key={x}>{x}</li>)}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

export function Pagina({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">nymvexa</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">{titulo}</h1>
        </div>
        {children}
        <nav className="flex flex-wrap justify-center gap-6 text-indigo-600 font-medium">
          <Link href="/nymvexa">nymvexa</Link>
          <Link href="/nymvexa/terms">Terms of Service · Términos</Link>
          <Link href="/nymvexa/privacy">Privacy Policy · Privacidad</Link>
        </nav>
      </div>
    </div>
  );
}
