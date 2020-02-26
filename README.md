# [mota-js](https://github.com/ckcz123/mota-js)
使用pixijs 和 tween.js 和 es6 

## 目前在做： 
尝试node和[free-tex-packer-core](https://github.com/odrick/free-tex-packer-core)  
遍历地图，将使用的图块集中到一张图片上，或者将附加的较小的图片也综合成一张图，得到png和json 来进行加载；
## TODO：
> + import 导入 √ （资源还没能导入）
> + 加载image后生成baseTexture
> + 加载block时加载对应sprite缓存，加载node（节点）
> + 设置scene（statusBar、toolBar、game)  
> scene顶层触发按键向下层分发，分发到game停止，触发  
control.js的操作逻辑
> 点击在game有个点击层，也是触发，并组织children有interactive
> + 全部sprite化，只有一个canvas
> + 在build时将所有用到的图片压缩到一张，加载时也只加载这一张图，并生成对应的json文件 