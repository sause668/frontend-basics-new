import './globals.css';
import { geistSans, geistMono } from '@/app/lib/fonts';

export const metadata = {
  title: 'Front End Basics',
  description:
    'Resource site for HTML, CSS, JavaScript, and HTML DOM with quick references and examples.',
  icons: {
    apple: '/favicon/apple-touch-icon.png',
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-screenWhite font-body`}>
        {children}
      </body>
    </html>
  );
}
