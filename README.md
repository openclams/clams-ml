# clams-ml
The Clams modeling language. A package that contains the clams data model for modleing and exchanging of cloud applications. 

HOW TO BUILD THE LIBRARY:
1) Run npm install 
2) Run ng build --prod
3) The library is built in /dist/clams-ml. 
4) Open bash at /dist/clams-ml and run "npm pack". Now the "clams-ml-0.0.X.tgz" package file is created.
   NOTE: I moved it to the root directory of clams-ml for easy import.
   Add this file to the dependencies of the "package.json" that you want to use the library with.
   Example: "clams-ml": "file:../clams-ml/clams-ml-0.0.X.tgz"