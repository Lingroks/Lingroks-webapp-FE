"use client";
import Script from "next/script";
import { useEffect } from "react";
import { useUser } from '../../context/UserContext';

declare global {
  interface Window {
    amplitude: {
      getInstance: () => {
        setUserId: (id: string) => void;
        setUserProperties: (properties: { email: string; name: string; created_at: string }) => void;
      };
    };
  }
}

export default function AmplitudeTracker() {
    const {user} = useUser();
    useEffect(() => {
        if (typeof window !== "undefined" && window.amplitude) {
          if (user?.id) {
            window.amplitude.getInstance().setUserId(user.id);
            window.amplitude.getInstance().setUserProperties({
              email: user.email,
              name: `${user.name || ""} ${user.lastName || ""}`.trim(),
              created_at: user.created_at,
            });
          }
        }
      }, [user]);

      return (
        <Script id="amplitude-init" strategy="afterInteractive">
          {`
            window.amplitude.init('911d66f270261720f85ea7a0b6f7780b', {
              fetchRemoteConfig: true,
              autocapture: true
            });
          `}
        </Script>
      );
}