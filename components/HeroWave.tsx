import React, { useEffect, useRef } from 'react';

const HeroWave: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let particles: Particle[] = [];
        let animationFrameId: number;

        // Configuration
        const particleCount = 100; // Number of particles across
        const waveHeight = 50; // Height of the wave peaks
        const waveSpeed = 0.02; // Speed of the wave movement
        const particleGap = width / particleCount;

        // Resize handler
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            initialY: number;
            angle: number;
            speed: number;

            constructor(x: number, y: number, angle: number) {
                this.x = x;
                this.y = y;
                this.initialY = y;
                this.angle = angle;
                this.speed = waveSpeed;
            }

            update() {
                this.angle += this.speed;
                this.y = this.initialY + Math.sin(this.angle) * waveHeight;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            // Create a grid of particles
            for (let i = 0; i < particleCount; i++) {
                for (let j = 0; j < 20; j++) { // Depth rows
                    const x = i * (width / particleCount);
                    const y = (height / 2) + (j * 20); // Start from middle and go down
                    // Offset angle based on x and z (j) to create wave pattern
                    const angle = i * 0.1 + j * 0.2;
                    particles.push(new Particle(x, y, angle));
                }
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Initialize
        handleResize();
        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default HeroWave;
