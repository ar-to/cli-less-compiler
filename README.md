# CLI-Less-Compiler

NodeJS and NPM are required to run this tool. 

### Getting Started

Run the following commands to get started:

```
git clone https://github.com/ar-to/cli-less-compiler.git

npm install

npm start

# to stop watch
ctrl + C

```

Change the source parent directory and the destination by changing the following inside the gulpfile.js

```
const SRC = ['./**/main.less', '!./styles.less'];//checks only files
const DEST = 'dist';

```

To delete the dist folder with your main.css and any other css files inside directory folders run the following command:

```
npm run clean
```

To delete only the dist folder and main.css

```
npm run clean:dist
```

This tool allows you to watch multiple main.less files inside a directory and compile just the file changed into a dist folder. The css file in the dist folder will be overwritten every time you compile a new less file in any other directory.

### Visual Studio Code

In addition to using the CLI to run these commands, this tool supports using it within Visual Studio Code by opening the repo directory as a project, then running the same commands above within the integrated terminal. First open Command Palette in VSC with cmd(ctrl) + shift + P, type Configure Task Runner, then Others. You will now see a .vscode folder and a tasks.json file. Copy the task.json code from the repo into the directory you plan to use this tool for. See [vsc documentation](https://code.visualstudio.com/docs/languages/css) for more information.

open integrated terminal inside vsc

run the same command above but with this shortcut
cmd(ctrl) + shift + B

stop watch
cmd(ctrl) + shift + P
"Task:Terminate Running Task"

#### VSC shortcuts

Terminate task does not come with a shortcut but can be added by going to Code>Preferences>Keyboard Shortcuts. Search for terminate running task then add the the shortcut with your keyboard. For example:

cmd(ctrl) + shift + alt(option) + P


### Possible Improvements

* This tool does not create a css copy inside each of the subdirectory folders where the less file is held, so a feature could be added for this.

* Adding integrated terminal support for other editors (Atom, Sublime, etc)