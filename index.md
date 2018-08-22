## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/yajunfan/economic/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

# NODE
## NODE遇到的知识点的理解
```
1.EventEmitter  这个E要大写，否则找不到该元素
2.对node的理解
关于node的事件，很像电路图。最关键的一个emit是主要开关，其余的emit是各自的小开关，而on就是每个线路都接好了，等到什么时候住开关按下，走到哪个on监听的开关上，哪个开关就打开执行，打开电路。
有个重要的一点，是我的主开关要放在最后面，相当于这个总开关要放在我的眼跟前的感觉
3.关于fs的问题，var readsteam = fs.createReadStream('input.txt');
```