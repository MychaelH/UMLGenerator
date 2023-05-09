// Generated from src/assets/StateGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class StateGrammarLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "IDENT", 
		"STRING", "ESC", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'state'", "'{'", "'}'", "'<choice>'", "'-->'", "':'", "';'", 
		"'[*]'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "IDENT", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(StateGrammarLexer._LITERAL_NAMES, StateGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return StateGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(StateGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "StateGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return StateGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return StateGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return StateGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return StateGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\r[\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\n>\n\n\f\n\x0E\nA\v\n\x03\n" +
		"\x03\n\x03\v\x03\v\x03\v\x07\vH\n\v\f\v\x0E\vK\v\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x05\fS\n\f\x03\r\x06\rV\n\r\r\r\x0E\rW\x03\r\x03\r\x04" +
		"?I\x02\x02\x0E\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
		"\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\x02\x19\x02\r" +
		"\x03\x02\x03\x05\x02\v\f\x0F\x0F\"\"\x02_\x02\x03\x03\x02\x02\x02\x02" +
		"\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02" +
		"\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11" +
		"\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x19" +
		"\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05!\x03\x02\x02\x02\x07#\x03" +
		"\x02\x02\x02\t%\x03\x02\x02\x02\v.\x03\x02\x02\x02\r2\x03\x02\x02\x02" +
		"\x0F4\x03\x02\x02\x02\x116\x03\x02\x02\x02\x13:\x03\x02\x02\x02\x15D\x03" +
		"\x02\x02\x02\x17R\x03\x02\x02\x02\x19U\x03\x02\x02\x02\x1B\x1C\x07u\x02" +
		"\x02\x1C\x1D\x07v\x02\x02\x1D\x1E\x07c\x02\x02\x1E\x1F\x07v\x02\x02\x1F" +
		" \x07g\x02\x02 \x04\x03\x02\x02\x02!\"\x07}\x02\x02\"\x06\x03\x02\x02" +
		"\x02#$\x07\x7F\x02\x02$\b\x03\x02\x02\x02%&\x07>\x02\x02&\'\x07e\x02\x02" +
		"\'(\x07j\x02\x02()\x07q\x02\x02)*\x07k\x02\x02*+\x07e\x02\x02+,\x07g\x02" +
		"\x02,-\x07@\x02\x02-\n\x03\x02\x02\x02./\x07/\x02\x02/0\x07/\x02\x020" +
		"1\x07@\x02\x021\f\x03\x02\x02\x0223\x07<\x02\x023\x0E\x03\x02\x02\x02" +
		"45\x07=\x02\x025\x10\x03\x02\x02\x0267\x07]\x02\x0278\x07,\x02\x0289\x07" +
		"_\x02\x029\x12\x03\x02\x02\x02:?\x07)\x02\x02;>\x05\x17\f\x02<>\v\x02" +
		"\x02\x02=;\x03\x02\x02\x02=<\x03\x02\x02\x02>A\x03\x02\x02\x02?@\x03\x02" +
		"\x02\x02?=\x03\x02\x02\x02@B\x03\x02\x02\x02A?\x03\x02\x02\x02BC\x07)" +
		"\x02\x02C\x14\x03\x02\x02\x02DI\x07$\x02\x02EH\x05\x17\f\x02FH\v\x02\x02" +
		"\x02GE\x03\x02\x02\x02GF\x03\x02\x02\x02HK\x03\x02\x02\x02IJ\x03\x02\x02" +
		"\x02IG\x03\x02\x02\x02JL\x03\x02\x02\x02KI\x03\x02\x02\x02LM\x07$\x02" +
		"\x02M\x16\x03\x02\x02\x02NO\x07^\x02\x02OS\x07$\x02\x02PQ\x07^\x02\x02" +
		"QS\x07^\x02\x02RN\x03\x02\x02\x02RP\x03\x02\x02\x02S\x18\x03\x02\x02\x02" +
		"TV\t\x02\x02\x02UT\x03\x02\x02\x02VW\x03\x02\x02\x02WU\x03\x02\x02\x02" +
		"WX\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\b\r\x02\x02Z\x1A\x03\x02\x02\x02" +
		"\t\x02=?GIRW\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!StateGrammarLexer.__ATN) {
			StateGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(StateGrammarLexer._serializedATN));
		}

		return StateGrammarLexer.__ATN;
	}

}

