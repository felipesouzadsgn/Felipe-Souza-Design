import React from 'react';
import ProjectCarousel from '../ProjectCarousel';
import Reveal from '../Reveal';
import SectionWrapper from '../ui/SectionWrapper';

const Projects: React.FC = () => {
    return (
        <SectionWrapper id="projects" className="bg-[#020202]">
            <Reveal>
                <ProjectCarousel />
            </Reveal>
        </SectionWrapper>
    );
};

export default Projects;
