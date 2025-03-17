import './globals.css';
import { nunito_reg } from './components/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`light_brown ${nunito_reg.className}`}>
        {children}
      </body>
    </html>
  );
}