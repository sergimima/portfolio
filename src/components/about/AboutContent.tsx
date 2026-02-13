'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Sobre Mí
          </h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300">
              Soy un desarrollador blockchain y full-stack apasionado por la tecnología y la innovación.
              Me especializo en el desarrollo de aplicaciones descentralizadas (dApps) y soluciones blockchain
              que aprovechan el poder de la tecnología distribuida para resolver problemas del mundo real.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Experiencia
            </h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>Desarrollo de smart contracts en Solidity</li>
              <li>Implementación de nodos Ethereum</li>
              <li>Desarrollo full-stack con React y Node.js</li>
              <li>Integración de Web3.js y Ethers.js</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
