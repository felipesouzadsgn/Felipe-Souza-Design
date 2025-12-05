"use client";

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const SKILLS = [
    { label: 'Creativity', type: 'black' },
    { label: 'Social Media', type: 'black' },
    { label: 'Front-end', type: 'white' },
    { label: 'Branding', type: 'black' },
    { label: 'UX', type: 'white' },
    { label: 'UI', type: 'black' },
    { label: 'Motion Design', type: 'black' },
];

const GravitySkills: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);
    const bodiesRef = useRef<Map<string, Matter.Body>>(new Map());
    const elementsRef = useRef<Map<string, HTMLDivElement>>(new Map());

    useEffect(() => {
        if (!containerRef.current) return;

        const { Engine, World, Bodies, Mouse, MouseConstraint, Runner } = Matter;

        const engine = Engine.create();
        const world = engine.world;
        engineRef.current = engine;

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Walls
        const wallOptions = { isStatic: true, render: { visible: false }, friction: 0.5, restitution: 0.4 };
        const ground = Bodies.rectangle(width / 2, height + 30, width, 60, wallOptions);
        const leftWall = Bodies.rectangle(-30, height / 2, 60, height * 2, wallOptions);
        const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height * 2, wallOptions);

        World.add(world, [ground, leftWall, rightWall]);

        // Skill Bodies
        const bodies: Matter.Body[] = [];
        SKILLS.forEach((skill) => {
            const element = elementsRef.current.get(skill.label);
            if (element) {
                const { offsetWidth, offsetHeight } = element;
                const x = Math.random() * (width - 100) + 50;
                const y = -Math.random() * 400 - 50;

                const body = Bodies.rectangle(x, y, offsetWidth, offsetHeight, {
                    chamfer: { radius: offsetHeight / 2 },
                    restitution: 0.5,
                    friction: 0.4,
                    density: 0.002,
                    render: { visible: false },
                    label: skill.label
                });

                bodiesRef.current.set(skill.label, body);
                bodies.push(body);
            }
        });

        World.add(world, bodies);

        // Mouse Interaction
        const mouse = Mouse.create(container);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.2, render: { visible: false } }
        });

        mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);

        World.add(world, mouseConstraint);

        // Runner
        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);

        // Update Loop
        const updateLoop = () => {
            if (!engineRef.current) return;

            bodiesRef.current.forEach((body, label) => {
                const element = elementsRef.current.get(label);
                if (element) {
                    const { x, y } = body.position;
                    const angle = body.angle;
                    element.style.transform = `translate(${x - element.offsetWidth / 2}px, ${y - element.offsetHeight / 2}px) rotate(${angle}rad)`;
                }
            });

            requestAnimationFrame(updateLoop);
        };

        const animationId = requestAnimationFrame(updateLoop);

        // Resize Handler
        const handleResize = () => {
            if (!containerRef.current) return;
            const newWidth = containerRef.current.clientWidth;
            const newHeight = containerRef.current.clientHeight;

            Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 30 });
            Matter.Body.setPosition(leftWall, { x: -30, y: newHeight / 2 });
            Matter.Body.setPosition(rightWall, { x: newWidth + 30, y: newHeight / 2 });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            Runner.stop(runner);
            World.clear(world, false);
            Engine.clear(engine);
            engineRef.current = null;
            runnerRef.current = null;
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[450px] overflow-hidden cursor-grab active:cursor-grabbing">
            {/* Background Image */}
            <img
                src="/skills-bg.png"
                alt="Skills Background"
                className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
            />

            {/* Physics Elements */}
            <div className="absolute inset-0 z-10">
                {SKILLS.map((skill) => (
                    <div
                        key={skill.label}
                        ref={(el) => { if (el) elementsRef.current.set(skill.label, el); }}
                        className={`absolute left-0 top-0 px-5 py-2.5 rounded-full text-sm font-bold shadow-xl select-none will-change-transform cursor-grab active:cursor-grabbing transition-shadow hover:shadow-2xl
                            ${skill.type === 'white'
                                ? 'bg-white text-black'
                                : 'bg-black/90 text-white border border-white/10'
                            }`}
                        style={{ transform: 'translate(-1000px, -1000px)' }}
                    >
                        {skill.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GravitySkills;

