"use client";
import React from "react";
import { useState } from "react";

export default function ConnectWallet() {
  const [connected, setConnected] = useState<boolean>(false);

  if (typeof window === "undefined") return null;
  const provider = (window as any).phantom?.solana;
  const { solana } = window as any;

  const connectWallet = () => {
    if (!provider?.isPhantom || !solana.isPhantom) {
      console.log("Phantom is not installed");
      return;
    }

    provider
      .connect()
      .then(() => {
        setConnected(true);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };
  const disconnectWallet = () => {
    if (!provider?.isPhantom || !solana.isPhantom) {
      console.log("Phantom is not installed");
      return;
    }

    provider
      .disconnect()
      .then(() => {
        setConnected(false);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <div>
          {!connected ? (
            <button
              onClick={() => {
                connectWallet();
              }}
              type='button'
            >
              Connect Wallet
            </button>
          ) : (
            <button
              type='button'
              onClick={() => {
                disconnectWallet();
              }}
            >
              Disconnect Wallet
            </button>
          )}
        </div>
      </div>
    </>
  );
}
