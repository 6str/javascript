// get map from module.export
const NETWORKS_LOOKUP = require("./test_Module_Export.js")
console.log(NETWORKS_LOOKUP instanceof Map)
// false as getting back type of module.export. this would be the case even exporting only one object
console.log(NETWORKS_LOOKUP.NETWORKS_LOOKUP instanceof Map)
// true as accessing object inside the module.export object

const { NETWORKS_LOOKUP_too } = require("./test_Module_Export.js")
console.log(NETWORKS_LOOKUP_too instanceof Map)
// true as used curlies to destructure type module.export