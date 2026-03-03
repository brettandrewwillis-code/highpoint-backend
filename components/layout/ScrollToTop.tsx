import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    // If there is a hash, let the browser or a specific handler handle it
    // We only scroll to top if there is NO hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      // Small timeout to allow the new page to render before scrolling to hash
      const hash = window.location.hash;
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname]);

  return null;
}
