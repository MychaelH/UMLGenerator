// Generated from src/assets/CollaborationGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CollaborationGrammarListener } from "./CollaborationGrammarListener";
import { CollaborationGrammarVisitor } from "./CollaborationGrammarVisitor";


export class CollaborationGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly IDENT = 8;
	public static readonly STRING = 9;
	public static readonly WS = 10;
	public static readonly RULE_block = 0;
	public static readonly RULE_declareBlock = 1;
	public static readonly RULE_declareStmt = 2;
	public static readonly RULE_linkBlock = 3;
	public static readonly RULE_linkStmt = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"block", "declareBlock", "declareStmt", "linkBlock", "linkStmt",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'declare'", "'{'", "'}'", "':'", "';'", "'link'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "IDENT", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CollaborationGrammarParser._LITERAL_NAMES, CollaborationGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CollaborationGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CollaborationGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return CollaborationGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CollaborationGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CollaborationGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CollaborationGrammarParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 10;
			this.declareBlock();
			this.state = 11;
			this.linkBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declareBlock(): DeclareBlockContext {
		let _localctx: DeclareBlockContext = new DeclareBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CollaborationGrammarParser.RULE_declareBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this.match(CollaborationGrammarParser.T__0);
			this.state = 14;
			this.match(CollaborationGrammarParser.T__1);
			this.state = 18;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CollaborationGrammarParser.IDENT) {
				{
				{
				this.state = 15;
				this.declareStmt();
				}
				}
				this.state = 20;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 21;
			this.match(CollaborationGrammarParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declareStmt(): DeclareStmtContext {
		let _localctx: DeclareStmtContext = new DeclareStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CollaborationGrammarParser.RULE_declareStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this.match(CollaborationGrammarParser.IDENT);
			this.state = 24;
			this.match(CollaborationGrammarParser.T__3);
			this.state = 25;
			this.match(CollaborationGrammarParser.STRING);
			this.state = 26;
			this.match(CollaborationGrammarParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linkBlock(): LinkBlockContext {
		let _localctx: LinkBlockContext = new LinkBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CollaborationGrammarParser.RULE_linkBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.match(CollaborationGrammarParser.T__5);
			this.state = 29;
			this.match(CollaborationGrammarParser.T__1);
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CollaborationGrammarParser.IDENT) {
				{
				{
				this.state = 30;
				this.linkStmt();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
			this.match(CollaborationGrammarParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linkStmt(): LinkStmtContext {
		let _localctx: LinkStmtContext = new LinkStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CollaborationGrammarParser.RULE_linkStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(CollaborationGrammarParser.IDENT);
			this.state = 39;
			this.match(CollaborationGrammarParser.T__6);
			this.state = 40;
			this.match(CollaborationGrammarParser.IDENT);
			this.state = 41;
			this.match(CollaborationGrammarParser.T__3);
			this.state = 42;
			this.match(CollaborationGrammarParser.STRING);
			this.state = 43;
			this.match(CollaborationGrammarParser.T__6);
			this.state = 44;
			this.match(CollaborationGrammarParser.STRING);
			this.state = 45;
			this.match(CollaborationGrammarParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\f2\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\x13\n\x03\f\x03\x0E\x03\x16" +
		"\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x07\x05\"\n\x05\f\x05\x0E\x05%\v\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02\x02" +
		".\x02\f\x03\x02\x02\x02\x04\x0F\x03\x02\x02\x02\x06\x19\x03\x02\x02\x02" +
		"\b\x1E\x03\x02\x02\x02\n(\x03\x02\x02\x02\f\r\x05\x04\x03\x02\r\x0E\x05" +
		"\b\x05\x02\x0E\x03\x03\x02\x02\x02\x0F\x10\x07\x03\x02\x02\x10\x14\x07" +
		"\x04\x02\x02\x11\x13\x05\x06\x04\x02\x12\x11\x03\x02\x02\x02\x13\x16\x03" +
		"\x02\x02\x02\x14\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x17\x03" +
		"\x02\x02\x02\x16\x14\x03\x02\x02\x02\x17\x18\x07\x05\x02\x02\x18\x05\x03" +
		"\x02\x02\x02\x19\x1A\x07\n\x02\x02\x1A\x1B\x07\x06\x02\x02\x1B\x1C\x07" +
		"\v\x02\x02\x1C\x1D\x07\x07\x02\x02\x1D\x07\x03\x02\x02\x02\x1E\x1F\x07" +
		"\b\x02\x02\x1F#\x07\x04\x02\x02 \"\x05\n\x06\x02! \x03\x02\x02\x02\"%" +
		"\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$&\x03\x02\x02\x02" +
		"%#\x03\x02\x02\x02&\'\x07\x05\x02\x02\'\t\x03\x02\x02\x02()\x07\n\x02" +
		"\x02)*\x07\t\x02\x02*+\x07\n\x02\x02+,\x07\x06\x02\x02,-\x07\v\x02\x02" +
		"-.\x07\t\x02\x02./\x07\v\x02\x02/0\x07\x07\x02\x020\v\x03\x02\x02\x02" +
		"\x04\x14#";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CollaborationGrammarParser.__ATN) {
			CollaborationGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CollaborationGrammarParser._serializedATN));
		}

		return CollaborationGrammarParser.__ATN;
	}

}

export class BlockContext extends ParserRuleContext {
	public declareBlock(): DeclareBlockContext {
		return this.getRuleContext(0, DeclareBlockContext);
	}
	public linkBlock(): LinkBlockContext {
		return this.getRuleContext(0, LinkBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CollaborationGrammarParser.RULE_block; }
	// @Override
	public enterRule(listener: CollaborationGrammarListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CollaborationGrammarListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CollaborationGrammarVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclareBlockContext extends ParserRuleContext {
	public declareStmt(): DeclareStmtContext[];
	public declareStmt(i: number): DeclareStmtContext;
	public declareStmt(i?: number): DeclareStmtContext | DeclareStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclareStmtContext);
		} else {
			return this.getRuleContext(i, DeclareStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CollaborationGrammarParser.RULE_declareBlock; }
	// @Override
	public enterRule(listener: CollaborationGrammarListener): void {
		if (listener.enterDeclareBlock) {
			listener.enterDeclareBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CollaborationGrammarListener): void {
		if (listener.exitDeclareBlock) {
			listener.exitDeclareBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CollaborationGrammarVisitor<Result>): Result {
		if (visitor.visitDeclareBlock) {
			return visitor.visitDeclareBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclareStmtContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(CollaborationGrammarParser.IDENT, 0); }
	public STRING(): TerminalNode { return this.getToken(CollaborationGrammarParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CollaborationGrammarParser.RULE_declareStmt; }
	// @Override
	public enterRule(listener: CollaborationGrammarListener): void {
		if (listener.enterDeclareStmt) {
			listener.enterDeclareStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CollaborationGrammarListener): void {
		if (listener.exitDeclareStmt) {
			listener.exitDeclareStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CollaborationGrammarVisitor<Result>): Result {
		if (visitor.visitDeclareStmt) {
			return visitor.visitDeclareStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinkBlockContext extends ParserRuleContext {
	public linkStmt(): LinkStmtContext[];
	public linkStmt(i: number): LinkStmtContext;
	public linkStmt(i?: number): LinkStmtContext | LinkStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LinkStmtContext);
		} else {
			return this.getRuleContext(i, LinkStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CollaborationGrammarParser.RULE_linkBlock; }
	// @Override
	public enterRule(listener: CollaborationGrammarListener): void {
		if (listener.enterLinkBlock) {
			listener.enterLinkBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CollaborationGrammarListener): void {
		if (listener.exitLinkBlock) {
			listener.exitLinkBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CollaborationGrammarVisitor<Result>): Result {
		if (visitor.visitLinkBlock) {
			return visitor.visitLinkBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinkStmtContext extends ParserRuleContext {
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CollaborationGrammarParser.IDENT);
		} else {
			return this.getToken(CollaborationGrammarParser.IDENT, i);
		}
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CollaborationGrammarParser.STRING);
		} else {
			return this.getToken(CollaborationGrammarParser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CollaborationGrammarParser.RULE_linkStmt; }
	// @Override
	public enterRule(listener: CollaborationGrammarListener): void {
		if (listener.enterLinkStmt) {
			listener.enterLinkStmt(this);
		}
	}
	// @Override
	public exitRule(listener: CollaborationGrammarListener): void {
		if (listener.exitLinkStmt) {
			listener.exitLinkStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CollaborationGrammarVisitor<Result>): Result {
		if (visitor.visitLinkStmt) {
			return visitor.visitLinkStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


