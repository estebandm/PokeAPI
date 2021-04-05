/* 
import React from 'react';
import { Line } from 'react-chartjs-2';

function Graphics(props) {
    const data = {
        labels: ["Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"],
        datasets: [
            {
                label: "Horas de Visualización por Mes",
                fill: false,
                backgroundColor: 'rgba(73,155,234,1)',
                borderColor: 'rgba(73,155,234,1)',
                pointBorderColor: 'rgba(73,155,234,1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(73,155,234,1)',
                pointHoverBorderColor: 'rgba(73,155,234,1)',
                pointRadius: 1,
                pointHitRadius: 10,
                data: [0.17, 19, 156, 357, 565, 1149]
            }
        ]
    }
    return (
        <div className="containerGrafica">
            <Line data={data} />
        </div>
    );
}

export default Graphics; */
 
import React from 'react'
import { Chart } from 'react-charts'

export default function StatsGraph() {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return(
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
            style={{
                width: '400px',
                height: '300px'
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )
} 