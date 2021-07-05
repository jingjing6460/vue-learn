# bind() 方法
## 创建一个新的绑定函数。将this指向绑定到原函数本身。
````
this.x = 9;
var person = {
    X: 81,
    getX: function(){return this.x}
}

person.getX(); // 81

var retrieveX = person.getX;
retrieveX(); // 9 函数在全局作用域中

var newX = retrieveX.bind(person);
newX(); // 81 修改了this的指向
````

## 使一个函数拥有预设的初始参数。 当绑定函被调用时，这些参数会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们后面。如果所有参数个数超过绑定函数的参数个数，多余参数会被忽略。




