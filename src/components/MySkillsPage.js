import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 25vw;
height: 80vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;

${Main}:hover &{
    color:${props => props.theme.body};
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />

            {/* Technical Skills Card */}
            <Main>
<Title>
    <Design width={40} height={40} /> Technical Skills
</Title>
<Description>
Expertise in full-stack development with a focus on emerging technologies and systems integration.
</Description>
<Description>
<strong>Core Competencies</strong>
<ul>
    <li>AI/ML (TensorFlow, PyTorch)</li>
    <li>Robotics (ROS, Arduino)</li>
    <li>IoT & Embedded Systems</li>
    <li>Computer Vision (OpenCV, YOLO)</li>
</ul>
</Description>
<Description>
<strong>Development Tools</strong>
<ul>
    <li>VS Code, Git, Docker</li>
    <li>AWS IoT, Azure Cloud</li>
    <li>3D Printing & CAD</li>
</ul>
</Description>
            </Main>

            {/* Soft Skills Card */}
            <Main>
<Title>
    <Develope width={40} height={40} /> Soft Skills
</Title>
<Description>
Strong leadership capabilities with a focus on collaborative problem-solving and innovation.
</Description>
<Description>
<strong>Team Dynamics</strong>
<ul>
    <li>Leadership & Collaboration</li>
    <li>Conflict Resolution</li>
    <li>Cross-functional Communication</li>
</ul>
</Description>
<Description>
<strong>Professional Attributes</strong>
<ul>
    <li>Strategic Planning</li>
    <li>Adaptive Learning</li>
    <li>Creative Problem-solving</li>
</ul>
</Description>
            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage 