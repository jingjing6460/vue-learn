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

## 双向数据绑定
### VUE 

### Angular
使用双向绑定来侦听事件并在父组件和子组件之间同步更新值。
双向绑定语法是 [()], []是属性绑定， （）是事件绑定。双向绑定语法是属性绑定与事件绑定的组合的简写形式。

`
<app-sizer [(size)]="fontSizePx"></app-sizer>
<app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>
`

表单中的双向数据绑定 需要 NgModel


