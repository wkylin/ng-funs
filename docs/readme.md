### Angular NgFuns

基于最新`Angular 6`, 快速学习Angular的开源小项目，欢迎Star,谢谢

* [快速入门](start.md)

---

### 项目结构

```
dist/                        产线资源目录
docs/                        项目文档
e2e/                         
src/                         项目源码
|- app/                      应用组件
|  |- modules/                  
|  |- common/                共用模块
|  |- app.component.*        根组件
|  |- app.module.ts          根模块
|  |- app-routing.module.ts  根路由
|  +- ...                    其他模块和组件
|- assets/                   资源文件
|- environments/             构建环境配置目录
|- index.html                页面入口
|- styles.scss               全局样式入口
|- main.ts                   应用入口
|- polyfills.ts              
+- test.ts                   单元测试入口
proxy.conf.js                后台接口代理
```

### 命令说明
```
npm run mock:proxy          
npm run build               
npm run docs                
```
