// 声明顺序图语法
grammar SequenceGrammar;

// 语法
block : stmt+;
stmt : decl
    | messageSend
    | create
    | destroy
    | activate
    | deactivate
    | opt
    | loop
    | par
    | alt
    | ref;
decl : objType IDENT ';'; // 参与者声明
messageSend : object messageType object ':' STRING ';'; // 箭头声明
create: 'create' decl messageSend; // 创建参与者
destroy: 'destroy' IDENT ';'; // 销毁参与者
activate: 'activate' IDENT ';'; // 激活
deactivate: 'deactivate' IDENT ';'; // 停止激活
opt: 'opt' STRING ':' block 'end'; // 可选片段
loop: 'loop' STRING ':' block 'end'; // 循环片段
par: 'par' STRING ':' block 'end'; // 并行片段
alt: 'alt' STRING ':' block else* 'end'; // 条件片段
ref: 'ref' IDENT (',' IDENT)* ':' STRING ';'; // 交互片段
else: 'else' STRING ':' block;

objType : 'actor' | 'boundary' | 'control' | 'database' | 'entity'
        | 'collections' | 'queue' | 'participant';
object : IDENT | '*';
messageType : '->' | '-->' | '->>' | '-x>' | '-\\\\';

// Token
IDENT : '\'' (ESC|.)*? '\'';
STRING : '"' (ESC|.)*? '"';
// 表示\" 或者 \\
fragment ESC : '\\"' | '\\\\';
WS : [ \t\r\n]+ -> skip ; // 匹配时跳过空格、tabs、换行符