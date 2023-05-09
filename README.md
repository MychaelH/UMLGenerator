运行项目：

```
pnpm install
pnpm run dev
```



以下对本UML图生成工具的语法进行示例

# 顺序图

语法示例：

```c++
/* 声明对象语句， [对象类型] '对象名称' */
actor 'A';  // 角色声明
boundary 'B'; // 边界声明
control 'C'; // 控制声明
database 'D'; // 数据库声明
entity 'E'; // 实体声明
collections 'Co'; // 集合声明
queue 'Q'; // 队列声明
participant 'Cumstor'; // 参与者声明
create Participant 'Cumstor'; // 创建新的 参与者/... （后面紧接创建者发送消息给被创建者）
destroy 'A'; // 终结生命线A

/* 消息声明语句： '对象名称1' [消息类型] ‘对象名称2’: "消息文本" */
'A' -> 'B': "Request"; // 实线箭头（调用）
'B' --> 'A': "Response"; // 虚线箭头（返回）
'A' ->> 'B': "Message"; // 实线空箭头（消息）
'A' -x> 'B': "Synchronous Message"; // 同步消息
'A' -\\ 'B': "Asynchronous Message"; // 异步消息

/* 激活/结束激活语句，同一个对象激活和结束激活语句之间的生命线将被激活 */
activate 'A'; // 激活生命线
deactivate 'A'; // 结束生命线

/* 结构控制 */
// 可选片段
opt "Option":
    A -> B: "Message";
end
// 循环片段
loop "Condition":
    A -> B: "Message";
end
// 并行片段
par "Description":
    A -> B: "Message";
    A -> B: "Message";
end
// 条件片段
alt "Success":
    B -> A: "Successful";
else "Failed":
    B -> A: "Failed";
else "Unknown":
    B -> A: "Unknown";
...
end
// 交互片段
ref A, B, C : "Init";

```



# 通信图

语法示例：

```C++
/* 
--对象声明模块
花括号内用逗号隔开每个对象声明语句
对象声明语句结构： '对象名': "对象角标描述"
*/
declare {
    'Actor': "",
    'Object1': "*",
    'Object2': "0..*",
}
/*
--链声明模块
花括号内用分号隔开每个链声明语句
链声明语句结构： '对象名1', '对象名2': "对象1到对象2的文本", "对象2到对象1的文本"
*/
link {
    'Actor', 'Object1': "Actor to Object1", "Object1 to Actor"; // 消息
    'Actor', 'Object2': "Actor to Object2", "Object2 to Actor"; // 消息
}
```



# 状态机图

语法示例

```c++
/* 状态声明语句 */
state 'name1' "description" // 声明一个普通状态，'name1'引号内为状态名，"description"引号内为状态描述
state 'name2' { // 声明一个带子状态的状态，'name2'引号内为状态名，花括号内...表示支持加入各种状态声明语句以及状态转换语句，绘制结果将成为该状态的子状态
    ...
}
state 'choiceNode' <choice> // 声明一个分支节点，'choiceNode'引号内为状态名

/* 转换语句 */
'name1' --> 'name2': "content"; // 声明一个转换语句，'name1'、'name2' 为两个已声明的状态名，"content" 双引号内为转换箭头上的文本
[*] --> 'name': "content"; // 以[*]起始表示一个从起始节点开始的转换
'name' --> [*]: "content"; // 以[*]终止表示一个以终止节点结束的转换

```



# 活动图

活动图采用自动连接的语法，节点默认按照它们定义的顺序进行自动连接。在对活动图进行描述时，只需要根据活动图上节点的顺序依次声明即可。

语法示例

```c++
/* 节点声明语句 */
: "content" ; // 声明一个以"content"引号内容为文本的节点
start // 声明一个起始节点
end // 声明一个终止节点
stop // 声明一个结束节点

/* 选择结构 */
if "condition" then "yes" // "condition"为选择节点内文本，"yes"引号内为条件满足方向箭头上的文本
... // 可以为任意内容，将直接连接到条件满足方向的箭头上
elseif "condition" then "yes" // "condition"为选择节点内文本，"yes"引号内为条件满足方向箭头上的文本
... // 可以为任意内容，将直接连接到条件满足方向的箭头上
else "no" // "no"引号内为 else 箭头方向上的文本
... // 可以为任意内容，将直接连接到 else 方向的箭头上
endif // 表示选择结构结束
    
/* 循环结构 */
repeat "condition" 
... // 可以为任意内容，将被循环结构包裹
endrepeat // 表示循环结构结束

/* 并行结构  并行结构由若干个fork加上其子结构组成，各个子结构将并行绘制，最后以endfork表示并行结束 */
fork
... // 可以为任意内容，将被绘制到同一条并行分支
fork
... // 可以为任意内容，将被绘制到同一条并行分支
endfork // 表示并行结构结束

/* 
--泳道声明语句
在声明一个泳道后，直到下一次泳道声明，中间所有的节点都将被绘制在该泳道内。换言之，泳道声明语句表示切换泳道
同名的泳道算作一个泳道。
如果你的活动图描述文本中包含泳道，你的语句应该首先以泳道开头，保证所有的节点都有一个所属的泳道.
*/
| 泳道名 |
```

