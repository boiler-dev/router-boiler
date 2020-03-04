import expect from "./expect"

import loaded from "../src/loaded"
import logger from "../src/logger"
import router from "../src/router"
import tinyId from "../src/tinyId"

beforeEach(() => {
  loaded.reset()
  loaded.load({ logger, router, tinyId })
})

it("routes", () => {
  router.add({
    404: () => "404",
    route: () => "route",
  })

  expect(router.route("/route")).toBe("route")
  expect(router.route("/no-exist")).toBe("404")
})
