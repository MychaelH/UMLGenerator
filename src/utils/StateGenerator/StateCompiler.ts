import { useGlobal } from '@/global';
import { StateGrammarParser } from '@/utils/StateGenerator/StateGrammarUtil/StateGrammarParser';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { StateGrammarLexer } from './StateGrammarUtil/StateGrammarLexer';
import { StateGrammarListener } from './StateGrammarUtil/StateGrammarListener';
import { StateListener } from './StateListener';


export function StateCompile(inputContent: string) {

    // 创建词法分析器和语法分析器
    let inputStream = CharStreams.fromString(inputContent);
    let lexer = new StateGrammarLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new StateGrammarParser(tokenStream);
    
    // 遍历语法树 
    let tree = parser.block();
    const listener: StateGrammarListener = new StateListener();
    ParseTreeWalker.DEFAULT.walk(listener, tree);
    const result = listener as StateListener;
    if (result.error){
        console.log(result.errorContent);
    }
    return result.stateGraph;
}
