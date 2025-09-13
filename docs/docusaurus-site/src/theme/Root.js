import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    // Add copy functionality to hash links
    const addCopyFunctionality = () => {
      const hashLinks = document.querySelectorAll('.hash-link');
      
      hashLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
          e.preventDefault();
          
          const url = new URL(window.location);
          url.hash = link.getAttribute('href');
          
          try {
            await navigator.clipboard.writeText(url.toString());
            
            // Add copied class for visual feedback
            link.classList.add('copied');
            setTimeout(() => {
              link.classList.remove('copied');
            }, 2000);
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
        });
      });
    };

    // Initial setup
    addCopyFunctionality();

    // Re-setup when navigating between pages
    const observer = new MutationObserver(() => {
      addCopyFunctionality();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}