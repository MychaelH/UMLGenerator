import { useGlobal } from '@/global';

import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ActivityGrammarLexer } from './ActivityGrammarUtil/ActivityGrammarLexer';
import { ActivityGrammarListener } from './ActivityGrammarUtil/ActivityGrammarListener';
import { ActivityGrammarParser } from './ActivityGrammarUtil/ActivityGrammarParser';
import { ActivityListener } from './ActivityListener';


export function ActivityCompile(inputContent: string) {

    // 创建词法分析器和语法分析器
    let inputStream = CharStreams.fromString(inputContent);
    let lexer = new ActivityGrammarLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ActivityGrammarParser(tokenStream);
    
    // 遍历语法树 
    let tree = parser.block();
    const listener: ActivityGrammarListener = new ActivityListener();
    ParseTreeWalker.DEFAULT.walk(listener, tree);
    const result = listener as ActivityListener;
    if (result.error){
        console.log(result.errorContent);
    }
    return result.activityGraph;
}
