'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Sobre Mí
          </h1>
          <p className="mt-4 text-xl text-indigo-600 font-semibold">
            Desarrollador Full Stack especializado en Blockchain
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="prose prose-lg mx-auto mb-12 dark:prose-invert">
          {/* Perfil Profesional */}
          <div className="bg-white shadow-sm rounded-xl p-8 mb-8 dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              💻 Experiencia Profesional
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Como desarrollador Full Stack especializado en blockchain, he desarrollado aplicaciones 
              descentralizadas (dApps) y herramientas de gestión para redes Ethereum. Mi experiencia 
              abarca el desarrollo full-stack con React y Next.js, junto con la implementación de 
              smart contracts en Ethereum y la integración de tecnologías Web3.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Me destaco en la creación de soluciones que combinan tecnologías blockchain con 
              aplicaciones empresariales tradicionales, siempre enfocándome en la seguridad, 
              escalabilidad y experiencia de usuario.
            </p>
          </div>

          {/* Proyectos Destacados */}
          <div className="bg-white shadow-sm rounded-xl p-8 mb-8 dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🚀 Proyectos Destacados
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Sistema de Trazabilidad para Aceite de Oliva
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Desarrollé una dApp completa para rastrear y verificar el proceso de producción 
                  y distribución de aceite de oliva. El sistema incluye escaneado de códigos QR, 
                  visualización de la cadena de suministro mediante mapas interactivos, y control 
                  de acceso basado en roles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Herramienta de Gestión de Red Ethereum
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creé una aplicación completa para la gestión de redes Ethereum personalizadas, 
                  implementando un frontend responsive con React y Vite, integración con blockchain 
                  mediante ethers.js y Web3, y un robusto backend en Node.js con Oracle DB.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Infraestructura y DevOps
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Diseñé e implementé una infraestructura completa basada en Docker para todos mis proyectos, 
                  incluyendo este portfolio. La arquitectura incluye contenedores para diferentes servicios, 
                  un servidor Nginx para el balanceo de carga y enrutamiento, y configuración HTTPS con 
                  certificados SSL. Todo el sistema está orquestado mediante Docker Compose, garantizando 
                  un despliegue consistente y seguro.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Faucet Web3
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Desarrollé un faucet blockchain utilizando React, Node.js y bibliotecas Web3, 
                  permitiendo la interacción con smart contracts y la distribución de tokens de prueba.
                </p>
              </div>
            </div>
          </div>

          {/* Enfoque Profesional */}
          <div className="bg-white shadow-sm rounded-xl p-8 dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🎯 Enfoque Profesional
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Mi enfoque profesional se centra en:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-2">
              <li>Desarrollo de soluciones blockchain empresariales</li>
              <li>Creación de dApps con interfaces intuitivas y atractivas</li>
              <li>Implementación de smart contracts seguros y eficientes</li>
              <li>Diseño y gestión de infraestructura con Docker y Nginx</li>
              <li>Automatización de despliegues y configuración de servidores</li>
              <li>Integración de tecnologías Web3 con sistemas tradicionales</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              Actualmente, estoy expandiendo mis conocimientos en el ecosistema Solana y Rust, 
              mientras continúo desarrollando soluciones innovadoras en el espacio Web3.
            </p>
          </div>
        </div>

        {/* Botón de Contacto */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Conecta Conmigo
          </a>
        </div>
      </div>
    </div>
  );
}
