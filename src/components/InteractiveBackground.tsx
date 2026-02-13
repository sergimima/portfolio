'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const COLORS = {
  light: {
    primary: 'rgba(37,99,235,0.15)',    // blue-600 más suave
    secondary: 'rgba(79,70,229,0.15)',   // indigo-600 más suave
    accent: 'rgba(147,51,234,0.15)',     // purple-600 más suave
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
  },
  dark: {
    primary: 'rgba(59,130,246,0.15)',    // blue-500 más suave
    secondary: 'rgba(99,102,241,0.15)',  // indigo-500 más suave
    accent: 'rgba(168,85,247,0.15)',     // purple-500 más suave
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
  }
};

export default function InteractiveBackground() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  const colors = theme === 'dark' ? COLORS.dark : COLORS.light;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none',
      background: colors.background,
    }}>
      {/* Capa grande */}
      <motion.div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
          filter: 'blur(50px)',
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
          mixBlendMode: theme === 'dark' ? 'screen' : 'multiply'
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 60,
          mass: 1.5
        }}
      />

      {/* Capa mediana */}
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          transform: `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`,
          mixBlendMode: theme === 'dark' ? 'screen' : 'multiply'
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 90,
          mass: 1
        }}
      />

      {/* Capa pequeña */}
      <motion.div
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`,
          filter: 'blur(30px)',
          transform: `translate(${mousePosition.x - 100}px, ${mousePosition.y - 100}px)`,
          mixBlendMode: theme === 'dark' ? 'screen' : 'multiply'
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 120,
          mass: 0.5
        }}
      />

      {/* Efecto de brillo adicional */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, ${colors.primary} 0%, transparent 35%),
            radial-gradient(circle at 80% 80%, ${colors.secondary} 0%, transparent 35%),
            radial-gradient(circle at 50% 50%, ${colors.accent} 0%, transparent 35%)
          `,
          opacity: theme === 'dark' ? 0.3 : 0.4,
          filter: 'blur(100px)',
          mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
          zIndex: -1
        }} 
      />
    </div>
  );
}
