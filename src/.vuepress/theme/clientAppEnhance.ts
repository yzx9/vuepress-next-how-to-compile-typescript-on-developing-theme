import type { ClientAppEnhance } from "@vuepress/client"
import YellowBox from "./YellowBox.vue"

import "./index.css"

const clientAppEnhance: ClientAppEnhance = (ctx) => {
  ctx.app.component("YellowBox", YellowBox)
}

export default clientAppEnhance
