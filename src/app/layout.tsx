import Link from "next/link";
import "./globals.css";
import Providers from "./providers";
import { APP_TITLE } from "@/constants";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head />
    <body>
      <Providers>
        <header className="w-full py-4 flex flex-col items-center justify-center">
          <div className="w-full px-4 md:max-w-6xl">
            <h1 className="text-heading text-4xl font-bold">
              <Link href="/">{APP_TITLE}</Link>
            </h1>
          </div>
        </header>
        <main className="px-4 pb-12 pt-4 w-full flex flex-col items-center">
          <div className="md:max-w-3xl">{children}</div>
        </main>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
