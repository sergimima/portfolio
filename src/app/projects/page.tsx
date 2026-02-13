'use client';

import ProjectCard from '@/components/ui/ProjectCard';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Sistema de Trazabilidad de Aceite de Oliva',
    description: 'Desarrollé una dApp completa para rastrear y verificar el proceso de producción y distribución de aceite de oliva. El sistema incluye escaneado de códigos QR para verificación de productos, visualización de la cadena de suministro mediante mapas interactivos Leaflet, y control de acceso basado en roles para diferentes participantes.',
    technologies: ['Next.js', 'TypeScript', 'Solidity', 'Ethers.js', 'Tailwind CSS', 'Leaflet Maps', 'QR Code'],
    imageUrl: '/images/projects/trazabilidad.png',
    demoUrl: 'https://trazabilidad.sergimima.dev/',
    consumerUrl: 'https://trazabilidad.sergimima.dev/product/6-4-1733328471',
    githubUrl: 'https://github.com/sergimima/trazabilidad',
    features: [
      'Registro y verificación de productos mediante QR',
      'Mapas interactivos para visualizar la cadena de suministro',
      'Smart contracts para garantizar la transparencia',
      'Interfaz intuitiva para todos los participantes',
      'Vista pública para consumidores finales'
    ]
  },
  {
    title: 'Herramienta de Gestión de Red Ethereum',
    description: 'Desarrollé una aplicación completa para la gestión de redes Ethereum personalizadas. La herramienta permite crear, monitorear e interactuar con nodos Ethereum, ofreciendo una interfaz intuitiva para la gestión de la red blockchain.',
    technologies: ['React', 'Node.js', 'Express', 'Oracle DB', 'ethers.js', 'Web3', 'Docker', 'Vite'],
    imageUrl: '/images/projects/ethereum-manager.png',
    demoUrl: 'https://ethnodo.sergimima.dev',
    githubUrl: 'https://github.com/sergimima/ethereum-network-manager',
    features: [
      'Frontend responsive con React y Vite',
      'Backend robusto con Node.js y Express',
      'Integración con Oracle DB para persistencia',
      'Despliegue automatizado con Docker'
    ]
  },
  {
    title: 'Faucet Web3',
    description: 'Implementé un faucet blockchain que permite a los usuarios obtener tokens de prueba para desarrollo y testing. El proyecto incluye smart contracts para la distribución de tokens y una interfaz web amigable para interactuar con ellos.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Web3.js', 'Ethers.js', 'Docker'],
    imageUrl: 'https://placehold.co/800x400/4a5568/ffffff?text=Web3+Faucet',
    demoUrl: '',
    githubUrl: 'https://github.com/codecrypto-academy/sergimima/tree/web2.5-faucet',
    features: [
      'Distribución automatizada de tokens',
      'Interfaz web intuitiva',
      'Integración con Web3',
      'Containerización con Docker'
    ]
  },
  {
    title: 'Portfolio Personal con Infraestructura DevOps',
    description: 'Este portfolio está construido con Next.js y desplegado en una infraestructura completamente dockerizada. Incluye configuración de Nginx para balanceo de carga, certificados SSL, y despliegue automatizado.',
    technologies: ['Next.js', 'TypeScript', 'Docker', 'Nginx', 'SSL', 'Tailwind CSS'],
    imageUrl: 'https://placehold.co/800x400/374151/ffffff?text=Portfolio+DevOps',
    demoUrl: 'https://sergimima.dev',
    githubUrl: '',
    features: [
      'Arquitectura basada en microservicios',
      'Configuración SSL/TLS',
      'Balanceo de carga con Nginx',
      'CI/CD automatizado'
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mis Proyectos
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Soluciones blockchain y aplicaciones web con enfoque en escalabilidad, seguridad y experiencia de usuario
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
