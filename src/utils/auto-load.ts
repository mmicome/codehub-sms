// const glob = require('glob');
// const path = require('path');
import glob from 'glob'

export function load(dir:string) {
  const files = glob.sync(dir, {
    // absolute: true,
    withFileTypes: true
  })
  // Iterate over the matched files and require each one
  files.forEach((file) => {
    const component = import(file.fullpath());
    // Extract the component name from the file name (e.g. "acl.component.js" => "acl")
    // const componentName = path.basename(file, '.component.js');
  });
}