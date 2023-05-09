// Generated from src/assets/CollaborationGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BlockContext } from "./CollaborationGrammarParser";
import { DeclareBlockContext } from "./CollaborationGrammarParser";
import { DeclareStmtContext } from "./CollaborationGrammarParser";
import { LinkBlockContext } from "./CollaborationGrammarParser";
import { LinkStmtContext } from "./CollaborationGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CollaborationGrammarParser`.
 */
export interface CollaborationGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CollaborationGrammarParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `CollaborationGrammarParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `CollaborationGrammarParser.declareBlock`.
	 * @param ctx the parse tree
	 */
	enterDeclareBlock?: (ctx: DeclareBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CollaborationGrammarParser.declareBlock`.
	 * @param ctx the parse tree
	 */
	exitDeclareBlock?: (ctx: DeclareBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CollaborationGrammarParser.declareStmt`.
	 * @param ctx the parse tree
	 */
	enterDeclareStmt?: (ctx: DeclareStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CollaborationGrammarParser.declareStmt`.
	 * @param ctx the parse tree
	 */
	exitDeclareStmt?: (ctx: DeclareStmtContext) => void;

	/**
	 * Enter a parse tree produced by `CollaborationGrammarParser.linkBlock`.
	 * @param ctx the parse tree
	 */
	enterLinkBlock?: (ctx: LinkBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CollaborationGrammarParser.linkBlock`.
	 * @param ctx the parse tree
	 */
	exitLinkBlock?: (ctx: LinkBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CollaborationGrammarParser.linkStmt`.
	 * @param ctx the parse tree
	 */
	enterLinkStmt?: (ctx: LinkStmtContext) => void;
	/**
	 * Exit a parse tree produced by `CollaborationGrammarParser.linkStmt`.
	 * @param ctx the parse tree
	 */
	exitLinkStmt?: (ctx: LinkStmtContext) => void;
}

