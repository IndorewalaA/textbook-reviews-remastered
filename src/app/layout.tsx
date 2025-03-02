"use client";
import './globals.css';
import NavBar from './components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light-brown">
        <NavBar/>
        {children}
      </body>
    </html>
  );
}