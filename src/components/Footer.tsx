"use client";
import { useEffect } from "react";

const AdsterraBanner = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : '1bcda6001311acdb1c21b24f4a0864b5',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src =
      "https://welcomingexpulsion.com/1bcda6001311acdb1c21b24f4a0864b5/invoke.js";
    script2.async = true;

    const adContainer = document.getElementById("adsterra-container");

    if (adContainer) {
      adContainer.appendChild(script1);
      adContainer.appendChild(script2);
    }

    return () => {
      if (adContainer) {
        adContainer.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      id="adsterra-container"
      style={{
        maxWidth: "468px",
        margin: "15px auto",
        textAlign: "center",
      }}
    />
  );
};

export default AdsterraBanner;

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  // Hide footer on watch pages for immersive video experience
  if (pathname?.startsWith("/watch")) {
    return null;
  }

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-3">
          {/* API Promo */}
          {/* <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://lynk.id/kangdims" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 text-primary hover:underline font-semibold"
                >
                  Nonton Gratis Full Episodea
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
          </ul> */}

          <p className="text-sm text-muted-foreground text-center">
            Gratis Tanpa :{" "}
            <a 
                  href="https://kangdims.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 text-primary hover:underline font-semibold"
                >
                  kangdrama
                  <ExternalLink className="w-3 h-3" />
                </a>
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/80 text-center font-medium">
            © {new Date().getFullYear()} Made with ❤️ by kangdims
          </p>
        </div>
      </div>
    </footer>
  );
}
