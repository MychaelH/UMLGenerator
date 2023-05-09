// Generated from src/assets/SequenceGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SequenceGrammarParser`.
 */
export interface SequenceGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDecl?: (ctx: DeclContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDecl?: (ctx: DeclContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.messageSend`.
	 * @param ctx the parse tree
	 */
	enterMessageSend?: (ctx: MessageSendContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.messageSend`.
	 * @param ctx the parse tree
	 */
	exitMessageSend?: (ctx: MessageSendContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.create`.
	 * @param ctx the parse tree
	 */
	enterCreate?: (ctx: CreateContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.create`.
	 * @param ctx the parse tree
	 */
	exitCreate?: (ctx: CreateContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.destroy`.
	 * @param ctx the parse tree
	 */
	enterDestroy?: (ctx: DestroyContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.destroy`.
	 * @param ctx the parse tree
	 */
	exitDestroy?: (ctx: DestroyContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.activate`.
	 * @param ctx the parse tree
	 */
	enterActivate?: (ctx: ActivateContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.activate`.
	 * @param ctx the parse tree
	 */
	exitActivate?: (ctx: ActivateContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.deactivate`.
	 * @param ctx the parse tree
	 */
	enterDeactivate?: (ctx: DeactivateContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.deactivate`.
	 * @param ctx the parse tree
	 */
	exitDeactivate?: (ctx: DeactivateContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.opt`.
	 * @param ctx the parse tree
	 */
	enterOpt?: (ctx: OptContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.opt`.
	 * @param ctx the parse tree
	 */
	exitOpt?: (ctx: OptContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.loop`.
	 * @param ctx the parse tree
	 */
	enterLoop?: (ctx: LoopContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.loop`.
	 * @param ctx the parse tree
	 */
	exitLoop?: (ctx: LoopContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.par`.
	 * @param ctx the parse tree
	 */
	enterPar?: (ctx: ParContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.par`.
	 * @param ctx the parse tree
	 */
	exitPar?: (ctx: ParContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.alt`.
	 * @param ctx the parse tree
	 */
	enterAlt?: (ctx: AltContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.alt`.
	 * @param ctx the parse tree
	 */
	exitAlt?: (ctx: AltContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.ref`.
	 * @param ctx the parse tree
	 */
	enterRef?: (ctx: RefContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.ref`.
	 * @param ctx the parse tree
	 */
	exitRef?: (ctx: RefContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.else`.
	 * @param ctx the parse tree
	 */
	enterElse?: (ctx: ElseContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.else`.
	 * @param ctx the parse tree
	 */
	exitElse?: (ctx: ElseContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.objType`.
	 * @param ctx the parse tree
	 */
	enterObjType?: (ctx: ObjTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.objType`.
	 * @param ctx the parse tree
	 */
	exitObjType?: (ctx: ObjTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `SequenceGrammarParser.messageType`.
	 * @param ctx the parse tree
	 */
	enterMessageType?: (ctx: MessageTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SequenceGrammarParser.messageType`.
	 * @param ctx the parse tree
	 */
	exitMessageType?: (ctx: MessageTypeContext) => void;
}

