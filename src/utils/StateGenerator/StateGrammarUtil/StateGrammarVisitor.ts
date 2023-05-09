// Generated from src/assets/StateGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { BlockContext } from "./StateGrammarParser";
import { StmtContext } from "./StateGrammarParser";
import { DeclareContext } from "./StateGrammarParser";
import { TransferContext } from "./StateGrammarParser";
import { ObjectContext } from "./StateGrammarParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `StateGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface StateGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `StateGrammarParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `StateGrammarParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `StateGrammarParser.declare`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare?: (ctx: DeclareContext) => Result;

	/**
	 * Visit a parse tree produced by `StateGrammarParser.transfer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransfer?: (ctx: TransferContext) => Result;

	/**
	 * Visit a parse tree produced by `StateGrammarParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;
}

