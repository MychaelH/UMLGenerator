// Generated from c:\Users\97677\Desktop\毕业设计\code\sample\src\assets\ActivityGrammar.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ActivityGrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, IDENT=15, STRING=16, 
		WS=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "IDENT", "STRING", "ESC", 
			"WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'", "';'", "'start'", "'end'", "'stop'", "'if'", "'then'", "'endif'", 
			"'elseif'", "'else'", "'repeat'", "'endrepeat'", "'fork'", "'endfork'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "IDENT", "STRING", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public ActivityGrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ActivityGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\23\u0093\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3"+
		"\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\f\3\f"+
		"\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16"+
		"\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\20"+
		"\7\20v\n\20\f\20\16\20y\13\20\3\20\3\20\3\21\3\21\3\21\7\21\u0080\n\21"+
		"\f\21\16\21\u0083\13\21\3\21\3\21\3\22\3\22\3\22\3\22\5\22\u008b\n\22"+
		"\3\23\6\23\u008e\n\23\r\23\16\23\u008f\3\23\3\23\4w\u0081\2\24\3\3\5\4"+
		"\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22"+
		"#\2%\23\3\2\3\5\2\13\f\17\17\"\"\2\u0097\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3"+
		"\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2"+
		"\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35"+
		"\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2%\3\2\2\2\3\'\3\2\2\2\5)\3\2\2\2\7+"+
		"\3\2\2\2\t\61\3\2\2\2\13\65\3\2\2\2\r:\3\2\2\2\17=\3\2\2\2\21B\3\2\2\2"+
		"\23H\3\2\2\2\25O\3\2\2\2\27T\3\2\2\2\31[\3\2\2\2\33e\3\2\2\2\35j\3\2\2"+
		"\2\37r\3\2\2\2!|\3\2\2\2#\u008a\3\2\2\2%\u008d\3\2\2\2\'(\7<\2\2(\4\3"+
		"\2\2\2)*\7=\2\2*\6\3\2\2\2+,\7u\2\2,-\7v\2\2-.\7c\2\2./\7t\2\2/\60\7v"+
		"\2\2\60\b\3\2\2\2\61\62\7g\2\2\62\63\7p\2\2\63\64\7f\2\2\64\n\3\2\2\2"+
		"\65\66\7u\2\2\66\67\7v\2\2\678\7q\2\289\7r\2\29\f\3\2\2\2:;\7k\2\2;<\7"+
		"h\2\2<\16\3\2\2\2=>\7v\2\2>?\7j\2\2?@\7g\2\2@A\7p\2\2A\20\3\2\2\2BC\7"+
		"g\2\2CD\7p\2\2DE\7f\2\2EF\7k\2\2FG\7h\2\2G\22\3\2\2\2HI\7g\2\2IJ\7n\2"+
		"\2JK\7u\2\2KL\7g\2\2LM\7k\2\2MN\7h\2\2N\24\3\2\2\2OP\7g\2\2PQ\7n\2\2Q"+
		"R\7u\2\2RS\7g\2\2S\26\3\2\2\2TU\7t\2\2UV\7g\2\2VW\7r\2\2WX\7g\2\2XY\7"+
		"c\2\2YZ\7v\2\2Z\30\3\2\2\2[\\\7g\2\2\\]\7p\2\2]^\7f\2\2^_\7t\2\2_`\7g"+
		"\2\2`a\7r\2\2ab\7g\2\2bc\7c\2\2cd\7v\2\2d\32\3\2\2\2ef\7h\2\2fg\7q\2\2"+
		"gh\7t\2\2hi\7m\2\2i\34\3\2\2\2jk\7g\2\2kl\7p\2\2lm\7f\2\2mn\7h\2\2no\7"+
		"q\2\2op\7t\2\2pq\7m\2\2q\36\3\2\2\2rw\7~\2\2sv\5#\22\2tv\13\2\2\2us\3"+
		"\2\2\2ut\3\2\2\2vy\3\2\2\2wx\3\2\2\2wu\3\2\2\2xz\3\2\2\2yw\3\2\2\2z{\7"+
		"~\2\2{ \3\2\2\2|\u0081\7$\2\2}\u0080\5#\22\2~\u0080\13\2\2\2\177}\3\2"+
		"\2\2\177~\3\2\2\2\u0080\u0083\3\2\2\2\u0081\u0082\3\2\2\2\u0081\177\3"+
		"\2\2\2\u0082\u0084\3\2\2\2\u0083\u0081\3\2\2\2\u0084\u0085\7$\2\2\u0085"+
		"\"\3\2\2\2\u0086\u0087\7^\2\2\u0087\u008b\7$\2\2\u0088\u0089\7^\2\2\u0089"+
		"\u008b\7^\2\2\u008a\u0086\3\2\2\2\u008a\u0088\3\2\2\2\u008b$\3\2\2\2\u008c"+
		"\u008e\t\2\2\2\u008d\u008c\3\2\2\2\u008e\u008f\3\2\2\2\u008f\u008d\3\2"+
		"\2\2\u008f\u0090\3\2\2\2\u0090\u0091\3\2\2\2\u0091\u0092\b\23\2\2\u0092"+
		"&\3\2\2\2\t\2uw\177\u0081\u008a\u008f\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}