// Generated from src/assets/SequenceGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { BlockContext } from "./SequenceGrammarParser";
import { StmtContext } from "./SequenceGrammarParser";
import { DeclContext } from "./SequenceGrammarParser";
import { MessageSendContext } from "./SequenceGrammarParser";
import { CreateContext } from "./SequenceGrammarParser";
import { DestroyContext } from "./SequenceGrammarParser";
import { ActivateContext } from "./SequenceGrammarParser";
import { DeactivateContext } from "./SequenceGrammarParser";
import { OptContext } from "./SequenceGrammarParser";
import { LoopContext } from "./SequenceGrammarParser";
import { ParContext } from "./SequenceGrammarParser";
import { AltContext } from "./SequenceGrammarParser";
import { RefContext } from "./SequenceGrammarParser";
import { ElseContext } from "./SequenceGrammarParser";
import { ObjTypeContext } from "./SequenceGrammarParser";
import { ObjectContext } from "./SequenceGrammarParser";
import { MessageTypeContext } from "./SequenceGrammarParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SequenceGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SequenceGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl?: (ctx: DeclContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.messageSend`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageSend?: (ctx: MessageSendContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.create`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate?: (ctx: CreateContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.destroy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestroy?: (ctx: DestroyContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.activate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivate?: (ctx: ActivateContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.deactivate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeactivate?: (ctx: DeactivateContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.opt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpt?: (ctx: OptContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop?: (ctx: LoopContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.par`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPar?: (ctx: ParContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.alt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlt?: (ctx: AltContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRef?: (ctx: RefContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.else`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse?: (ctx: ElseContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.objType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjType?: (ctx: ObjTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `SequenceGrammarParser.messageType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageType?: (ctx: MessageTypeContext) => Result;
}

