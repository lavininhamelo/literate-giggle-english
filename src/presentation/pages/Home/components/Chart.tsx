import React, { useEffect, useState } from 'react';

import Chart from 'react-apexcharts';

// import { Container } from './styles';

const StudyChart: React.FC = () => {
	const [options, setOptions] = useState({
		colors: ['#ffaaff', '#00BAEC', '#ffce8e'],
		tooltip: {
			theme: 'dark',
		},
		foreColor: '#CCC',

		stroke: {
			width: 3,
		},
		dataLabels: {
			enabled: false,
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.9,
				stops: [0, 90, 100],
			},
		},
		markers: {
			size: 5,
			colors: ['#FFFFFF'],
			strokeColor: ['#ffaaff', '#00BAEC', '#ffce8e'],
			strokeWidth: 3,
		},
		xaxis: {
			categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan'],
		},
	});
	const [series, setSeries] = useState([
		{
			name: 'Trained Words',
			data: [30, 10, 45, 80, 49, 40, 70, 91],
		},
		{
			name: 'Phrases to Learn',
			data: [10, 40, 25, 50, 70, 60, 52, 41],
		},
		{
			name: 'Synonym to Use',
			data: [45, 25, 10, 30, 40, 30, 32, 21],
		},
	]);

	return <Chart options={options} series={series} type="area" height="280" />;
};

export default StudyChart;
