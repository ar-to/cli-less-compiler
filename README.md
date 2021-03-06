# Batch-Watch

Use gulp tasks to watch and compile less, sass, etc, for an entire directory to a single folder.

[![Build Status](https://travis-ci.org/ar-to/batch-watch.svg?branch=master)](https://travis-ci.org/ar-to/batch-watch)

## Getting Started

NodeJS and NPM are required to run this tool. 

Run the following commands to get started:

```
git clone git@github.com:ar-to/batch-watch.git

cd batch-watch

npm install

npm start

# to stop watch
ctrl + C

```
`npm start` cleans dist directory and starts watching for chamges

## Configure

Change the source parent directory and the destination by modifying the config/default.json

```
    "SRC" : {
        "dir_one" : "../Themes/**/",
        "file" : "main.less"
    }
```
or changing the following inside the gulpfile.js

```
const SRC = ['./**/main.less', '!./styles.less'];//checks only files
const DEST = 'dist';

```

To run only the watch task without having to wait for the dist folder to clear:

```
npm run watch
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

## Adding to an existing repo

Clone this repo then copy gulpfile.js and package.json into the desired repo. Then commit these changes or create/add the following to the .gitignore file to keep this tool locally only or add them to the .git/info/exclude file to ignore them locally without having to change the .gitignore file and commit it:

```
dist/
gulpfile.js
node_modules/
package.json
```

You may need to commit the .gitignore changes or use any other git command to hide, such as git stash.

## Visual Studio Code

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

* Add config file for variables that can changed for src and dest:

    - working: config file for src works for changing the value
    - needs work: cannont add multiple directories to gulpfile from donfig file -- ar-to

* Add gulp task to support sass

* Add error log to watch build

    - problem: https://github.com/ar-to/batch-watch/issues/1
