const GrammarGenerator = require('@dougrich/grammar')
const Graph = require('@dougrich/graph-expand')
const grammar = require('./grammar')
const d3force = require('d3-force')

const { replace, flatten, clone } = new Graph(Graph.Immutable)

function render(graph) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  let content = []
  const margin = 3
  for (let c of graph.connections) {
    if (c.visible) {
      let start = graph.nodes[c.start]
      let end = graph.nodes[c.end]
      content.push(`<line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" stroke="black" stroke-width="1.5"/>`)
    }
  }
  
  for (let ni = 0; ni < graph.nodes.length; ni++) {
    const p = graph.nodes[ni]
    minX = Math.min(minX, p.x - margin - p.size / 2)
    minY = Math.min(minY, p.y - margin - p.size / 2)
    maxX = Math.max(maxX, p.x + margin + p.size / 2)
    maxY = Math.max(maxY, p.y + margin + p.size / 2)
    if (p.visible) {
      content.push(`<circle cx="${p.x}" cy="${p.y}" r="${p.size}" fill="black"/>`)
    }
    content.push(`<circle cx="${p.x}" cy="${p.y}" r="${p.size - 0.5}" fill="white"/>`)
  }
  for (let c of graph.connections) {
    if (c.visible) {
      let start = graph.nodes[c.start]
      let end = graph.nodes[c.end]
      content.push(`<line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" stroke="white" stroke-width="1"/>`)
    }
  }
  
  for (let ni = 0; ni < graph.nodes.length; ni++) {
    const p = graph.nodes[ni]
    content.push(`<text x="${p.x}" y="${p.y+0.3}" fill="black" font-size="1" text-anchor="middle">${ni + 1}</text>`)
  }
  let width = maxX - minX, height = maxY - minY
  return `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="${minX} ${minY} ${width} ${height}">${content.join('')}</svg>`
}

function renderLegend({ nodes }) {
  const legend = new Array(nodes.length)
  for (let i = 0; i < nodes.length; i++) {
    legend[i] = `<dt>${i + 1} - ${nodes[i].name}</dt><dd>${nodes[i].description}</dd>`
  }
  return `<dl>${legend.join('')}</dl>`
}

module.exports = function roll(cb) {

  const generator = new GrammarGenerator({
    storage: new GrammarGenerator.MemoryStorage(grammar),
    random: () => Math.random()
  }, {
    canGenerate: s => !!s.graphExpand,
    generate: async ({ graphExpand }, g) => {
      let graph = clone(graphExpand)
      let i = 0
      while (i < graph.nodes.length) {
        const node = graph.nodes[i]
        if (node.is) {
          const next = await g.generate(node.is)
          if (next.nodes) {
            graph = replace(graph, i, next)
            i--
          } else {
            graph.nodes[i] = next
          }
        }
        i++
      }
      return flatten(graph)
    }
  })

  generator.generate('cave').then(graph => {
    graph.nodes = JSON.parse(JSON.stringify(graph.nodes))
    d3force.forceSimulation(graph.nodes)
      .force('charge', d3force.forceManyBody())
      .force('center', d3force.forceCenter(0, 0))
      .force('collision', d3force.forceCollide(({ size }) => size))
      .force('links', d3force
        .forceLink(graph.connections.map(({ start, end, length }) => ({
          source: graph.nodes[start],
          target: graph.nodes[end],
          length
        })))
        .distance(({ length }) => 0)
        .strength(2))
      .stop()
      .tick(1000)
    const svg = render(graph)
    // 
    const points = renderLegend(graph)
    cb({ points, svg })
  })
}