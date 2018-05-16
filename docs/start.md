### 快速入门

* 1、安装node
```
去官网下载安装：https://nodejs.org/en/download/
```
* 2、设置npm的全局镜像，指向taobao
```
npm config set registry https://registry.npm.taobao.org
```
* 3、克隆项目
```
git clone --depth=1 https://github.com/wkylin/ng-funs.git
```
3.1 切换到项目目录
```
cd ng-funs
```
3.2 安装项目依赖并启动项目
```
npm install
npm run mock:proxy
```
3.3 打开你的浏览器，访问
```
http://127.0.0.1:4204
```
* 4、安装angular-cli（可选）
```
npm install -g @angular/cli 
```
### 参考资源
- https://nodejs.org/en/docs/
- https://github.com/angular/angular-cli/wiki
