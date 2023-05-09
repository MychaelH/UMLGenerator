// Generated from src/assets/ActivityGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ActivityGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ActivityGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.node`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNode?: (ctx: NodeContext) => Result;

	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.alt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlt?: (ctx: AltContext) => Result;

	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.elseif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseif?: (ctx: ElseifContext) => Result;

	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.else`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse?: (ctx: ElseContext) => Result;

	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.elseBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseBlock?: (ctx: ElseBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.repeat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeat?: (ctx: RepeatContext) => Result;

	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.repeatBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatBlock?: (ctx: RepeatBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.fork`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFork?: (ctx: ForkContext) => Result;

	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.forkBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForkBlock?: (ctx: ForkBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ActivityGrammarParser.swimlanes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwimlanes?: (ctx: SwimlanesContext) => Result;
}

