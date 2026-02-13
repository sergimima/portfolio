'use client';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import Navbar from '@/components/layout/Navbar';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <ThemeToggle />
    </ThemeProvider>
  );
}
