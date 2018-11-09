# Learning Goals Periode 1

TODO: SPLIT THE EXAMPLES IN TO SMALL FILES AND UPDATE THE README FILE.  

#### Explain and Reflect:
##### Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

##### Java
Højt abstraktionsnivea - kompileres. 
Typer.  
JVM(Java Virtual Machine).  
Objekter er klasse baseret.  
.java - oversættes til bytes og udføres af JVM.  
Trådbaseret.  
Objekter som parameter.  
Returner objekter fra metoder.  

##### JavaScript
Engine(v8) - udfører koden med det samme.  
Js har ikke typer.   
Browseren eller i applikationer.  
Objekter prototype baseret.  
.js - Kompiles ikke - interpretter.  
Js er event baseret.  
Funktioner med som parameter.  
Returner funktioner fra metoder.  

---

Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
Forskellige udgaver af js, som ikke suportes af alle browsere.
Bruge transpilere så alle browsere kan læse din kode f.eks. Babel. (oversætter de nye features til ES5, så alle browsere forstår koden).
Typescript: Superset af js. 
Har de nyeste features fra js med. 
Transpiler, type check og extra features som private, interface, optional variabler. 
Gør js mere objekt orienteret.
Ikke skrevet ind i Anki.


Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
c++ container, der har embedded V8 engine, så du kan kører js på server siden. 
Let at skaler. 
En hurtig backend.
Behøver ikke at bekymre sig om tråde.
God til applikationer, der ikke er cpu krævende som chat server, web server, REST server streaming server ect. 
NPM(Node Package Manager): (Skrevet ind i Anki)
Et comand line interface til at tilføje packages til din applikation. (Skrevet ind i Anki)
Det kan være tools, css libraries eller du kan dele din kode. (Skrevet ind i Anki)


Explain about the Event Loop in Node.js
stack
web api / c++ api(Node)
callback kø
event loop
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


RED: Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
Babel: Er en transpiler, der kan transpilere nyere ES6 og ES7 fetaures til ES5 så alle browsere kan køre din kode.
Webpack: Bygge og bundle værktøj. 
Build - transpiler.
Bundle - Alle filer bundles til en fil, og der laves en dependdency graph.
Ekstra features:
Build server.
Lazy loading - split din kode og load kode når der trykkes på en button.
