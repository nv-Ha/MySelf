import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
    {
        subject: 'HTML',
        A: 90,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'CSS',
        A: 90,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'JavaScript',
        A: 75,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'ReactJS',
        A: 65,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'English',
        A: 30,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Adobe',
        A: 60,
        B: 130,
        fullMark: 150,
    },
];

function Charts() {
    return (
        <RadarChart cx={500} cy={290} outerRadius={150} width={1000} height={500} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#FF4A57" fill="#FF4A57" fillOpacity={0.7} />
        </RadarChart>
    );
}

export default Charts;
