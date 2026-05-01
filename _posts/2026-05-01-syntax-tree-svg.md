---
layout: default
title: Syntax trees to SVGs
categories:
    - academia
    - linguistics
---

I hate LaTeX. Problem is, the *forest* package is *still* the only way to make presentable syntax trees. So here's a way to convert LaTeX trees into individual .svg files that can be inserted into your documents without getting all pixelated.

*Prerequisites:* I have TeXLive installed on Windows, which comes with the *dvisvgm* command-line utility. The *latex* command generates .dvi files that *dvisvgm* converts to svg. If you can open up a fresh terminal and run *dvisvgm*, you're probably good.

*Usage:* **python tree-generator.py FILENAME.tex**. The script will hunt for anything between \\begin{forest} and \\end{forest} and turn it into its own individual .svg file. These .svg files can be inserted into Microsoft Word and LibreOffice Writer but not Google Docs (grrr).

*Script:*

```
import sys
import re
import subprocess
import os

with open(sys.argv[1], 'r') as file:
    content = file.read()

content = content.replace('\t', '').replace('\n', '')
trees = re.findall(r'\\begin{forest}.*?\\end{forest}', content)

for index, tree in enumerate(trees):
    latex = "\\documentclass[12pt]{standalone}\\usepackage{forest}\\usepackage{times}\\begin{document}" + tree + "\\end{document}"
    
    with open("temp-latex.tex", "w", encoding='utf-8') as f:
        f.write(latex)
    
    print('converting tree ' + str(index) + ' into dvi...')
    subprocess.run(['latex', 'temp-latex.tex'])
    
    print('converting tree ' + str(index) + ' into svg...')
    subprocess.run(['dvisvgm', '-n', 'temp-latex.dvi'])
    
    print('cleaning up...')
    os.rename('temp-latex.svg', 'tree-' + str(index) + '.svg')
    os.remove('temp-latex.tex')
    os.remove('temp-latex.aux')
    os.remove('temp-latex.dvi')
    os.remove('temp-latex.log')
```