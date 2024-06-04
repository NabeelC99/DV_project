// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Sales Data
    const salesData = [100, 200, 150, 300, 250, 400];
    const salesMonths = ['January', 'February', 'March', 'April', 'May', 'June'];

    const svgSales = d3.select("#salesChart")
                       .append("svg")
                       .attr("width", 500)
                       .attr("height", 400);

    const margin = {top: 20, right: 30, bottom: 40, left: 40};
    const width = 500 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const x = d3.scaleBand()
                .domain(salesMonths)
                .range([margin.left, width - margin.right])
                .padding(0.1);

    const y = d3.scaleLinear()
                .domain([0, d3.max(salesData)])
                .nice()
                .range([height - margin.bottom, margin.top]);

    svgSales.append("g")
            .attr("fill", "steelblue")
            .selectAll("rect")
            .data(salesData)
            .join("rect")
            .attr("x", (d, i) => x(salesMonths[i]))
            .attr("y", d => y(d))
            .attr("height", d => y(0) - y(d))
            .attr("width", x.bandwidth());

    svgSales.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x));

    svgSales.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

    // Visitor Data
    const visitorData = [50, 60, 70, 80, 90, 100, 110];
    const visitorDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const svgVisitor = d3.select("#visitorChart")
                         .append("svg")
                         .attr("width", 500)
                         .attr("height", 400);

    const xVisitor = d3.scaleBand()
                       .domain(visitorDays)
                       .range([margin.left, width - margin.right])
                       .padding(0.1);

    const yVisitor = d3.scaleLinear()
                       .domain([0, d3.max(visitorData)])
                       .nice()
                       .range([height - margin.bottom, margin.top]);

    svgVisitor.append("g")
              .attr("fill", "orange")
              .selectAll("rect")
              .data(visitorData)
              .join("rect")
              .attr("x", (d, i) => xVisitor(visitorDays[i]))
              .attr("y", d => yVisitor(d))
              .attr("height", d => yVisitor(0) - yVisitor(d))
              .attr("width", xVisitor.bandwidth());

    svgVisitor.append("g")
              .attr("transform", `translate(0,${height - margin.bottom})`)
              .call(d3.axisBottom(xVisitor));

    svgVisitor.append("g")
              .attr("transform", `translate(${margin.left},0)`)
              .call(d3.axisLeft(yVisitor));
});
