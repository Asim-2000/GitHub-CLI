# GitHub CLI

## Shebang For MacOS 
```bash
#!/usr/bin/env node
```
Use the following command to grant access to the file

```bash
sudo chmod +x <file-name>.js
```
For Example: In this case, it is
```bash
sudo chmod +x index.js
```
Now, you can run the application using the following 
```bash
./index.js
```
## Instructions to use this globally in your pc

1. Include following line your package.json. show-github is command and ./index.js is execution.
```json
"bin": {
    "show-github": "./index.js"
  }
```
2. Now run following command to install the module globally in your pc

```sh
npm link
```

## NPM Packages Used
1. 'axios' => To fetch data and do operations on it
2. 'cli-table' => To present data in beautiful format



