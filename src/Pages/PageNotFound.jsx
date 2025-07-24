import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const PageNotFound = () => {
    const containerRef = useRef(null);
    const numberRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        
        tl.fromTo(numberRef.current, 
            { scale: 0, rotation: 180, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "bounce.out" }
        )
        .fromTo(textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            "-=0.3"
        );

        gsap.to(numberRef.current, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }, []);

    return (
        <div ref={containerRef} className="page-not-found">
            <div ref={numberRef} className="error-number">404</div>
            <div ref={textRef} className="error-text">
                <h2>Page Not Found</h2>
                <p>The page you're looking for doesn't exist.</p>
            </div>
            
            <style jsx>{`
                .page-not-found {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    text-align: center;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    font-family: Arial, sans-serif;
                }
                
                .error-number {
                    font-size: 8rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                }
                
                .error-text h2 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                }
                
                .error-text p {
                    font-size: 1.2rem;
                    opacity: 0.9;
                }
            `}</style>
        </div>
    );
};

export default PageNotFound;