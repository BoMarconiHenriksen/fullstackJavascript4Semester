# Learning Goals Periode 1

TODO: SPLIT THE EXAMPLES IN TO SMALL FILES AND UPDATE THE README FILE.  

### Explain and Reflect:
#### Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

| Java | JavaScript |
| :-------------: |:-------------:|
| Højt abstraktionsnivea - kompileres. | Engine(v8) - udfører koden med det samme. |
Typer.  | Js har ikke typer.
JVM(Java Virtual Machine).  | Browseren eller i applikationer.
Objekter er klasse baseret.  | Objekter prototype baseret. 
.java - oversættes til bytes og udføres af JVM.  | .js - Kompiles ikke - interpretter.
Trådbaseret.  |  Js er event baseret. 
Objekter som parameter.  | Funktioner med som parameter. 
Returner objekter fra metoder.  | Returner funktioner fra metoder.

---

#### Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
1. Forskellige udgaver af js.  
2. Transpilere f.eks. Babel.  

##### Typescript: Superset af js. 
1. Har de nyeste features fra js med. 
2. Transpiler, type check og extra features som private, interface, optional variabler.  
3. Gør js mere objekt orienteret.  

##### Hvad kræver det for at kunne køre js?
En c++ container, hvor V8 engine er embedded.

---

#### Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
1. c++ container - V8 engine - js på server siden. 
2. Skaler.  
3. Hurtig backend.  
4. Tråde.  
5. Ikke cpu krævende som chat server, web server, REST server streaming server ect. 

##### NPM(Node Package Manager)
1. Et comand line interface til at tilføje packages til din applikation.
2. Det kan være tools, css libraries eller du kan dele din kode. 

---

#### Explain about the Event Loop in Node.js
1. stack.  
2. web api / c++ api(Node).  
3. callback kø.  
4. event loop.  

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

---

#### RED: Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
##### Babel
1. Transpiler.  

##### Webpack
1. Bygge og bundle værktøj. 
2. Build - transpiler.
3. Bundle - Alle filer bundles til en fil, og der laves en dependency graph.
4. Ekstra features
5. Build server.
6. Lazy loading.
