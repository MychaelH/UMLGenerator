// 声明通信图语法
grammar CollaborationGrammar;

// 语法
block: declareBlock linkBlock;
declareBlock: 'declare' '{' declareStmt* '}'; // 对象声明模块
declareStmt: IDENT ':' STRING ';'; // 对象声明语句
linkBlock: 'link' '{' linkStmt* '}'; // 链声明模块
linkStmt: IDENT ',' IDENT ':' STRING ',' STRING ';'; // 链声明语句

// Token
IDENT : '\'' (ESC|.)*? '\'';
STRING : '"' (ESC|.)*? '"';
// 表示\" 或者 \\
fragment ESC : '\\"' | '\\\\';
WS : [ \t\r\n]+ -> skip ; // 匹配时跳过空格、tabs、换行符