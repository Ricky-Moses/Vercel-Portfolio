import React from 'react'
import { useNavigate } from 'react-router-dom'

const Swipe = ({ children }) => {
  const navigate = useNavigate();
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    const threshold = 100;
    const delta = touchStartX - touchEndX;

    if (delta > threshold) {
      navigateToNext();
    } else if (delta < -threshold) {
      navigateToPrev();
    }
  };

  const navigateToNext = () => {
    const paths = ["/", "/about", "/skill", "/project", "/contact"];
    const current = window.location.pathname;
    const index = paths.indexOf(current);
    if (index !== -1 && index < paths.length - 1) {
      navigate(paths[index + 1]);
    }
  };

  const navigateToPrev = () => {
    const paths = ["/", "/about", "/skill", "/project", "/contact"];
    const current = window.location.pathname;
    const index = paths.indexOf(current);
    if (index > 0) {
      navigate(paths[index - 1]);
    }
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  );
};

export default Swipe;
