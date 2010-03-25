var path = require("path");
require.paths.push(path.join(path.dirname(__filename), "lib"));
var jasmine = require("jasmine-node");
jasmine.runDefaultNodeSpecs();
