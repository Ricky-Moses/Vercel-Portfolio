import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Swipe = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Update currentPath when route changes
    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].screenX;
        handleSwipeGesture();
    };

    const handleSwipeGesture = () => {
        const threshold = 50;
        const delta = touchStartX.current - touchEndX.current;

        console.log("Swipe delta:", delta, "on path:", currentPath);

        if (delta > threshold) {
            console.log("Swiping Left");
            navigateToNext();
        } else if (delta < -threshold) {
            console.log("Swiping Right");
            navigateToPrev();
        }
    };


    const navigateToNext = () => {
        const paths = ['/', '/about', '/skill', '/project', '/contact'];
        const index = paths.indexOf(currentPath);
        if (index !== -1 && index < paths.length - 1) {
            navigate(paths[index + 1]);
        }
    };

    const navigateToPrev = () => {
        const paths = ['/', '/about', '/skill', '/project', '/contact'];
        const index = paths.indexOf(currentPath);
        if (index > 0) {
            navigate(paths[index - 1]);
        }
    };

    return (
        <div className='h-dvh w-dvw' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {children}
        </div>
    );
};

export default Swipe;
