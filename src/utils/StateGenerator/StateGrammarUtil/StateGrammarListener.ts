// Generated from src/assets/StateGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BlockContext } from "./StateGrammarParser";
import { StmtContext } from "./StateGrammarParser";
import { DeclareContext } from "./StateGrammarParser";
import { TransferContext } from "./StateGrammarParser";
import { ObjectContext } from "./StateGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `StateGrammarParser`.
 */
export interface StateGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `StateGrammarParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `StateGrammarParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `StateGrammarParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `StateGrammarParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `StateGrammarParser.declare`.
	 * @param ctx the parse tree
	 */
	enterDeclare?: (ctx: DeclareContext) => void;
	/**
	 * Exit a parse tree produced by `StateGrammarParser.declare`.
	 * @param ctx the parse tree
	 */
	exitDeclare?: (ctx: DeclareContext) => void;

	/**
	 * Enter a parse tree produced by `StateGrammarParser.transfer`.
	 * @param ctx the parse tree
	 */
	enterTransfer?: (ctx: TransferContext) => void;
	/**
	 * Exit a parse tree produced by `StateGrammarParser.transfer`.
	 * @param ctx the parse tree
	 */
	exitTransfer?: (ctx: TransferContext) => void;

	/**
	 * Enter a parse tree produced by `StateGrammarParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `StateGrammarParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;
}

