import "./globals.css";
import { Web3Provider } from "@/providers/wallet";

export const metadata = {
  title: "MetaSwap V3",
  description: "Next‑Gen Decentralized Exchange",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
