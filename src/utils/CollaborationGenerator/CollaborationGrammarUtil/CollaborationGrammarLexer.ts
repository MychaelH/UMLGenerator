// Generated from src/assets/CollaborationGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class CollaborationGrammarLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "IDENT", "STRING", 
		"ESC", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'declare'", "'{'", "'}'", "':'", "';'", "'link'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "IDENT", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CollaborationGrammarLexer._LITERAL_NAMES, CollaborationGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CollaborationGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CollaborationGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CollaborationGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return CollaborationGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CollaborationGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CollaborationGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CollaborationGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\fQ\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t4\n\t\f\t\x0E\t7\v\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x07\n>\n\n\f\n\x0E\nA\v\n\x03\n\x03\n\x03\v" +
		"\x03\v\x03\v\x03\v\x05\vI\n\v\x03\f\x06\fL\n\f\r\f\x0E\fM\x03\f\x03\f" +
		"\x045?\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
		"\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\x02\x17\x02\f\x03\x02\x03" +
		"\x05\x02\v\f\x0F\x0F\"\"\x02U\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
		"\x02\x02\x13\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02" +
		"\x02\x05!\x03\x02\x02\x02\x07#\x03\x02\x02\x02\t%\x03\x02\x02\x02\v\'" +
		"\x03\x02\x02\x02\r)\x03\x02\x02\x02\x0F.\x03\x02\x02\x02\x110\x03\x02" +
		"\x02\x02\x13:\x03\x02\x02\x02\x15H\x03\x02\x02\x02\x17K\x03\x02\x02\x02" +
		"\x19\x1A\x07f\x02\x02\x1A\x1B\x07g\x02\x02\x1B\x1C\x07e\x02\x02\x1C\x1D" +
		"\x07n\x02\x02\x1D\x1E\x07c\x02\x02\x1E\x1F\x07t\x02\x02\x1F \x07g\x02" +
		"\x02 \x04\x03\x02\x02\x02!\"\x07}\x02\x02\"\x06\x03\x02\x02\x02#$\x07" +
		"\x7F\x02\x02$\b\x03\x02\x02\x02%&\x07<\x02\x02&\n\x03\x02\x02\x02\'(\x07" +
		"=\x02\x02(\f\x03\x02\x02\x02)*\x07n\x02\x02*+\x07k\x02\x02+,\x07p\x02" +
		"\x02,-\x07m\x02\x02-\x0E\x03\x02\x02\x02./\x07.\x02\x02/\x10\x03\x02\x02" +
		"\x0205\x07)\x02\x0214\x05\x15\v\x0224\v\x02\x02\x0231\x03\x02\x02\x02" +
		"32\x03\x02\x02\x0247\x03\x02\x02\x0256\x03\x02\x02\x0253\x03\x02\x02\x02" +
		"68\x03\x02\x02\x0275\x03\x02\x02\x0289\x07)\x02\x029\x12\x03\x02\x02\x02" +
		":?\x07$\x02\x02;>\x05\x15\v\x02<>\v\x02\x02\x02=;\x03\x02\x02\x02=<\x03" +
		"\x02\x02\x02>A\x03\x02\x02\x02?@\x03\x02\x02\x02?=\x03\x02\x02\x02@B\x03" +
		"\x02\x02\x02A?\x03\x02\x02\x02BC\x07$\x02\x02C\x14\x03\x02\x02\x02DE\x07" +
		"^\x02\x02EI\x07$\x02\x02FG\x07^\x02\x02GI\x07^\x02\x02HD\x03\x02\x02\x02" +
		"HF\x03\x02\x02\x02I\x16\x03\x02\x02\x02JL\t\x02\x02\x02KJ\x03\x02\x02" +
		"\x02LM\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x03\x02\x02" +
		"\x02OP\b\f\x02\x02P\x18\x03\x02\x02\x02\t\x0235=?HM\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CollaborationGrammarLexer.__ATN) {
			CollaborationGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CollaborationGrammarLexer._serializedATN));
		}

		return CollaborationGrammarLexer.__ATN;
	}

}

