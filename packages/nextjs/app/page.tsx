"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">StarStake</span>
            <span className="block text-xl font-bold">(By Juan Rea)</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

          <div className="flex items-center flex-col flex-grow pt-10">
            <div className="px-5">
              <h1 className="text-center mb-6">
                <span className="block text-4xl font-bold">🔏 Decentralized Staking App</span>
              </h1>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/starfish.png"
                  width="727"
                  height="231"
                  alt="Comical starfish holding money underwater"
                  className="rounded-xl border-4 border-primary"
                />
                <div className="max-w-3xl">
                  <p className="text-center text-lg font-bold">
                    🛠️ Welcome to StarStake: A Decentralized Staking Platform
                  </p>
                  <p className="text-center text-lg">
                    A foundational aspect of blockchain is the ability to build trustless systems that allow users to
                    interact seamlessly without intermediaries. This simple decentralized app (DApp) highlights
                    Ethereum&apos;s capability to enable collaborative financial efforts.
                  </p>
                  <p className="text-center text-lg font-bold">💡 How It Works:</p>
                  <ul className="list-disc pl-5 text-lg mt-4 space-y-2">
                    <li>Users can stake Ether into a smart contract, pooling their funds towards a shared goal.</li>
                    <li>
                      If the required conditions are met, the pooled funds are transferred to a secondary contract,
                      achieving the collective funding goal.
                    </li>
                    <li>
                      If the conditions aren&apos;t met, users can safely withdraw their stakes, guaranteeing
                      transparency and fairness.
                    </li>
                  </ul>
                  <p className="text-center text-lg font-bold">🌟 Why StarStake? This DApp showcases:</p>
                  <ul className="list-disc pl-5 text-lg mt-4 space-y-2">
                    <li>Decentralized Finance (DeFi) principles -- enables trustless coordination.</li>
                    <li>Smart Contract Automation -- ensures code is law.</li>
                    <li>A clean and responsive Web3 User Interface -- built with React, Next.js, and Tailwind CSS.</li>
                  </ul>
                  <p className="text-center text-lg">
                    🚀 StarStake is deployed on Sepolia Testnet and is a product of my interest in DeFi, blockchain,
                    smart-contract development, and the Web3 space. This is a simple but clear example of
                    Ethereum&apos;s power! Check out{" "}
                    <a href="https://ethereum.org/" target="_blank" rel="noreferrer" className="underline">
                      Ethereum.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
