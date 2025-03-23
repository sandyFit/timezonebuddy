import React from "react";
import { Chart, ChartSeries, ChartSeriesItem } from "@progress/kendo-react-charts";
import teamData from "../../data/team";
import { SvgIcon } from '@progress/kendo-react-common';
import { clockIcon } from '@progress/kendo-svg-icons';

const PieChart = () => {
    // Group members by timezone and count them
    const timeZoneCounts = teamData.reduce((acc, { timeZone }) => {
        acc[timeZone] = (acc[timeZone] || 0) + 1;
        return acc;
    }, {});

    // Convert object to array for the chart
    const chartData = Object.entries(timeZoneCounts).map(([category, value]) => ({
        category,
        value,
    }));

    return (
        <div className="pie-chart">
            <div className="chart-header">
                <SvgIcon icon={clockIcon} size="xlarge" color="currentColor" />
                <h5 className="chart-title">
                    Workforce Across Time Zones
                </h5>
            </div>
            <Chart transitions={false}> {/* 🚀 Disable re-animation */}
                <ChartSeries>
                    <ChartSeriesItem type="pie" data={chartData} />
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default PieChart;
