# CLI-Less-Compiler

NodeJS and NPM are required to run this tool. 

Run the following commands to get started:

```
git clone https://github.com/ar-to/cli-less-compiler.git

npm install

npm start or gulp

# to stop watch
ctrl + C

```

Change the source parent directory and the destination by changing the following inside the gulpfile.js

```
const SRC = ['./**/main.less', '!./styles.less'];//checks only files
const DEST = 'dist';

```

To delete the dist folder with your main.css and any other css files inside directory folders run the follwoing command:

```
npm run clean or gulp clean:all
```

This tool allows you to keep main.css files inside the folders which you asked to compile the less file from but also makes a single copy to the choosen output directory. Meaning that as you compile more less files, each folder containing this file will have a coresponding css file but also a single css file in the dist folder. The css files in the dist folder will be overwritten everytime you compile a new less file in any other directory but each of the individual css files within these folders will stay specific to that less file.

In addition to using the CLI to run these commands, this tool supports using it within Visual Studio Code by opening the repo directory as a project, then running the same commands above within the intergrated terminal:

```
#open intergrated terminal inside vsc
cmd + `

#run the same command above but with this shortcut
ctrl + shift + B

#stop watch use this shortcut and type 
ctrl + shift + P
"Task:Terminate Running Task"

```