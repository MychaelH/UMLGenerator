// Generated from src/assets/StateGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { StateGrammarListener } from "./StateGrammarListener";
import { StateGrammarVisitor } from "./StateGrammarVisitor";


export class StateGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly IDENT = 9;
	public static readonly STRING = 10;
	public static readonly WS = 11;
	public static readonly RULE_block = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_declare = 2;
	public static readonly RULE_transfer = 3;
	public static readonly RULE_object = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"block", "stmt", "declare", "transfer", "object",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'state'", "'{'", "'}'", "'<choice>'", "'-->'", "':'", "';'", 
		"'[*]'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "IDENT", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(StateGrammarParser._LITERAL_NAMES, StateGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return StateGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "StateGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return StateGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return StateGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(StateGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, StateGrammarParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 10;
				this.stmt();
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << StateGrammarParser.T__0) | (1 << StateGrammarParser.T__7) | (1 << StateGrammarParser.IDENT))) !== 0));
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
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, StateGrammarParser.RULE_stmt);
		try {
			this.state = 17;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case StateGrammarParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 15;
				this.declare();
				}
				break;
			case StateGrammarParser.T__7:
			case StateGrammarParser.IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 16;
				this.transfer();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public declare(): DeclareContext {
		let _localctx: DeclareContext = new DeclareContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, StateGrammarParser.RULE_declare);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this.match(StateGrammarParser.T__0);
			this.state = 20;
			this.match(StateGrammarParser.IDENT);
			this.state = 27;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case StateGrammarParser.T__1:
				{
				{
				this.state = 21;
				this.match(StateGrammarParser.T__1);
				this.state = 22;
				this.block();
				this.state = 23;
				this.match(StateGrammarParser.T__2);
				}
				}
				break;
			case StateGrammarParser.STRING:
				{
				this.state = 25;
				this.match(StateGrammarParser.STRING);
				}
				break;
			case StateGrammarParser.T__3:
				{
				this.state = 26;
				this.match(StateGrammarParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
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
	public transfer(): TransferContext {
		let _localctx: TransferContext = new TransferContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, StateGrammarParser.RULE_transfer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.object();
			this.state = 30;
			this.match(StateGrammarParser.T__4);
			this.state = 31;
			this.object();
			this.state = 32;
			this.match(StateGrammarParser.T__5);
			this.state = 33;
			this.match(StateGrammarParser.STRING);
			this.state = 34;
			this.match(StateGrammarParser.T__6);
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
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, StateGrammarParser.RULE_object);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			_la = this._input.LA(1);
			if (!(_la === StateGrammarParser.T__7 || _la === StateGrammarParser.IDENT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r)\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x06" +
		"\x02\x0E\n\x02\r\x02\x0E\x02\x0F\x03\x03\x03\x03\x05\x03\x14\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x1E" +
		"\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02" +
		"\x03\x03\x02\n\v\x02\'\x02\r\x03\x02\x02\x02\x04\x13\x03\x02\x02\x02\x06" +
		"\x15\x03\x02\x02\x02\b\x1F\x03\x02\x02\x02\n&\x03\x02\x02\x02\f\x0E\x05" +
		"\x04\x03\x02\r\f\x03\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\r\x03\x02" +
		"\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x03\x03\x02\x02\x02\x11\x14\x05\x06" +
		"\x04\x02\x12\x14\x05\b\x05\x02\x13\x11\x03\x02\x02\x02\x13\x12\x03\x02" +
		"\x02\x02\x14\x05\x03\x02\x02\x02\x15\x16\x07\x03\x02\x02\x16\x1D\x07\v" +
		"\x02\x02\x17\x18\x07\x04\x02\x02\x18\x19\x05\x02\x02\x02\x19\x1A\x07\x05" +
		"\x02\x02\x1A\x1E\x03\x02\x02\x02\x1B\x1E\x07\f\x02\x02\x1C\x1E\x07\x06" +
		"\x02\x02\x1D\x17\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1C\x03\x02" +
		"\x02\x02\x1E\x07\x03\x02\x02\x02\x1F \x05\n\x06\x02 !\x07\x07\x02\x02" +
		"!\"\x05\n\x06\x02\"#\x07\b\x02\x02#$\x07\f\x02\x02$%\x07\t\x02\x02%\t" +
		"\x03\x02\x02\x02&\'\t\x02\x02\x02\'\v\x03\x02\x02\x02\x05\x0F\x13\x1D";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!StateGrammarParser.__ATN) {
			StateGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(StateGrammarParser._serializedATN));
		}

		return StateGrammarParser.__ATN;
	}

}

export class BlockContext extends ParserRuleContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StateGrammarParser.RULE_block; }
	// @Override
	public enterRule(listener: StateGrammarListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: StateGrammarListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StateGrammarVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public declare(): DeclareContext | undefined {
		return this.tryGetRuleContext(0, DeclareContext);
	}
	public transfer(): TransferContext | undefined {
		return this.tryGetRuleContext(0, TransferContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StateGrammarParser.RULE_stmt; }
	// @Override
	public enterRule(listener: StateGrammarListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: StateGrammarListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StateGrammarVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclareContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(StateGrammarParser.IDENT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(StateGrammarParser.STRING, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StateGrammarParser.RULE_declare; }
	// @Override
	public enterRule(listener: StateGrammarListener): void {
		if (listener.enterDeclare) {
			listener.enterDeclare(this);
		}
	}
	// @Override
	public exitRule(listener: StateGrammarListener): void {
		if (listener.exitDeclare) {
			listener.exitDeclare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StateGrammarVisitor<Result>): Result {
		if (visitor.visitDeclare) {
			return visitor.visitDeclare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransferContext extends ParserRuleContext {
	public object(): ObjectContext[];
	public object(i: number): ObjectContext;
	public object(i?: number): ObjectContext | ObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectContext);
		} else {
			return this.getRuleContext(i, ObjectContext);
		}
	}
	public STRING(): TerminalNode { return this.getToken(StateGrammarParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StateGrammarParser.RULE_transfer; }
	// @Override
	public enterRule(listener: StateGrammarListener): void {
		if (listener.enterTransfer) {
			listener.enterTransfer(this);
		}
	}
	// @Override
	public exitRule(listener: StateGrammarListener): void {
		if (listener.exitTransfer) {
			listener.exitTransfer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StateGrammarVisitor<Result>): Result {
		if (visitor.visitTransfer) {
			return visitor.visitTransfer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(StateGrammarParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StateGrammarParser.RULE_object; }
	// @Override
	public enterRule(listener: StateGrammarListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: StateGrammarListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StateGrammarVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


