import { Stage } from 'ngl'

declare global {
  interface Window { stage: Stage; }
}

document.addEventListener('DOMContentLoaded', () => {
  window.stage = new Stage('viewport')
  window.stage.loadFile("rcsb://1crn", { defaultRepresentation: true })
})
