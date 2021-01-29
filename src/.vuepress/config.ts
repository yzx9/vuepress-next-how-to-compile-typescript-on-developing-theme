import { resolve } from "path"
import type { UserConfig } from "@vuepress/cli"
import type { DefaultThemeOptions } from "@vuepress/theme-default"

const config: UserConfig<DefaultThemeOptions> = {
  base: "/",
  lang: "zh-CN",
  description: "Vue 驱动的静态网站生成器",

  head: [["link", { rel: "icon", href: `/logo.png` }]],

  theme: resolve(__dirname, "./theme"),
  themeConfig: {},
}

export default config
