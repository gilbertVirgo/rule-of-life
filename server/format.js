const { createCanvas } = require("canvas")
const fs = require("fs").promises

module.exports = {
  toImage: async (data) => {
    try {
      const canvas = createCanvas(500, 500),
        context = canvas.getContext("2d")
      context.fillStyle = "white"
      context.textBaseline = "top"
      context.fillRect(0, 0, canvas.width, canvas.height)
      context.fillStyle = "black"
      context.strokeStyle = "grey"

      let gutter = 20
      let top = gutter * 2

      data.forEach(({ title, value }) => {
        let height = 0

        context.font = "normal normal bold 12px Arial"
        context.fillText(title.toUpperCase(), gutter, top)
        height += 16

        context.font = "16px Arial"
        context.fillText(value, gutter, top + height)
        height += 16

        context.moveTo(gutter, top + height + 10)
        context.lineTo(canvas.width - gutter, top + height + 10)
        context.stroke()

        top += height + gutter
      })

      return { success: true, data: canvas.toDataURL() }
    } catch (error) {
      return { success: false, error }
    }
  },
}
