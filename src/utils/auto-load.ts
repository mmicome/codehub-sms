// const glob = require('glob');
// const path = require('path');
import glob from 'glob';

export function load(dir: string, options: { exclude: string } = { exclude: 'dist/' }) {
  const files = glob.sync(dir, {
    // absolute: true,
    withFileTypes: true,
  });

  const libs = [];
  // Iterate over the matched files and require each one
  files
    .filter((file) => !new RegExp(options.exclude).test(file))
    .forEach((file) => {
      const lib = require(file);
      libs.push(lib);
      // Extract the component name from the file name (e.g. "acl.component.js" => "acl")
      // const componentName = path.basename(file, '.component.js');
    });
  return libs;
}
