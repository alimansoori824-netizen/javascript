//30 march
// js modules
//      a user defined
//       1 common js modules - (module.expert and require(" "))
//       2 es modules - (export and import) (more used)

//      b inbuilt 

// to call es module - <script type="module" src="file"> </script>
// default - when we are exporting single function from a js file denoted by - ''
// eg - export default fun

// named - when we are exporting multiple function from a js file denoted by - {}
// eg - export {fun,fun1}

// import sum from './js1.js'
// import fun from './js2.js'
// sum()
// while importing we can change the name

import {fun as fn,fun1} from './js2.js'
fn()
// fun1()

// TILL HERE THIS WAS 