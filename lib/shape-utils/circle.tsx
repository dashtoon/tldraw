import { v4 as uuid } from "uuid"
import * as vec from "utils/vec"
import { CircleShape, ShapeType, Corner, Edge } from "types"
import { registerShapeUtils } from "./index"
import { boundsContained } from "utils/bounds"
import { intersectCircleBounds } from "utils/intersections"
import { pointInCircle } from "utils/hitTests"
import { getTransformAnchor, translateBounds } from "utils/utils"

const circle = registerShapeUtils<CircleShape>({
  boundsCache: new WeakMap([]),

  create(props) {
    return {
      id: uuid(),
      type: ShapeType.Circle,
      isGenerated: false,
      name: "Circle",
      parentId: "page0",
      childIndex: 0,
      point: [0, 0],
      rotation: 0,
      radius: 20,
      style: {
        fill: "#c6cacb",
        stroke: "#000",
      },
      ...props,
    }
  },

  render({ id, radius }) {
    return <circle id={id} cx={radius} cy={radius} r={radius} />
  },

  getBounds(shape) {
    if (!this.boundsCache.has(shape)) {
      const { radius } = shape

      const bounds = {
        minX: 0,
        maxX: radius * 2,
        minY: 0,
        maxY: radius * 2,
        width: radius * 2,
        height: radius * 2,
      }

      this.boundsCache.set(shape, bounds)
    }

    return translateBounds(this.boundsCache.get(shape), shape.point)
  },

  getRotatedBounds(shape) {
    return this.getBounds(shape)
  },

  getCenter(shape) {
    return [shape.point[0] + shape.radius, shape.point[1] + shape.radius]
  },

  hitTest(shape, point) {
    return pointInCircle(
      point,
      vec.addScalar(shape.point, shape.radius),
      shape.radius
    )
  },

  hitTestBounds(shape, bounds) {
    const shapeBounds = this.getBounds(shape)

    return (
      boundsContained(shapeBounds, bounds) ||
      intersectCircleBounds(
        vec.addScalar(shape.point, shape.radius),
        shape.radius,
        bounds
      ).length > 0
    )
  },

  translate(shape, delta) {
    shape.point = vec.add(shape.point, delta)
    return this
  },

  rotate(shape) {
    return this
  },

  transform(shape, bounds, { initialShape, transformOrigin, scaleX, scaleY }) {
    shape.radius =
      initialShape.radius * Math.min(Math.abs(scaleX), Math.abs(scaleY))

    shape.point = [
      bounds.minX +
        (bounds.width - shape.radius * 2) *
          (scaleX < 0 ? 1 - transformOrigin[0] : transformOrigin[0]),
      bounds.minY +
        (bounds.height - shape.radius * 2) *
          (scaleY < 0 ? 1 - transformOrigin[1] : transformOrigin[1]),
    ]

    return this
  },

  transformSingle(shape, bounds, info) {
    shape.radius = Math.min(bounds.width, bounds.height) / 2
    shape.point = [bounds.minX, bounds.minY]
    return this
  },

  setParent(shape, parentId) {
    shape.parentId = parentId
    return this
  },

  setChildIndex(shape, childIndex) {
    shape.childIndex = childIndex
    return this
  },

  canTransform: true,
  canChangeAspectRatio: false,
})

export default circle