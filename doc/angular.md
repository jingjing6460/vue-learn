# angular

## 如何理解angular的依赖注入？
依赖注入是一种重要的应用设计模式。
1. 依赖： 类执行功能，所需要的服务或对象
2. DI 框架在实例化类时，向其提供这个类声明的依赖项

分层注入体系
1. ModuleInjector
 @Injectable 装饰器标记服务（利于摇树优化），可以配置provider是root或具体的NgModule
 @NgModule 装饰器都有providers元数据，可以覆盖@Injectable中的provider
2. ElementInjector
为每个DOM隐式创建ElementInjector
默认为空
在@Component 和 @Directive的providers属性中配置

注入器继承机制
当组件声明依赖时，
elementInjector: 优先使用自己的，如果缺少提供者，请求转发至父组件，任何都找不到，报错
ModuleInjector, module层次结构中找，找不到，报错

解析修饰符


