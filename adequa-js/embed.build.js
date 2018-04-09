({
  baseUrl: ".",
  mainConfigFile: "config.js",
  name: "node_modules/almond/almond",
  include: ['embed'],
  out: "../src/web_accessible_resources/adequa.js",
  optimizeCss: "standard",
  stubModules: ['rv', 'amd-loader', 'text']
})
