import NavBar from "../comoponents/NavBar";
import { orbitron } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="flex flex-col px-4 py-2 min-h-screen bg-pink-50">
        <header>
          <NavBar />
        </header>
        <br />
        <main className="grow py-3">{children}</main>
        <br />
        <footer className="text-center border-t text-xs py-3 text-slate-500">
          Git hub redirect -{" "}
          <a
            href="https://github.com/Jatin-Devaiya"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            Git-Hub
          </a>
          {" "} | Deployed on Vercel
        </footer>
      </body>
    </html>
  );
}
