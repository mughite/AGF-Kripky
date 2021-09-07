
const interpreter = (d) => {
    return {date: d3.timeParse("%d-%m-%Y")(d.date),
            value: parseFloat(d.value)
    }
}

const size = {
    width: 1000,
    height: 300
}

const margin = {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10
}

const svgframe = d3.selectAll(".graph")
            .append("svg")
            .attr("class", 'rent')
            .attr("width", size.width)
            .attr("height", size.height)

const graph = (datos) => {
    // const labels = datos.value
    const g = svgframe.append("g")
    const margin = {top: 30, bottom: 30, left: 30, right: 30}
    const height = size.height - margin.top - margin.bottom
    const width = size.width -margin.left - margin.right
    let x = d3.scaleTime()
               .domain(d3.extent(datos, (d)=>{return d.date}))
               .range([0, width])
    g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

    let y = d3.scaleLinear()
                .domain([93, d3.max(datos, (d)=>{return d.value})])
                .range([height,0])
    g.append("g")
      .call(d3.axisLeft(y))

    g.append("path")
    .datum(datos)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )
    g.attr("transform", "translate(100,0)")
}


d3.csv("data1.csv", interpreter).then((datos) => {
  graph(datos)
datos.forEach((d)=>console.log(d))  
}).catch((err) => {
    console.log(err)
})