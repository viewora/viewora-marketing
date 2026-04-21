<template>
  <canvas ref="canvas" class="grid-warp-canvas" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let raf: number | null = null
let needsRedraw = false

const GRID     = 40
const RADIUS   = 240
const STRENGTH = 70

let mouseX = -9999
let mouseY = -9999

function warp(gx: number, gy: number): { x: number; y: number } {
  const dx = mouseX - gx
  const dy = mouseY - gy
  const dist = Math.sqrt(dx * dx + dy * dy)
  if (dist >= RADIUS || dist < 0.5) return { x: gx, y: gy }
  const t = 1 - dist / RADIUS
  const mag = STRENGTH * t * t * t
  return {
    x: gx + (dx / dist) * mag,
    y: gy + (dy / dist) * mag,
  }
}

function draw() {
  needsRedraw = false
  if (!ctx || !canvas.value) return
  const w = canvas.value.width
  const h = canvas.value.height

  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, w, h)
  ctx.strokeStyle = '#e2e2e2'
  ctx.lineWidth = 1

  const cols = Math.ceil(w / GRID) + 1
  const rows = Math.ceil(h / GRID) + 1

  for (let c = 0; c <= cols; c++) {
    const gx = c * GRID
    ctx.beginPath()
    for (let r = 0; r <= rows; r++) {
      const p = warp(gx, r * GRID)
      r === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)
    }
    ctx.stroke()
  }

  for (let r = 0; r <= rows; r++) {
    const gy = r * GRID
    ctx.beginPath()
    for (let c = 0; c <= cols; c++) {
      const p = warp(c * GRID, gy)
      c === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)
    }
    ctx.stroke()
  }
}

function schedule() {
  if (needsRedraw) return
  needsRedraw = true
  raf = requestAnimationFrame(draw)
}

function onMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
  schedule()
}

function onMouseLeave() {
  mouseX = -9999
  mouseY = -9999
  schedule()
}

function resize() {
  if (!canvas.value) return
  canvas.value.width  = window.innerWidth
  canvas.value.height = window.innerHeight
  draw()
}

onMounted(() => {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  resize()
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('mouseleave', onMouseLeave)
  window.addEventListener('resize', resize, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseleave', onMouseLeave)
  window.removeEventListener('resize', resize)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<style scoped>
.grid-warp-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}
</style>
