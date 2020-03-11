import { ActionBoiler } from "boiler-dev"

export const generate: ActionBoiler = async () => {
  const actions = []

  actions.push({
    action: "write",
    path: "src/router.ts",
    sourcePath: "tsignore/router.ts",
  })

  actions.push({
    action: "write",
    path: "test/router.spec.ts",
    sourcePath: "tsignore/router.spec.ts",
  })

  return actions
}
