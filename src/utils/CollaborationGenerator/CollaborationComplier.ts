import { useGlobal } from '@/global';

import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { CollaborationGrammarLexer } from './CollaborationGrammarUtil/CollaborationGrammarLexer';
import { CollaborationGrammarListener } from './CollaborationGrammarUtil/CollaborationGrammarListener';
import { CollaborationGrammarParser } from './CollaborationGrammarUtil/CollaborationGrammarParser';
import { CollaborationListener } from './CollaborationListener';


export function CollaborationCompile(inputContent: string) {

    // 创建词法分析器和语法分析器
    let inputStream = CharStreams.fromString(inputContent);
    let lexer = new CollaborationGrammarLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CollaborationGrammarParser(tokenStream);
    
    // 遍历语法树 
    let tree = parser.block();
    const listener: CollaborationGrammarListener = new CollaborationListener();
    ParseTreeWalker.DEFAULT.walk(listener, tree);
    const result = listener as CollaborationListener;
    if (result.error){
        console.log(result.errorContent);
    }
    return result.collaborationGraph;
}
