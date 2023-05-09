// 声明通信图语法
grammar StateGrammar;

// Grammar
block: stmt+;
stmt: declare | transfer;
declare: 'state' IDENT (('{' block '}') | STRING | '<choice>');
transfer: object '-->' object ':' STRING ';';
object: IDENT | '[*]';

// Token
IDENT : '\'' (ESC|.)*? '\'';
STRING : '"' (ESC|.)*? '"';
// 表示\" 或者 \\
fragment ESC : '\\"' | '\\\\';
WS : [ \t\r\n]+ -> skip ; // 匹配时跳过空格、tabs、换行符