"use client";

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function DataViz() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up the SVG
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // Create sample data
    const data = Array.from({ length: 5 }, (_, i) => ({
      name: `Category ${i + 1}`,
      values: Array.from({ length: 20 }, (_, j) => ({
        date: new Date(2020, 0, j * 30),
        value: Math.random() * 100
      }))
    }));

    // Transform data for stacking
    const stackedData = data[0].values.map((_, i) => {
      const obj: { [key: string]: number } = {};
      data.forEach(d => {
        obj[d.name] = d.values[i].value;
      });
      return obj;
    });

    // Create scales
    const x = d3.scaleTime()
      .domain(d3.extent(data[0].values, d => d.date) as [Date, Date])
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([-50, 50])
      .range([height - margin.bottom, margin.top]);

    // Create the stack generator
    const stack = d3.stack()
      .offset(d3.stackOffsetWiggle)
      .keys(data.map(d => d.name));

    // Create the area generator
    const area = d3.area<d3.SeriesPoint<{ [key: string]: number }>>()
      .x((d, i) => x(data[0].values[i].date))
      .y0(d => y(d[0]))
      .y1(d => y(d[1]))
      .curve(d3.curveBasis);

    // Create a color scale
    const color = d3.scaleOrdinal<string>()
      .domain(data.map(d => d.name))
      .range([
        '#4e79a7',  // blue
        '#f28e2c',  // orange
        '#e15759',  // red
        '#76b7b2',  // teal
        '#59a14f'   // green
      ]);

    // Add the areas
    svg.selectAll("path")
      .data(stack(stackedData))
      .join("path")
      .attr("d", area)
      .attr("fill", (d) => color(d.key))
      .attr("opacity", 0.8)
      .on("mouseover", function() {
        d3.select(this)
          .attr("opacity", 1);
      })
      .on("mouseout", function() {
        d3.select(this)
          .attr("opacity", 0.8);
      });

    // Add the x-axis
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(5));

    // Add a title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", margin.top)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .text("Streamgraph Visualization");

    // Add tooltips
    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "1px solid #ddd")
      .style("padding", "10px")
      .style("border-radius", "4px");

    // Add interactive elements
    svg.selectAll("path")
      .on("mousemove", function(this: d3.BaseType, event: MouseEvent, d: unknown) {
        const series = d as d3.Series<{ [key: string]: number }, string>;
        const [pointerX] = d3.pointer(event);
        const date = x.invert(pointerX);
        const value = data.find(cat => cat.name === series.key)?.values.find(v => v.date.getTime() === date.getTime());
        
        tooltip.transition()
          .duration(200)
          .style("opacity", .9);
        
        tooltip.html(`${series.key}<br/>Value: ${value?.value.toFixed(1)}`)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseout", () => {
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
      });

  }, []);

  return (
    <div className="viz-container">
      <svg ref={svgRef}></svg>
    </div>
  );
}
