// Generated from src/assets/SequenceGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { SequenceGrammarListener } from "./SequenceGrammarListener";
import { SequenceGrammarVisitor } from "./SequenceGrammarVisitor";


export class SequenceGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly IDENT = 29;
	public static readonly STRING = 30;
	public static readonly WS = 31;
	public static readonly RULE_block = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_decl = 2;
	public static readonly RULE_messageSend = 3;
	public static readonly RULE_create = 4;
	public static readonly RULE_destroy = 5;
	public static readonly RULE_activate = 6;
	public static readonly RULE_deactivate = 7;
	public static readonly RULE_opt = 8;
	public static readonly RULE_loop = 9;
	public static readonly RULE_par = 10;
	public static readonly RULE_alt = 11;
	public static readonly RULE_ref = 12;
	public static readonly RULE_else = 13;
	public static readonly RULE_objType = 14;
	public static readonly RULE_object = 15;
	public static readonly RULE_messageType = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"block", "stmt", "decl", "messageSend", "create", "destroy", "activate", 
		"deactivate", "opt", "loop", "par", "alt", "ref", "else", "objType", "object", 
		"messageType",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "':'", "'create'", "'destroy'", "'activate'", "'deactivate'", 
		"'opt'", "'end'", "'loop'", "'par'", "'alt'", "'ref'", "','", "'else'", 
		"'actor'", "'boundary'", "'control'", "'database'", "'entity'", "'collections'", 
		"'queue'", "'participant'", "'*'", "'->'", "'-->'", "'->>'", "'-x>'", 
		"'-\\''",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "IDENT", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SequenceGrammarParser._LITERAL_NAMES, SequenceGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SequenceGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SequenceGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return SequenceGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SequenceGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SequenceGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SequenceGrammarParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 34;
				this.stmt();
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SequenceGrammarParser.T__2) | (1 << SequenceGrammarParser.T__3) | (1 << SequenceGrammarParser.T__4) | (1 << SequenceGrammarParser.T__5) | (1 << SequenceGrammarParser.T__6) | (1 << SequenceGrammarParser.T__8) | (1 << SequenceGrammarParser.T__9) | (1 << SequenceGrammarParser.T__10) | (1 << SequenceGrammarParser.T__11) | (1 << SequenceGrammarParser.T__14) | (1 << SequenceGrammarParser.T__15) | (1 << SequenceGrammarParser.T__16) | (1 << SequenceGrammarParser.T__17) | (1 << SequenceGrammarParser.T__18) | (1 << SequenceGrammarParser.T__19) | (1 << SequenceGrammarParser.T__20) | (1 << SequenceGrammarParser.T__21) | (1 << SequenceGrammarParser.T__22) | (1 << SequenceGrammarParser.IDENT))) !== 0));
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
		this.enterRule(_localctx, 2, SequenceGrammarParser.RULE_stmt);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SequenceGrammarParser.T__14:
			case SequenceGrammarParser.T__15:
			case SequenceGrammarParser.T__16:
			case SequenceGrammarParser.T__17:
			case SequenceGrammarParser.T__18:
			case SequenceGrammarParser.T__19:
			case SequenceGrammarParser.T__20:
			case SequenceGrammarParser.T__21:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 39;
				this.decl();
				}
				break;
			case SequenceGrammarParser.T__22:
			case SequenceGrammarParser.IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 40;
				this.messageSend();
				}
				break;
			case SequenceGrammarParser.T__2:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 41;
				this.create();
				}
				break;
			case SequenceGrammarParser.T__3:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 42;
				this.destroy();
				}
				break;
			case SequenceGrammarParser.T__4:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 43;
				this.activate();
				}
				break;
			case SequenceGrammarParser.T__5:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 44;
				this.deactivate();
				}
				break;
			case SequenceGrammarParser.T__6:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 45;
				this.opt();
				}
				break;
			case SequenceGrammarParser.T__8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 46;
				this.loop();
				}
				break;
			case SequenceGrammarParser.T__9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 47;
				this.par();
				}
				break;
			case SequenceGrammarParser.T__10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 48;
				this.alt();
				}
				break;
			case SequenceGrammarParser.T__11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 49;
				this.ref();
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
	public decl(): DeclContext {
		let _localctx: DeclContext = new DeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SequenceGrammarParser.RULE_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.objType();
			this.state = 53;
			this.match(SequenceGrammarParser.IDENT);
			this.state = 54;
			this.match(SequenceGrammarParser.T__0);
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
	public messageSend(): MessageSendContext {
		let _localctx: MessageSendContext = new MessageSendContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SequenceGrammarParser.RULE_messageSend);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.object();
			this.state = 57;
			this.messageType();
			this.state = 58;
			this.object();
			this.state = 59;
			this.match(SequenceGrammarParser.T__1);
			this.state = 60;
			this.match(SequenceGrammarParser.STRING);
			this.state = 61;
			this.match(SequenceGrammarParser.T__0);
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
	public create(): CreateContext {
		let _localctx: CreateContext = new CreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SequenceGrammarParser.RULE_create);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(SequenceGrammarParser.T__2);
			this.state = 64;
			this.decl();
			this.state = 65;
			this.messageSend();
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
	public destroy(): DestroyContext {
		let _localctx: DestroyContext = new DestroyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SequenceGrammarParser.RULE_destroy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(SequenceGrammarParser.T__3);
			this.state = 68;
			this.match(SequenceGrammarParser.IDENT);
			this.state = 69;
			this.match(SequenceGrammarParser.T__0);
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
	public activate(): ActivateContext {
		let _localctx: ActivateContext = new ActivateContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SequenceGrammarParser.RULE_activate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(SequenceGrammarParser.T__4);
			this.state = 72;
			this.match(SequenceGrammarParser.IDENT);
			this.state = 73;
			this.match(SequenceGrammarParser.T__0);
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
	public deactivate(): DeactivateContext {
		let _localctx: DeactivateContext = new DeactivateContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SequenceGrammarParser.RULE_deactivate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(SequenceGrammarParser.T__5);
			this.state = 76;
			this.match(SequenceGrammarParser.IDENT);
			this.state = 77;
			this.match(SequenceGrammarParser.T__0);
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
	public opt(): OptContext {
		let _localctx: OptContext = new OptContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SequenceGrammarParser.RULE_opt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(SequenceGrammarParser.T__6);
			this.state = 80;
			this.match(SequenceGrammarParser.STRING);
			this.state = 81;
			this.match(SequenceGrammarParser.T__1);
			this.state = 82;
			this.block();
			this.state = 83;
			this.match(SequenceGrammarParser.T__7);
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
	public loop(): LoopContext {
		let _localctx: LoopContext = new LoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SequenceGrammarParser.RULE_loop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(SequenceGrammarParser.T__8);
			this.state = 86;
			this.match(SequenceGrammarParser.STRING);
			this.state = 87;
			this.match(SequenceGrammarParser.T__1);
			this.state = 88;
			this.block();
			this.state = 89;
			this.match(SequenceGrammarParser.T__7);
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
	public par(): ParContext {
		let _localctx: ParContext = new ParContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SequenceGrammarParser.RULE_par);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(SequenceGrammarParser.T__9);
			this.state = 92;
			this.match(SequenceGrammarParser.STRING);
			this.state = 93;
			this.match(SequenceGrammarParser.T__1);
			this.state = 94;
			this.block();
			this.state = 95;
			this.match(SequenceGrammarParser.T__7);
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
	public alt(): AltContext {
		let _localctx: AltContext = new AltContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SequenceGrammarParser.RULE_alt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(SequenceGrammarParser.T__10);
			this.state = 98;
			this.match(SequenceGrammarParser.STRING);
			this.state = 99;
			this.match(SequenceGrammarParser.T__1);
			this.state = 100;
			this.block();
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SequenceGrammarParser.T__13) {
				{
				{
				this.state = 101;
				this.else();
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 107;
			this.match(SequenceGrammarParser.T__7);
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
	public ref(): RefContext {
		let _localctx: RefContext = new RefContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SequenceGrammarParser.RULE_ref);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(SequenceGrammarParser.T__11);
			this.state = 110;
			this.match(SequenceGrammarParser.IDENT);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SequenceGrammarParser.T__12) {
				{
				{
				this.state = 111;
				this.match(SequenceGrammarParser.T__12);
				this.state = 112;
				this.match(SequenceGrammarParser.IDENT);
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 118;
			this.match(SequenceGrammarParser.T__1);
			this.state = 119;
			this.match(SequenceGrammarParser.STRING);
			this.state = 120;
			this.match(SequenceGrammarParser.T__0);
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
	public else(): ElseContext {
		let _localctx: ElseContext = new ElseContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SequenceGrammarParser.RULE_else);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(SequenceGrammarParser.T__13);
			this.state = 123;
			this.match(SequenceGrammarParser.STRING);
			this.state = 124;
			this.match(SequenceGrammarParser.T__1);
			this.state = 125;
			this.block();
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
	public objType(): ObjTypeContext {
		let _localctx: ObjTypeContext = new ObjTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SequenceGrammarParser.RULE_objType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SequenceGrammarParser.T__14) | (1 << SequenceGrammarParser.T__15) | (1 << SequenceGrammarParser.T__16) | (1 << SequenceGrammarParser.T__17) | (1 << SequenceGrammarParser.T__18) | (1 << SequenceGrammarParser.T__19) | (1 << SequenceGrammarParser.T__20) | (1 << SequenceGrammarParser.T__21))) !== 0))) {
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
	// @RuleVersion(0)
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SequenceGrammarParser.RULE_object);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			_la = this._input.LA(1);
			if (!(_la === SequenceGrammarParser.T__22 || _la === SequenceGrammarParser.IDENT)) {
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
	// @RuleVersion(0)
	public messageType(): MessageTypeContext {
		let _localctx: MessageTypeContext = new MessageTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SequenceGrammarParser.RULE_messageType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SequenceGrammarParser.T__23) | (1 << SequenceGrammarParser.T__24) | (1 << SequenceGrammarParser.T__25) | (1 << SequenceGrammarParser.T__26) | (1 << SequenceGrammarParser.T__27))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\x88\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x06\x02&\n\x02\r\x02\x0E\x02\'\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x035\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x07\ri\n\r\f\r\x0E" +
		"\rl\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0Et\n\x0E\f\x0E" +
		"\x0E\x0Ew\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x02\x02\x02\x13\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"\x02\x05\x03\x02\x11\x18\x04\x02\x19\x19\x1F\x1F\x03\x02\x1A\x1E\x02\x83" +
		"\x02%\x03\x02\x02\x02\x044\x03\x02\x02\x02\x066\x03\x02\x02\x02\b:\x03" +
		"\x02\x02\x02\nA\x03\x02\x02\x02\fE\x03\x02\x02\x02\x0EI\x03\x02\x02\x02" +
		"\x10M\x03\x02\x02\x02\x12Q\x03\x02\x02\x02\x14W\x03\x02\x02\x02\x16]\x03" +
		"\x02\x02\x02\x18c\x03\x02\x02\x02\x1Ao\x03\x02\x02\x02\x1C|\x03\x02\x02" +
		"\x02\x1E\x81\x03\x02\x02\x02 \x83\x03\x02\x02\x02\"\x85\x03\x02\x02\x02" +
		"$&\x05\x04\x03\x02%$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'%\x03\x02\x02" +
		"\x02\'(\x03\x02\x02\x02(\x03\x03\x02\x02\x02)5\x05\x06\x04\x02*5\x05\b" +
		"\x05\x02+5\x05\n\x06\x02,5\x05\f\x07\x02-5\x05\x0E\b\x02.5\x05\x10\t\x02" +
		"/5\x05\x12\n\x0205\x05\x14\v\x0215\x05\x16\f\x0225\x05\x18\r\x0235\x05" +
		"\x1A\x0E\x024)\x03\x02\x02\x024*\x03\x02\x02\x024+\x03\x02\x02\x024,\x03" +
		"\x02\x02\x024-\x03\x02\x02\x024.\x03\x02\x02\x024/\x03\x02\x02\x0240\x03" +
		"\x02\x02\x0241\x03\x02\x02\x0242\x03\x02\x02\x0243\x03\x02\x02\x025\x05" +
		"\x03\x02\x02\x0267\x05\x1E\x10\x0278\x07\x1F\x02\x0289\x07\x03\x02\x02" +
		"9\x07\x03\x02\x02\x02:;\x05 \x11\x02;<\x05\"\x12\x02<=\x05 \x11\x02=>" +
		"\x07\x04\x02\x02>?\x07 \x02\x02?@\x07\x03\x02\x02@\t\x03\x02\x02\x02A" +
		"B\x07\x05\x02\x02BC\x05\x06\x04\x02CD\x05\b\x05\x02D\v\x03\x02\x02\x02" +
		"EF\x07\x06\x02\x02FG\x07\x1F\x02\x02GH\x07\x03\x02\x02H\r\x03\x02\x02" +
		"\x02IJ\x07\x07\x02\x02JK\x07\x1F\x02\x02KL\x07\x03\x02\x02L\x0F\x03\x02" +
		"\x02\x02MN\x07\b\x02\x02NO\x07\x1F\x02\x02OP\x07\x03\x02\x02P\x11\x03" +
		"\x02\x02\x02QR\x07\t\x02\x02RS\x07 \x02\x02ST\x07\x04\x02\x02TU\x05\x02" +
		"\x02\x02UV\x07\n\x02\x02V\x13\x03\x02\x02\x02WX\x07\v\x02\x02XY\x07 \x02" +
		"\x02YZ\x07\x04\x02\x02Z[\x05\x02\x02\x02[\\\x07\n\x02\x02\\\x15\x03\x02" +
		"\x02\x02]^\x07\f\x02\x02^_\x07 \x02\x02_`\x07\x04\x02\x02`a\x05\x02\x02" +
		"\x02ab\x07\n\x02\x02b\x17\x03\x02\x02\x02cd\x07\r\x02\x02de\x07 \x02\x02" +
		"ef\x07\x04\x02\x02fj\x05\x02\x02\x02gi\x05\x1C\x0F\x02hg\x03\x02\x02\x02" +
		"il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02" +
		"lj\x03\x02\x02\x02mn\x07\n\x02\x02n\x19\x03\x02\x02\x02op\x07\x0E\x02" +
		"\x02pu\x07\x1F\x02\x02qr\x07\x0F\x02\x02rt\x07\x1F\x02\x02sq\x03\x02\x02" +
		"\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02" +
		"\x02wu\x03\x02\x02\x02xy\x07\x04\x02\x02yz\x07 \x02\x02z{\x07\x03\x02" +
		"\x02{\x1B\x03\x02\x02\x02|}\x07\x10\x02\x02}~\x07 \x02\x02~\x7F\x07\x04" +
		"\x02\x02\x7F\x80\x05\x02\x02\x02\x80\x1D\x03\x02\x02\x02\x81\x82\t\x02" +
		"\x02\x02\x82\x1F\x03\x02\x02\x02\x83\x84\t\x03\x02\x02\x84!\x03\x02\x02" +
		"\x02\x85\x86\t\x04\x02\x02\x86#\x03\x02\x02\x02\x06\'4ju";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SequenceGrammarParser.__ATN) {
			SequenceGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SequenceGrammarParser._serializedATN));
		}

		return SequenceGrammarParser.__ATN;
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
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_block; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public decl(): DeclContext | undefined {
		return this.tryGetRuleContext(0, DeclContext);
	}
	public messageSend(): MessageSendContext | undefined {
		return this.tryGetRuleContext(0, MessageSendContext);
	}
	public create(): CreateContext | undefined {
		return this.tryGetRuleContext(0, CreateContext);
	}
	public destroy(): DestroyContext | undefined {
		return this.tryGetRuleContext(0, DestroyContext);
	}
	public activate(): ActivateContext | undefined {
		return this.tryGetRuleContext(0, ActivateContext);
	}
	public deactivate(): DeactivateContext | undefined {
		return this.tryGetRuleContext(0, DeactivateContext);
	}
	public opt(): OptContext | undefined {
		return this.tryGetRuleContext(0, OptContext);
	}
	public loop(): LoopContext | undefined {
		return this.tryGetRuleContext(0, LoopContext);
	}
	public par(): ParContext | undefined {
		return this.tryGetRuleContext(0, ParContext);
	}
	public alt(): AltContext | undefined {
		return this.tryGetRuleContext(0, AltContext);
	}
	public ref(): RefContext | undefined {
		return this.tryGetRuleContext(0, RefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_stmt; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclContext extends ParserRuleContext {
	public objType(): ObjTypeContext {
		return this.getRuleContext(0, ObjTypeContext);
	}
	public IDENT(): TerminalNode { return this.getToken(SequenceGrammarParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_decl; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterDecl) {
			listener.enterDecl(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitDecl) {
			listener.exitDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitDecl) {
			return visitor.visitDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageSendContext extends ParserRuleContext {
	public object(): ObjectContext[];
	public object(i: number): ObjectContext;
	public object(i?: number): ObjectContext | ObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectContext);
		} else {
			return this.getRuleContext(i, ObjectContext);
		}
	}
	public messageType(): MessageTypeContext {
		return this.getRuleContext(0, MessageTypeContext);
	}
	public STRING(): TerminalNode { return this.getToken(SequenceGrammarParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_messageSend; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterMessageSend) {
			listener.enterMessageSend(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitMessageSend) {
			listener.exitMessageSend(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitMessageSend) {
			return visitor.visitMessageSend(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateContext extends ParserRuleContext {
	public decl(): DeclContext {
		return this.getRuleContext(0, DeclContext);
	}
	public messageSend(): MessageSendContext {
		return this.getRuleContext(0, MessageSendContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_create; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterCreate) {
			listener.enterCreate(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitCreate) {
			listener.exitCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitCreate) {
			return visitor.visitCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DestroyContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(SequenceGrammarParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_destroy; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterDestroy) {
			listener.enterDestroy(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitDestroy) {
			listener.exitDestroy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitDestroy) {
			return visitor.visitDestroy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActivateContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(SequenceGrammarParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_activate; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterActivate) {
			listener.enterActivate(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitActivate) {
			listener.exitActivate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitActivate) {
			return visitor.visitActivate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeactivateContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(SequenceGrammarParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_deactivate; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterDeactivate) {
			listener.enterDeactivate(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitDeactivate) {
			listener.exitDeactivate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitDeactivate) {
			return visitor.visitDeactivate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SequenceGrammarParser.STRING, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_opt; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterOpt) {
			listener.enterOpt(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitOpt) {
			listener.exitOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitOpt) {
			return visitor.visitOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SequenceGrammarParser.STRING, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_loop; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterLoop) {
			listener.enterLoop(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitLoop) {
			listener.exitLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitLoop) {
			return visitor.visitLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SequenceGrammarParser.STRING, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_par; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterPar) {
			listener.enterPar(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitPar) {
			listener.exitPar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitPar) {
			return visitor.visitPar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AltContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SequenceGrammarParser.STRING, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public else(): ElseContext[];
	public else(i: number): ElseContext;
	public else(i?: number): ElseContext | ElseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseContext);
		} else {
			return this.getRuleContext(i, ElseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_alt; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterAlt) {
			listener.enterAlt(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitAlt) {
			listener.exitAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitAlt) {
			return visitor.visitAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefContext extends ParserRuleContext {
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SequenceGrammarParser.IDENT);
		} else {
			return this.getToken(SequenceGrammarParser.IDENT, i);
		}
	}
	public STRING(): TerminalNode { return this.getToken(SequenceGrammarParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_ref; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterRef) {
			listener.enterRef(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitRef) {
			listener.exitRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitRef) {
			return visitor.visitRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SequenceGrammarParser.STRING, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_else; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterElse) {
			listener.enterElse(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitElse) {
			listener.exitElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitElse) {
			return visitor.visitElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_objType; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterObjType) {
			listener.enterObjType(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitObjType) {
			listener.exitObjType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitObjType) {
			return visitor.visitObjType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(SequenceGrammarParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_object; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SequenceGrammarParser.RULE_messageType; }
	// @Override
	public enterRule(listener: SequenceGrammarListener): void {
		if (listener.enterMessageType) {
			listener.enterMessageType(this);
		}
	}
	// @Override
	public exitRule(listener: SequenceGrammarListener): void {
		if (listener.exitMessageType) {
			listener.exitMessageType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SequenceGrammarVisitor<Result>): Result {
		if (visitor.visitMessageType) {
			return visitor.visitMessageType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


