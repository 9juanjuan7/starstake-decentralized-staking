import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
/*import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";*/

export const metadata = {
  title: "StarStake | Secure Staking",
  description: "Decentralized Ethereum staking platform on Sepolia Testnet.",
  icons: {
    icon: "/favicon.png", 
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "StarStake | Decentralized Staking App",
    description: "A decentralized Ethereum staking platform on Sepolia Testnet.",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://starstake-juans-projects-42cd7285.vercel.app/", // Fallback for local dev
    type: "website",
    images: [
      {
        url: "/starfish.png", // Open Graph image
        width: 1200,
        height: 630,
        alt: "StarStake - Decentralized Staking App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StarStake | Decentralized Staking App",
    description: "A decentralized Ethereum staking platform on Sepolia Testnet.",
    images: ["/starfish.png"],
  },
};


const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
