const interpreter = (d) => {
    return {date: parseDate(d.date),
            value: parseFloat(d.value)
    }
}

const size = {
    width: 300,
    height: 300
}

const margin = {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10
}

const svg = d3.selectAll(".graph")
            .append("svg")
            .attr("class", 'rent')
            .attr("width", size.width)
            .attr("height", size.height)

const graph = (datos) => {
    const labels = datos.value
    const g = detalle.append("g")
    const margin = {top: 30, bottom: 30, left: 30, right: 30}
    const height = size.height - margin.top - margin.bottom
    const width = size.width -margin.left - margin.right
}