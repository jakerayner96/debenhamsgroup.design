import './global.css';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider';

export const metadata = {
  title: 'Debenhams Group Design System',
  description:
    'The design system for the Debenhams Group estate — Debenhams, Boohoo, BoohooMAN, PLT, Karen Millen, and more.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-brand="debenhams" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
