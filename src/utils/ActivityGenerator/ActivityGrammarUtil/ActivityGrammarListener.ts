// Generated from src/assets/ActivityGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BlockContext } from "./ActivityGrammarParser";
import { StmtContext } from "./ActivityGrammarParser";
import { NodeContext } from "./ActivityGrammarParser";
import { AltContext } from "./ActivityGrammarParser";
import { ElseifContext } from "./ActivityGrammarParser";
import { ElseContext } from "./ActivityGrammarParser";
import { ElseBlockContext } from "./ActivityGrammarParser";
import { RepeatContext } from "./ActivityGrammarParser";
import { RepeatBlockContext } from "./ActivityGrammarParser";
import { ForkContext } from "./ActivityGrammarParser";
import { ForkBlockContext } from "./ActivityGrammarParser";
import { SwimlanesContext } from "./ActivityGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ActivityGrammarParser`.
 */
export interface ActivityGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.node`.
	 * @param ctx the parse tree
	 */
	enterNode?: (ctx: NodeContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.node`.
	 * @param ctx the parse tree
	 */
	exitNode?: (ctx: NodeContext) => void;

	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.alt`.
	 * @param ctx the parse tree
	 */
	enterAlt?: (ctx: AltContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.alt`.
	 * @param ctx the parse tree
	 */
	exitAlt?: (ctx: AltContext) => void;

	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.elseif`.
	 * @param ctx the parse tree
	 */
	enterElseif?: (ctx: ElseifContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.elseif`.
	 * @param ctx the parse tree
	 */
	exitElseif?: (ctx: ElseifContext) => void;

	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.else`.
	 * @param ctx the parse tree
	 */
	enterElse?: (ctx: ElseContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.else`.
	 * @param ctx the parse tree
	 */
	exitElse?: (ctx: ElseContext) => void;

	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.elseBlock`.
	 * @param ctx the parse tree
	 */
	enterElseBlock?: (ctx: ElseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.elseBlock`.
	 * @param ctx the parse tree
	 */
	exitElseBlock?: (ctx: ElseBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.repeat`.
	 * @param ctx the parse tree
	 */
	enterRepeat?: (ctx: RepeatContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.repeat`.
	 * @param ctx the parse tree
	 */
	exitRepeat?: (ctx: RepeatContext) => void;

	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.repeatBlock`.
	 * @param ctx the parse tree
	 */
	enterRepeatBlock?: (ctx: RepeatBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.repeatBlock`.
	 * @param ctx the parse tree
	 */
	exitRepeatBlock?: (ctx: RepeatBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.fork`.
	 * @param ctx the parse tree
	 */
	enterFork?: (ctx: ForkContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.fork`.
	 * @param ctx the parse tree
	 */
	exitFork?: (ctx: ForkContext) => void;

	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.forkBlock`.
	 * @param ctx the parse tree
	 */
	enterForkBlock?: (ctx: ForkBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.forkBlock`.
	 * @param ctx the parse tree
	 */
	exitForkBlock?: (ctx: ForkBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ActivityGrammarParser.swimlanes`.
	 * @param ctx the parse tree
	 */
	enterSwimlanes?: (ctx: SwimlanesContext) => void;
	/**
	 * Exit a parse tree produced by `ActivityGrammarParser.swimlanes`.
	 * @param ctx the parse tree
	 */
	exitSwimlanes?: (ctx: SwimlanesContext) => void;
}

