// Generated from src/assets/ActivityGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { ActivityGrammarListener } from "./ActivityGrammarListener";
import { ActivityGrammarVisitor } from "./ActivityGrammarVisitor";


export class ActivityGrammarParser extends Parser {
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
	public static readonly IDENT = 15;
	public static readonly STRING = 16;
	public static readonly WS = 17;
	public static readonly RULE_block = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_node = 2;
	public static readonly RULE_alt = 3;
	public static readonly RULE_elseif = 4;
	public static readonly RULE_else = 5;
	public static readonly RULE_elseBlock = 6;
	public static readonly RULE_repeat = 7;
	public static readonly RULE_repeatBlock = 8;
	public static readonly RULE_fork = 9;
	public static readonly RULE_forkBlock = 10;
	public static readonly RULE_swimlanes = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"block", "stmt", "node", "alt", "elseif", "else", "elseBlock", "repeat", 
		"repeatBlock", "fork", "forkBlock", "swimlanes",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "';'", "'start'", "'end'", "'stop'", "'if'", "'then'", 
		"'endif'", "'elseif'", "'else'", "'repeat'", "'endrepeat'", "'fork'", 
		"'endfork'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "IDENT", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ActivityGrammarParser._LITERAL_NAMES, ActivityGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ActivityGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ActivityGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return ActivityGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ActivityGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ActivityGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ActivityGrammarParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 24;
				this.stmt();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ActivityGrammarParser.T__0) | (1 << ActivityGrammarParser.T__2) | (1 << ActivityGrammarParser.T__3) | (1 << ActivityGrammarParser.T__4) | (1 << ActivityGrammarParser.T__5) | (1 << ActivityGrammarParser.T__10) | (1 << ActivityGrammarParser.T__12) | (1 << ActivityGrammarParser.IDENT))) !== 0));
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
		this.enterRule(_localctx, 2, ActivityGrammarParser.RULE_stmt);
		try {
			this.state = 34;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ActivityGrammarParser.T__0:
			case ActivityGrammarParser.T__2:
			case ActivityGrammarParser.T__3:
			case ActivityGrammarParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 29;
				this.node();
				}
				break;
			case ActivityGrammarParser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 30;
				this.alt();
				}
				break;
			case ActivityGrammarParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 31;
				this.repeat();
				}
				break;
			case ActivityGrammarParser.T__12:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 32;
				this.fork();
				}
				break;
			case ActivityGrammarParser.IDENT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 33;
				this.swimlanes();
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
	public node(): NodeContext {
		let _localctx: NodeContext = new NodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ActivityGrammarParser.RULE_node);
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ActivityGrammarParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this.match(ActivityGrammarParser.T__0);
				this.state = 37;
				this.match(ActivityGrammarParser.STRING);
				this.state = 38;
				this.match(ActivityGrammarParser.T__1);
				}
				break;
			case ActivityGrammarParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 39;
				this.match(ActivityGrammarParser.T__2);
				}
				break;
			case ActivityGrammarParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 40;
				this.match(ActivityGrammarParser.T__3);
				}
				break;
			case ActivityGrammarParser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 41;
				this.match(ActivityGrammarParser.T__4);
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
	public alt(): AltContext {
		let _localctx: AltContext = new AltContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ActivityGrammarParser.RULE_alt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.match(ActivityGrammarParser.T__5);
			this.state = 45;
			this.match(ActivityGrammarParser.STRING);
			this.state = 46;
			this.match(ActivityGrammarParser.T__6);
			this.state = 47;
			this.match(ActivityGrammarParser.STRING);
			this.state = 48;
			this.elseBlock();
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ActivityGrammarParser.T__8) {
				{
				{
				this.state = 49;
				this.elseif();
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ActivityGrammarParser.T__9) {
				{
				this.state = 55;
				this.else();
				}
			}

			this.state = 58;
			this.match(ActivityGrammarParser.T__7);
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
	public elseif(): ElseifContext {
		let _localctx: ElseifContext = new ElseifContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ActivityGrammarParser.RULE_elseif);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(ActivityGrammarParser.T__8);
			this.state = 61;
			this.match(ActivityGrammarParser.STRING);
			this.state = 62;
			this.match(ActivityGrammarParser.T__6);
			this.state = 63;
			this.match(ActivityGrammarParser.STRING);
			this.state = 64;
			this.elseBlock();
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
		this.enterRule(_localctx, 10, ActivityGrammarParser.RULE_else);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(ActivityGrammarParser.T__9);
			this.state = 67;
			this.match(ActivityGrammarParser.STRING);
			this.state = 68;
			this.elseBlock();
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
	public elseBlock(): ElseBlockContext {
		let _localctx: ElseBlockContext = new ElseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ActivityGrammarParser.RULE_elseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 70;
				this.stmt();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ActivityGrammarParser.T__0) | (1 << ActivityGrammarParser.T__2) | (1 << ActivityGrammarParser.T__3) | (1 << ActivityGrammarParser.T__4) | (1 << ActivityGrammarParser.T__5) | (1 << ActivityGrammarParser.T__10) | (1 << ActivityGrammarParser.T__12) | (1 << ActivityGrammarParser.IDENT))) !== 0));
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
	public repeat(): RepeatContext {
		let _localctx: RepeatContext = new RepeatContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ActivityGrammarParser.RULE_repeat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(ActivityGrammarParser.T__10);
			this.state = 76;
			this.match(ActivityGrammarParser.STRING);
			this.state = 77;
			this.repeatBlock();
			this.state = 78;
			this.match(ActivityGrammarParser.T__11);
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
	public repeatBlock(): RepeatBlockContext {
		let _localctx: RepeatBlockContext = new RepeatBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ActivityGrammarParser.RULE_repeatBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 80;
				this.stmt();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ActivityGrammarParser.T__0) | (1 << ActivityGrammarParser.T__2) | (1 << ActivityGrammarParser.T__3) | (1 << ActivityGrammarParser.T__4) | (1 << ActivityGrammarParser.T__5) | (1 << ActivityGrammarParser.T__10) | (1 << ActivityGrammarParser.T__12) | (1 << ActivityGrammarParser.IDENT))) !== 0));
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
	public fork(): ForkContext {
		let _localctx: ForkContext = new ForkContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ActivityGrammarParser.RULE_fork);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 85;
				this.match(ActivityGrammarParser.T__12);
				this.state = 86;
				this.forkBlock();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ActivityGrammarParser.T__12);
			this.state = 91;
			this.match(ActivityGrammarParser.T__13);
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
	public forkBlock(): ForkBlockContext {
		let _localctx: ForkBlockContext = new ForkBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ActivityGrammarParser.RULE_forkBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 93;
					this.stmt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 96;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public swimlanes(): SwimlanesContext {
		let _localctx: SwimlanesContext = new SwimlanesContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ActivityGrammarParser.RULE_swimlanes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(ActivityGrammarParser.IDENT);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13g\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x06\x02\x1C\n\x02\r\x02\x0E\x02\x1D\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03%\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x04-\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
		"5\n\x05\f\x05\x0E\x058\v\x05\x03\x05\x05\x05;\n\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x06\bJ\n\b\r\b\x0E\bK\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x06" +
		"\nT\n\n\r\n\x0E\nU\x03\v\x03\v\x06\vZ\n\v\r\v\x0E\v[\x03\v\x03\v\x03\f" +
		"\x06\fa\n\f\r\f\x0E\fb\x03\r\x03\r\x03\r\x02\x02\x02\x0E\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x02\x02\x02h\x02\x1B\x03\x02\x02\x02\x04$\x03\x02\x02\x02\x06,\x03" +
		"\x02\x02\x02\b.\x03\x02\x02\x02\n>\x03\x02\x02\x02\fD\x03\x02\x02\x02" +
		"\x0EI\x03\x02\x02\x02\x10M\x03\x02\x02\x02\x12S\x03\x02\x02\x02\x14Y\x03" +
		"\x02\x02\x02\x16`\x03\x02\x02\x02\x18d\x03\x02\x02\x02\x1A\x1C\x05\x04" +
		"\x03\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1B\x03\x02" +
		"\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x03\x03\x02\x02\x02\x1F%\x05\x06" +
		"\x04\x02 %\x05\b\x05\x02!%\x05\x10\t\x02\"%\x05\x14\v\x02#%\x05\x18\r" +
		"\x02$\x1F\x03\x02\x02\x02$ \x03\x02\x02\x02$!\x03\x02\x02\x02$\"\x03\x02" +
		"\x02\x02$#\x03\x02\x02\x02%\x05\x03\x02\x02\x02&\'\x07\x03\x02\x02\'(" +
		"\x07\x12\x02\x02(-\x07\x04\x02\x02)-\x07\x05\x02\x02*-\x07\x06\x02\x02" +
		"+-\x07\x07\x02\x02,&\x03\x02\x02\x02,)\x03\x02\x02\x02,*\x03\x02\x02\x02" +
		",+\x03\x02\x02\x02-\x07\x03\x02\x02\x02./\x07\b\x02\x02/0\x07\x12\x02" +
		"\x0201\x07\t\x02\x0212\x07\x12\x02\x0226\x05\x0E\b\x0235\x05\n\x06\x02" +
		"43\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x02" +
		"7:\x03\x02\x02\x0286\x03\x02\x02\x029;\x05\f\x07\x02:9\x03\x02\x02\x02" +
		":;\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x07\n\x02\x02=\t\x03\x02\x02\x02" +
		">?\x07\v\x02\x02?@\x07\x12\x02\x02@A\x07\t\x02\x02AB\x07\x12\x02\x02B" +
		"C\x05\x0E\b\x02C\v\x03\x02\x02\x02DE\x07\f\x02\x02EF\x07\x12\x02\x02F" +
		"G\x05\x0E\b\x02G\r\x03\x02\x02\x02HJ\x05\x04\x03\x02IH\x03\x02\x02\x02" +
		"JK\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02L\x0F\x03\x02\x02" +
		"\x02MN\x07\r\x02\x02NO\x07\x12\x02\x02OP\x05\x12\n\x02PQ\x07\x0E\x02\x02" +
		"Q\x11\x03\x02\x02\x02RT\x05\x04\x03\x02SR\x03\x02\x02\x02TU\x03\x02\x02" +
		"\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02V\x13\x03\x02\x02\x02WX\x07\x0F" +
		"\x02\x02XZ\x05\x16\f\x02YW\x03\x02\x02\x02Z[\x03\x02\x02\x02[Y\x03\x02" +
		"\x02\x02[\\\x03\x02\x02\x02\\]\x03\x02\x02\x02]^\x07\x10\x02\x02^\x15" +
		"\x03\x02\x02\x02_a\x05\x04\x03\x02`_\x03\x02\x02\x02ab\x03\x02\x02\x02" +
		"b`\x03\x02\x02\x02bc\x03\x02\x02\x02c\x17\x03\x02\x02\x02de\x07\x11\x02" +
		"\x02e\x19\x03\x02\x02\x02\v\x1D$,6:KU[b";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ActivityGrammarParser.__ATN) {
			ActivityGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ActivityGrammarParser._serializedATN));
		}

		return ActivityGrammarParser.__ATN;
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
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_block; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public node(): NodeContext | undefined {
		return this.tryGetRuleContext(0, NodeContext);
	}
	public alt(): AltContext | undefined {
		return this.tryGetRuleContext(0, AltContext);
	}
	public repeat(): RepeatContext | undefined {
		return this.tryGetRuleContext(0, RepeatContext);
	}
	public fork(): ForkContext | undefined {
		return this.tryGetRuleContext(0, ForkContext);
	}
	public swimlanes(): SwimlanesContext | undefined {
		return this.tryGetRuleContext(0, SwimlanesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_stmt; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NodeContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ActivityGrammarParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_node; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterNode) {
			listener.enterNode(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitNode) {
			listener.exitNode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitNode) {
			return visitor.visitNode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AltContext extends ParserRuleContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ActivityGrammarParser.STRING);
		} else {
			return this.getToken(ActivityGrammarParser.STRING, i);
		}
	}
	public elseBlock(): ElseBlockContext {
		return this.getRuleContext(0, ElseBlockContext);
	}
	public elseif(): ElseifContext[];
	public elseif(i: number): ElseifContext;
	public elseif(i?: number): ElseifContext | ElseifContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseifContext);
		} else {
			return this.getRuleContext(i, ElseifContext);
		}
	}
	public else(): ElseContext | undefined {
		return this.tryGetRuleContext(0, ElseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_alt; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterAlt) {
			listener.enterAlt(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitAlt) {
			listener.exitAlt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitAlt) {
			return visitor.visitAlt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseifContext extends ParserRuleContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ActivityGrammarParser.STRING);
		} else {
			return this.getToken(ActivityGrammarParser.STRING, i);
		}
	}
	public elseBlock(): ElseBlockContext {
		return this.getRuleContext(0, ElseBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_elseif; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterElseif) {
			listener.enterElseif(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitElseif) {
			listener.exitElseif(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitElseif) {
			return visitor.visitElseif(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(ActivityGrammarParser.STRING, 0); }
	public elseBlock(): ElseBlockContext {
		return this.getRuleContext(0, ElseBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_else; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterElse) {
			listener.enterElse(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitElse) {
			listener.exitElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitElse) {
			return visitor.visitElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseBlockContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_elseBlock; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterElseBlock) {
			listener.enterElseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitElseBlock) {
			listener.exitElseBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitElseBlock) {
			return visitor.visitElseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(ActivityGrammarParser.STRING, 0); }
	public repeatBlock(): RepeatBlockContext {
		return this.getRuleContext(0, RepeatBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_repeat; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterRepeat) {
			listener.enterRepeat(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitRepeat) {
			listener.exitRepeat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitRepeat) {
			return visitor.visitRepeat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatBlockContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_repeatBlock; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterRepeatBlock) {
			listener.enterRepeatBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitRepeatBlock) {
			listener.exitRepeatBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitRepeatBlock) {
			return visitor.visitRepeatBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForkContext extends ParserRuleContext {
	public forkBlock(): ForkBlockContext[];
	public forkBlock(i: number): ForkBlockContext;
	public forkBlock(i?: number): ForkBlockContext | ForkBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ForkBlockContext);
		} else {
			return this.getRuleContext(i, ForkBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_fork; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterFork) {
			listener.enterFork(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitFork) {
			listener.exitFork(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitFork) {
			return visitor.visitFork(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForkBlockContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_forkBlock; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterForkBlock) {
			listener.enterForkBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitForkBlock) {
			listener.exitForkBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitForkBlock) {
			return visitor.visitForkBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwimlanesContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(ActivityGrammarParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ActivityGrammarParser.RULE_swimlanes; }
	// @Override
	public enterRule(listener: ActivityGrammarListener): void {
		if (listener.enterSwimlanes) {
			listener.enterSwimlanes(this);
		}
	}
	// @Override
	public exitRule(listener: ActivityGrammarListener): void {
		if (listener.exitSwimlanes) {
			listener.exitSwimlanes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ActivityGrammarVisitor<Result>): Result {
		if (visitor.visitSwimlanes) {
			return visitor.visitSwimlanes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


