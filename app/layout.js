// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Biztrade | E-commerce",
  description: "Biztrade ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
