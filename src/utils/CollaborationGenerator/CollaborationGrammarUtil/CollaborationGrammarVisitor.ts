// Generated from src/assets/CollaborationGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { BlockContext } from "./CollaborationGrammarParser";
import { DeclareBlockContext } from "./CollaborationGrammarParser";
import { DeclareStmtContext } from "./CollaborationGrammarParser";
import { LinkBlockContext } from "./CollaborationGrammarParser";
import { LinkStmtContext } from "./CollaborationGrammarParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CollaborationGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CollaborationGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CollaborationGrammarParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CollaborationGrammarParser.declareBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareBlock?: (ctx: DeclareBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CollaborationGrammarParser.declareStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareStmt?: (ctx: DeclareStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CollaborationGrammarParser.linkBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinkBlock?: (ctx: LinkBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CollaborationGrammarParser.linkStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinkStmt?: (ctx: LinkStmtContext) => Result;
}

