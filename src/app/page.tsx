'use client';

import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs, 
  SiMongodb, 
  SiSolidity,
  SiEthereum,
  SiWeb3Dotjs,
  SiTailwindcss,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiRust,
  SiSolana
} from 'react-icons/si';

export default function Home() {
  const skills = [
    {
      category: 'Frontend Development',
      technologies: [
        { name: 'React', icon: SiReact, level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, level: 85 },
        { name: 'JavaScript', icon: SiJavascript, level: 95 },
        { name: 'TypeScript', icon: SiTypescript, level: 80 },
        { name: 'HTML5', icon: SiHtml5, level: 95 },
        { name: 'CSS3', icon: SiCss3, level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 }
      ]
    },
    {
      category: 'Backend Development',
      technologies: [
        { name: 'Node.js', icon: SiNodedotjs, level: 85 },
        { name: 'Express', icon: SiExpress, level: 80 },
        { name: 'MongoDB', icon: SiMongodb, level: 75 }
      ]
    },
    {
      category: 'Blockchain',
      technologies: [
        { name: 'Solidity', icon: SiSolidity, level: 90 },
        { name: 'Web3.js', icon: SiWeb3Dotjs, level: 85 },
        { name: 'Ethereum', icon: SiEthereum, level: 85 },
        { 
          name: 'Rust', 
          icon: SiRust, 
          level: 40, 
          learning: true,
          description: 'En progreso'
        },
        { 
          name: 'Solana', 
          icon: SiSolana, 
          level: 35, 
          learning: true,
          description: 'En progreso'
        }
      ]
    },
    {
      category: 'DevOps & Cloud',
      technologies: [
        { name: 'Docker', icon: SiDocker, level: 85 },
        { name: 'Kubernetes', icon: SiKubernetes, level: 75 },
        { name: 'GitHub Actions', icon: SiGithubactions, level: 80 },
        { name: 'Jenkins', icon: SiJenkins, level: 75 }
      ]
    },
    {
      category: 'Inteligencia Artificial',
      technologies: [
        { name: 'TensorFlow', icon: SiTensorflow, level: 70 },
        { name: 'PyTorch', icon: SiPytorch, level: 65 },
        { name: 'OpenAI', icon: SiOpenai, level: 80 }
      ]
    }
  ];

  return (
    <main className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Hola, soy</span>
              <span className="block text-blue-600">Sergi Mias Martinez</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Desarrollador Blockchain & Full Stack
            </p>
          </motion.div>

          {/* Skills Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
              Mis Habilidades
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((skillCategory) => (
                <motion.div
                  key={skillCategory.category}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-4">
                    {skillCategory.technologies.map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="space-y-2"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <tech.icon className={`h-5 w-5 ${tech.learning ? 'text-purple-500' : 'text-blue-500'}`} />
                            <span className={`${tech.learning ? 'text-purple-700 dark:text-purple-300' : 'text-gray-700 dark:text-gray-300'}`}>
                              {tech.name}
                              {tech.learning && (
                                <span className="ml-2 text-xs text-purple-500 font-medium">
                                  {tech.description}
                                </span>
                              )}
                            </span>
                          </div>
                          <span className={`text-sm font-medium ${tech.learning ? 'text-purple-500' : 'text-blue-500'}`}>
                            {tech.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${tech.learning ? 'bg-purple-500' : 'bg-blue-500'}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
