import { useGlobal } from '@/global';
import { SequenceGrammarParser } from '@/utils/SequenceGenerator/SequenceGrammarUtil/SequenceGrammarParser';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { SequenceGrammarLexer } from './SequenceGrammarUtil/SequenceGrammarLexer';
import { SequenceGrammarListener } from './SequenceGrammarUtil/SequenceGrammarListener';
import { SequenceListener } from './SequenceListener';


export function SequenceCompile(inputContent: string) {

    // 创建词法分析器和语法分析器
    let inputStream = CharStreams.fromString(inputContent);
    let lexer = new SequenceGrammarLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new SequenceGrammarParser(tokenStream);
    
    // 遍历语法树 
    let tree = parser.block();
    const listener: SequenceGrammarListener = new SequenceListener();
    ParseTreeWalker.DEFAULT.walk(listener, tree);
    const result = listener as SequenceListener;
    if (result.error){
        console.log(result.errorContent);
    }
    return result.sequenceGraph;
}
