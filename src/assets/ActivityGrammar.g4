// 声明活动图语法
grammar ActivityGrammar;

// Grammar
block: stmt+;
stmt: node | alt | repeat | fork | swimlanes;

node: ':' STRING ';' | 'start' | 'end' | 'stop'; // 声明节点

alt: 'if' STRING 'then' STRING elseBlock elseif* else? 'endif'; // 选择结构
elseif: 'elseif' STRING 'then' STRING elseBlock;
else: 'else' STRING elseBlock;
elseBlock: stmt+;

repeat: 'repeat' STRING repeatBlock 'endrepeat'; // 循环结构
repeatBlock: stmt+;

fork: ('fork' forkBlock)+ 'endfork'; // 并行结构
forkBlock: stmt+;

swimlanes: IDENT; // 泳道

// Token
IDENT : '|' (ESC|.)*? '|';
STRING : '"' (ESC|.)*? '"';
// 表示\" 或者 \\
fragment ESC : '\\"' | '\\\\';
WS : [ \t\r\n]+ -> skip ; // 匹配时跳过空格、tabs、换行符