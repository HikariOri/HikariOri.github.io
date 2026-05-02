---
layout: post
title: 石蒜模拟器——为 Next 主题加上🐟吧~
date: 2024-02-23 18:58:03
tags: [Hexo, NexT, リコリス・リコイル, 石蒜模拟器]
---

Next 主题添加[石蒜模拟器](https://github.com/itorr/sakana)还是很 easy 滴~。根据 Next 文档，只需在主题配置文件中配置 `custom_file_path` 选项即可，具体的配置如下：

<!-- more -->

```yml
# Define custom file paths.
# Create your custom files in site directory `source/_data` and uncomment needed files below.
custom_file_path:
  # head: source/_data/head.swig
  # header: source/_data/header.swig
  # sidebar: source/_data/sidebar.swig
  # postMeta: source/_data/post-meta.swig
  # postBodyEnd: source/_data/post-body-end.swig
  footer: source/_data/footer.swig
  # bodyEnd: source/_data/body-end.swig
  # variable: source/_data/variables.styl
  # mixin: source/_data/mixins.styl
  # style: source/_data/styles.styl
```

然后再在 `source/_data` 目录下新建 `footer.njk` 文件，内容如下：

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/sakana-widget@2.7.0/lib/sakana.min.css"
/>
<div id="sakana-widget" style="position: fixed; bottom: 10px; right: 20px; z-index: 999;"></div>
<script>
  function initSakanaWidget() {
    new SakanaWidget().mount('#sakana-widget');
  }
</script>
<script
  async
  onload="initSakanaWidget()"
  src="https://cdn.jsdelivr.net/npm/sakana-widget@2.7.0/lib/sakana.min.js"
></script>
```

这样就 OK 了，重新部署 Hexo，就可以看到 Sakana 了。其他的主题也可使用类似的方法来实现。如果你的主题没有 `custom_file_path` 选项，可以直接在主题的 `layout` 文件中添加上面的代码。

## 参考

- [石蒜模拟器-为你的博客或网站加上🐟吧~](https://kanochi.cn/archives/7/)
- [给友链页面添加一个 Sakana~](https://www.naokuoteng.cn/posts/e5482ed2.html)
- [快来为你的 Hexo 博客添加可爱的石蒜模拟器吧！](https://zero617.top/2022/09/2e7c2ba499b6.html)
- [itorr/sakana | GitHub](https://github.com/itorr/sakana)
- [dsrkafuu/sakana-widget | GitHub](https://github.com/dsrkafuu/sakana-widget)
