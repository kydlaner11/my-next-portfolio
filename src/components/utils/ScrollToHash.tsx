import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      const timeoutId = setTimeout(() => {
        // 1. Lakukan scroll
        element.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });

        // 2. Cleanup URL: Hapus #kontak dari address bar setelah scroll dimulai
        // replaceState mengubah URL tanpa mentrigger navigasi ulang atau scroll ulang
        window.history.replaceState(null, "", pathname);
        
      }, 150); // Delay sedikit lebih lama agar transisi scroll terlihat mantap

      return () => clearTimeout(timeoutId);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;