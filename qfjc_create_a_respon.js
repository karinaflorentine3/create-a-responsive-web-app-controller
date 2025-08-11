// qfjc_create_a_respon.js

// Notebook for creating a responsive web app controller

// Import dependencies
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

// Define responsive breakpoints
const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
};

// Create a custom hook for responsive layout
const useResponsiveLayout = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.mobile}px)` });
  const isTablet = useMediaQuery({ query: `(min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet}px)` });
  const isDesktop = useMediaQuery({ query: `(min-width: ${breakpoints.tablet}px)` });

  const [layout, setLayout] = useState(isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop');

  useEffect(() => {
    const handleResize = () => {
      if (isMobile) {
        setLayout('mobile');
      } else if (isTablet) {
        setLayout('tablet');
      } else {
        setLayout('desktop');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, isTablet]);

  return layout;
};

// Create a sample controller component
const AppController = () => {
  const layout = useResponsiveLayout();

  return (
    <div>
      <h1>Current layout: {layout}</h1>
      {layout === 'mobile' && <p-Mobile-only content</p>}
      {layout === 'tablet' && <p-Tablet-only content</p>}
      {layout === 'desktop' && <p-Desktop-only content</p>}
    </div>
  );
};

export default AppController;