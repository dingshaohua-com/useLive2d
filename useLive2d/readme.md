## 关于我
本插件是基于linkLive2d二次封装的，因为原版插件需要配置的地方太多。使用本插件，直接引入页面，初始化两个参数即可
官方api参考[这里](http://live2d.pavostudio.com/doc/zh-cn/live2d/model-config-sdk3/)
基于v1.0的版本开发
需要注意v1和v3差别很大，素材不可通用

## 使用说明


### 增加模型
项目内已经预置很多人物模型，可以选择使用。只需要更改index.html 的modelType值即可，预选值为live2Model下文件夹名字
如果不满意，或者有更好的人物，放入本项目，也可以使用
需要准守一下规范：
1. 新建文件夹，以模型的名字命名，放入本库live2dModel目录下
2. 配置文件规定命名为model.json，这个必须要有
3. 基础动画脚本文件规定命名为model.moc，这个必须有
4. 贴图文件必须命名为texture.png，这个也是必须要有的
5. 动作事件文件存在方在live2dModel>motions目录内，可无

### 人物大小调整
在根目录的index.js文件中，修改字符串模板中的canvas的宽高即可，我是写死的，没有提供配置入口

## 在web页面中使用
> 注意，本地项目启动时，请求json可能会导致跨域，可以自行解决，也可以安装node的包http-server，然后用一下命令启动。即可解决
```shell
http-server --cors
```

在页面中如下引入即可
```html
<!-- 依赖jquery -->
<script src="jquery.min.js"></script>
<script src="useLive2d/index.js"></script>
<script>
useLive2dInit({
    path:'/useLive2d', //类库的位置
    //模特类型，即所在live2Model下文件夹名：这里是血小板
    modelType:'xxban'
})
</script>
```