// Generated from c:\Users\97677\Desktop\毕业设计\code\sample\src\assets\CollaborationGrammar.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CollaborationGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, IDENT=8, STRING=9, 
		WS=10;
	public static final int
		RULE_block = 0, RULE_declareBlock = 1, RULE_declareStmt = 2, RULE_linkBlock = 3, 
		RULE_linkStmt = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"block", "declareBlock", "declareStmt", "linkBlock", "linkStmt"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'declare'", "'{'", "'}'", "':'", "';'", "'link'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "IDENT", "STRING", "WS"
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

	@Override
	public String getGrammarFileName() { return "CollaborationGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CollaborationGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class BlockContext extends ParserRuleContext {
		public DeclareBlockContext declareBlock() {
			return getRuleContext(DeclareBlockContext.class,0);
		}
		public LinkBlockContext linkBlock() {
			return getRuleContext(LinkBlockContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_block);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(10);
			declareBlock();
			setState(11);
			linkBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclareBlockContext extends ParserRuleContext {
		public List<DeclareStmtContext> declareStmt() {
			return getRuleContexts(DeclareStmtContext.class);
		}
		public DeclareStmtContext declareStmt(int i) {
			return getRuleContext(DeclareStmtContext.class,i);
		}
		public DeclareBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declareBlock; }
	}

	public final DeclareBlockContext declareBlock() throws RecognitionException {
		DeclareBlockContext _localctx = new DeclareBlockContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_declareBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(13);
			match(T__0);
			setState(14);
			match(T__1);
			setState(18);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENT) {
				{
				{
				setState(15);
				declareStmt();
				}
				}
				setState(20);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(21);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclareStmtContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(CollaborationGrammarParser.IDENT, 0); }
		public TerminalNode STRING() { return getToken(CollaborationGrammarParser.STRING, 0); }
		public DeclareStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declareStmt; }
	}

	public final DeclareStmtContext declareStmt() throws RecognitionException {
		DeclareStmtContext _localctx = new DeclareStmtContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declareStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(23);
			match(IDENT);
			setState(24);
			match(T__3);
			setState(25);
			match(STRING);
			setState(26);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LinkBlockContext extends ParserRuleContext {
		public List<LinkStmtContext> linkStmt() {
			return getRuleContexts(LinkStmtContext.class);
		}
		public LinkStmtContext linkStmt(int i) {
			return getRuleContext(LinkStmtContext.class,i);
		}
		public LinkBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_linkBlock; }
	}

	public final LinkBlockContext linkBlock() throws RecognitionException {
		LinkBlockContext _localctx = new LinkBlockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_linkBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			match(T__5);
			setState(29);
			match(T__1);
			setState(33);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENT) {
				{
				{
				setState(30);
				linkStmt();
				}
				}
				setState(35);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(36);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LinkStmtContext extends ParserRuleContext {
		public List<TerminalNode> IDENT() { return getTokens(CollaborationGrammarParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(CollaborationGrammarParser.IDENT, i);
		}
		public List<TerminalNode> STRING() { return getTokens(CollaborationGrammarParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(CollaborationGrammarParser.STRING, i);
		}
		public LinkStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_linkStmt; }
	}

	public final LinkStmtContext linkStmt() throws RecognitionException {
		LinkStmtContext _localctx = new LinkStmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_linkStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(IDENT);
			setState(39);
			match(T__6);
			setState(40);
			match(IDENT);
			setState(41);
			match(T__3);
			setState(42);
			match(STRING);
			setState(43);
			match(T__6);
			setState(44);
			match(STRING);
			setState(45);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\f\62\4\2\t\2\4\3"+
		"\t\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\2\3\3\3\3\3\3\7\3\23\n\3\f\3\16"+
		"\3\26\13\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\7\5\"\n\5\f\5\16\5"+
		"%\13\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\2\2\7\2\4\6\b\n"+
		"\2\2\2.\2\f\3\2\2\2\4\17\3\2\2\2\6\31\3\2\2\2\b\36\3\2\2\2\n(\3\2\2\2"+
		"\f\r\5\4\3\2\r\16\5\b\5\2\16\3\3\2\2\2\17\20\7\3\2\2\20\24\7\4\2\2\21"+
		"\23\5\6\4\2\22\21\3\2\2\2\23\26\3\2\2\2\24\22\3\2\2\2\24\25\3\2\2\2\25"+
		"\27\3\2\2\2\26\24\3\2\2\2\27\30\7\5\2\2\30\5\3\2\2\2\31\32\7\n\2\2\32"+
		"\33\7\6\2\2\33\34\7\13\2\2\34\35\7\7\2\2\35\7\3\2\2\2\36\37\7\b\2\2\37"+
		"#\7\4\2\2 \"\5\n\6\2! \3\2\2\2\"%\3\2\2\2#!\3\2\2\2#$\3\2\2\2$&\3\2\2"+
		"\2%#\3\2\2\2&\'\7\5\2\2\'\t\3\2\2\2()\7\n\2\2)*\7\t\2\2*+\7\n\2\2+,\7"+
		"\6\2\2,-\7\13\2\2-.\7\t\2\2./\7\13\2\2/\60\7\7\2\2\60\13\3\2\2\2\4\24"+
		"#";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}