// Generated from c:\Users\97677\Desktop\毕业设计\code\UMLGenerator\UMLGenerator\src\assets\SequenceGrammar.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SequenceGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, IDENT=29, STRING=30, WS=31;
	public static final int
		RULE_block = 0, RULE_stmt = 1, RULE_decl = 2, RULE_messageSend = 3, RULE_create = 4, 
		RULE_destroy = 5, RULE_activate = 6, RULE_deactivate = 7, RULE_opt = 8, 
		RULE_loop = 9, RULE_par = 10, RULE_alt = 11, RULE_ref = 12, RULE_else = 13, 
		RULE_objType = 14, RULE_object = 15, RULE_messageType = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"block", "stmt", "decl", "messageSend", "create", "destroy", "activate", 
			"deactivate", "opt", "loop", "par", "alt", "ref", "else", "objType", 
			"object", "messageType"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "':'", "'create'", "'destroy'", "'activate'", "'deactivate'", 
			"'opt'", "'end'", "'loop'", "'par'", "'alt'", "'ref'", "','", "'else'", 
			"'actor'", "'boundary'", "'control'", "'database'", "'entity'", "'collections'", 
			"'queue'", "'participant'", "'*'", "'->'", "'-->'", "'->>'", "'-x>'", 
			"'-\\\\'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "IDENT", "STRING", "WS"
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
	public String getGrammarFileName() { return "SequenceGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SequenceGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class BlockContext extends ParserRuleContext {
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(34);
				stmt();
				}
				}
				setState(37); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << T__19) | (1L << T__20) | (1L << T__21) | (1L << T__22) | (1L << IDENT))) != 0) );
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

	public static class StmtContext extends ParserRuleContext {
		public DeclContext decl() {
			return getRuleContext(DeclContext.class,0);
		}
		public MessageSendContext messageSend() {
			return getRuleContext(MessageSendContext.class,0);
		}
		public CreateContext create() {
			return getRuleContext(CreateContext.class,0);
		}
		public DestroyContext destroy() {
			return getRuleContext(DestroyContext.class,0);
		}
		public ActivateContext activate() {
			return getRuleContext(ActivateContext.class,0);
		}
		public DeactivateContext deactivate() {
			return getRuleContext(DeactivateContext.class,0);
		}
		public OptContext opt() {
			return getRuleContext(OptContext.class,0);
		}
		public LoopContext loop() {
			return getRuleContext(LoopContext.class,0);
		}
		public ParContext par() {
			return getRuleContext(ParContext.class,0);
		}
		public AltContext alt() {
			return getRuleContext(AltContext.class,0);
		}
		public RefContext ref() {
			return getRuleContext(RefContext.class,0);
		}
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stmt);
		try {
			setState(50);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
			case T__15:
			case T__16:
			case T__17:
			case T__18:
			case T__19:
			case T__20:
			case T__21:
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				decl();
				}
				break;
			case T__22:
			case IDENT:
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				messageSend();
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 3);
				{
				setState(41);
				create();
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 4);
				{
				setState(42);
				destroy();
				}
				break;
			case T__4:
				enterOuterAlt(_localctx, 5);
				{
				setState(43);
				activate();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 6);
				{
				setState(44);
				deactivate();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 7);
				{
				setState(45);
				opt();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 8);
				{
				setState(46);
				loop();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 9);
				{
				setState(47);
				par();
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 10);
				{
				setState(48);
				alt();
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 11);
				{
				setState(49);
				ref();
				}
				break;
			default:
				throw new NoViableAltException(this);
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

	public static class DeclContext extends ParserRuleContext {
		public ObjTypeContext objType() {
			return getRuleContext(ObjTypeContext.class,0);
		}
		public TerminalNode IDENT() { return getToken(SequenceGrammarParser.IDENT, 0); }
		public DeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decl; }
	}

	public final DeclContext decl() throws RecognitionException {
		DeclContext _localctx = new DeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_decl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			objType();
			setState(53);
			match(IDENT);
			setState(54);
			match(T__0);
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

	public static class MessageSendContext extends ParserRuleContext {
		public List<ObjectContext> object() {
			return getRuleContexts(ObjectContext.class);
		}
		public ObjectContext object(int i) {
			return getRuleContext(ObjectContext.class,i);
		}
		public MessageTypeContext messageType() {
			return getRuleContext(MessageTypeContext.class,0);
		}
		public TerminalNode STRING() { return getToken(SequenceGrammarParser.STRING, 0); }
		public MessageSendContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_messageSend; }
	}

	public final MessageSendContext messageSend() throws RecognitionException {
		MessageSendContext _localctx = new MessageSendContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_messageSend);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			object();
			setState(57);
			messageType();
			setState(58);
			object();
			setState(59);
			match(T__1);
			setState(60);
			match(STRING);
			setState(61);
			match(T__0);
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

	public static class CreateContext extends ParserRuleContext {
		public DeclContext decl() {
			return getRuleContext(DeclContext.class,0);
		}
		public MessageSendContext messageSend() {
			return getRuleContext(MessageSendContext.class,0);
		}
		public CreateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_create; }
	}

	public final CreateContext create() throws RecognitionException {
		CreateContext _localctx = new CreateContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_create);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(T__2);
			setState(64);
			decl();
			setState(65);
			messageSend();
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

	public static class DestroyContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(SequenceGrammarParser.IDENT, 0); }
		public DestroyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_destroy; }
	}

	public final DestroyContext destroy() throws RecognitionException {
		DestroyContext _localctx = new DestroyContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_destroy);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			match(T__3);
			setState(68);
			match(IDENT);
			setState(69);
			match(T__0);
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

	public static class ActivateContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(SequenceGrammarParser.IDENT, 0); }
		public ActivateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_activate; }
	}

	public final ActivateContext activate() throws RecognitionException {
		ActivateContext _localctx = new ActivateContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_activate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			match(T__4);
			setState(72);
			match(IDENT);
			setState(73);
			match(T__0);
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

	public static class DeactivateContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(SequenceGrammarParser.IDENT, 0); }
		public DeactivateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deactivate; }
	}

	public final DeactivateContext deactivate() throws RecognitionException {
		DeactivateContext _localctx = new DeactivateContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_deactivate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(T__5);
			setState(76);
			match(IDENT);
			setState(77);
			match(T__0);
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

	public static class OptContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(SequenceGrammarParser.STRING, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public OptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_opt; }
	}

	public final OptContext opt() throws RecognitionException {
		OptContext _localctx = new OptContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_opt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(T__6);
			setState(80);
			match(STRING);
			setState(81);
			match(T__1);
			setState(82);
			block();
			setState(83);
			match(T__7);
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

	public static class LoopContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(SequenceGrammarParser.STRING, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public LoopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loop; }
	}

	public final LoopContext loop() throws RecognitionException {
		LoopContext _localctx = new LoopContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_loop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(T__8);
			setState(86);
			match(STRING);
			setState(87);
			match(T__1);
			setState(88);
			block();
			setState(89);
			match(T__7);
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

	public static class ParContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(SequenceGrammarParser.STRING, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ParContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_par; }
	}

	public final ParContext par() throws RecognitionException {
		ParContext _localctx = new ParContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_par);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(T__9);
			setState(92);
			match(STRING);
			setState(93);
			match(T__1);
			setState(94);
			block();
			setState(95);
			match(T__7);
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

	public static class AltContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(SequenceGrammarParser.STRING, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<ElseContext> else() {
			return getRuleContexts(ElseContext.class);
		}
		public ElseContext else(int i) {
			return getRuleContext(ElseContext.class,i);
		}
		public AltContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alt; }
	}

	public final AltContext alt() throws RecognitionException {
		AltContext _localctx = new AltContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_alt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(T__10);
			setState(98);
			match(STRING);
			setState(99);
			match(T__1);
			setState(100);
			block();
			setState(104);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__13) {
				{
				{
				setState(101);
				else();
				}
				}
				setState(106);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(107);
			match(T__7);
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

	public static class RefContext extends ParserRuleContext {
		public List<TerminalNode> IDENT() { return getTokens(SequenceGrammarParser.IDENT); }
		public TerminalNode IDENT(int i) {
			return getToken(SequenceGrammarParser.IDENT, i);
		}
		public TerminalNode STRING() { return getToken(SequenceGrammarParser.STRING, 0); }
		public RefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ref; }
	}

	public final RefContext ref() throws RecognitionException {
		RefContext _localctx = new RefContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_ref);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			match(T__11);
			setState(110);
			match(IDENT);
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__12) {
				{
				{
				setState(111);
				match(T__12);
				setState(112);
				match(IDENT);
				}
				}
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(118);
			match(T__1);
			setState(119);
			match(STRING);
			setState(120);
			match(T__0);
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

	public static class ElseContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(SequenceGrammarParser.STRING, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ElseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_else; }
	}

	public final ElseContext else() throws RecognitionException {
		ElseContext _localctx = new ElseContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_else);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(T__13);
			setState(123);
			match(STRING);
			setState(124);
			match(T__1);
			setState(125);
			block();
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

	public static class ObjTypeContext extends ParserRuleContext {
		public ObjTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objType; }
	}

	public final ObjTypeContext objType() throws RecognitionException {
		ObjTypeContext _localctx = new ObjTypeContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_objType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << T__19) | (1L << T__20) | (1L << T__21))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
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

	public static class ObjectContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(SequenceGrammarParser.IDENT, 0); }
		public ObjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object; }
	}

	public final ObjectContext object() throws RecognitionException {
		ObjectContext _localctx = new ObjectContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_object);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			_la = _input.LA(1);
			if ( !(_la==T__22 || _la==IDENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
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

	public static class MessageTypeContext extends ParserRuleContext {
		public MessageTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_messageType; }
	}

	public final MessageTypeContext messageType() throws RecognitionException {
		MessageTypeContext _localctx = new MessageTypeContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_messageType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__26) | (1L << T__27))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3!\u0088\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\3\2\6\2&\n\2\r\2\16\2\'\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5"+
		"\3\65\n\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6"+
		"\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3"+
		"\r\3\r\7\ri\n\r\f\r\16\rl\13\r\3\r\3\r\3\16\3\16\3\16\3\16\7\16t\n\16"+
		"\f\16\16\16w\13\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\20\3"+
		"\20\3\21\3\21\3\22\3\22\3\22\2\2\23\2\4\6\b\n\f\16\20\22\24\26\30\32\34"+
		"\36 \"\2\5\3\2\21\30\4\2\31\31\37\37\3\2\32\36\2\u0083\2%\3\2\2\2\4\64"+
		"\3\2\2\2\6\66\3\2\2\2\b:\3\2\2\2\nA\3\2\2\2\fE\3\2\2\2\16I\3\2\2\2\20"+
		"M\3\2\2\2\22Q\3\2\2\2\24W\3\2\2\2\26]\3\2\2\2\30c\3\2\2\2\32o\3\2\2\2"+
		"\34|\3\2\2\2\36\u0081\3\2\2\2 \u0083\3\2\2\2\"\u0085\3\2\2\2$&\5\4\3\2"+
		"%$\3\2\2\2&\'\3\2\2\2\'%\3\2\2\2\'(\3\2\2\2(\3\3\2\2\2)\65\5\6\4\2*\65"+
		"\5\b\5\2+\65\5\n\6\2,\65\5\f\7\2-\65\5\16\b\2.\65\5\20\t\2/\65\5\22\n"+
		"\2\60\65\5\24\13\2\61\65\5\26\f\2\62\65\5\30\r\2\63\65\5\32\16\2\64)\3"+
		"\2\2\2\64*\3\2\2\2\64+\3\2\2\2\64,\3\2\2\2\64-\3\2\2\2\64.\3\2\2\2\64"+
		"/\3\2\2\2\64\60\3\2\2\2\64\61\3\2\2\2\64\62\3\2\2\2\64\63\3\2\2\2\65\5"+
		"\3\2\2\2\66\67\5\36\20\2\678\7\37\2\289\7\3\2\29\7\3\2\2\2:;\5 \21\2;"+
		"<\5\"\22\2<=\5 \21\2=>\7\4\2\2>?\7 \2\2?@\7\3\2\2@\t\3\2\2\2AB\7\5\2\2"+
		"BC\5\6\4\2CD\5\b\5\2D\13\3\2\2\2EF\7\6\2\2FG\7\37\2\2GH\7\3\2\2H\r\3\2"+
		"\2\2IJ\7\7\2\2JK\7\37\2\2KL\7\3\2\2L\17\3\2\2\2MN\7\b\2\2NO\7\37\2\2O"+
		"P\7\3\2\2P\21\3\2\2\2QR\7\t\2\2RS\7 \2\2ST\7\4\2\2TU\5\2\2\2UV\7\n\2\2"+
		"V\23\3\2\2\2WX\7\13\2\2XY\7 \2\2YZ\7\4\2\2Z[\5\2\2\2[\\\7\n\2\2\\\25\3"+
		"\2\2\2]^\7\f\2\2^_\7 \2\2_`\7\4\2\2`a\5\2\2\2ab\7\n\2\2b\27\3\2\2\2cd"+
		"\7\r\2\2de\7 \2\2ef\7\4\2\2fj\5\2\2\2gi\5\34\17\2hg\3\2\2\2il\3\2\2\2"+
		"jh\3\2\2\2jk\3\2\2\2km\3\2\2\2lj\3\2\2\2mn\7\n\2\2n\31\3\2\2\2op\7\16"+
		"\2\2pu\7\37\2\2qr\7\17\2\2rt\7\37\2\2sq\3\2\2\2tw\3\2\2\2us\3\2\2\2uv"+
		"\3\2\2\2vx\3\2\2\2wu\3\2\2\2xy\7\4\2\2yz\7 \2\2z{\7\3\2\2{\33\3\2\2\2"+
		"|}\7\20\2\2}~\7 \2\2~\177\7\4\2\2\177\u0080\5\2\2\2\u0080\35\3\2\2\2\u0081"+
		"\u0082\t\2\2\2\u0082\37\3\2\2\2\u0083\u0084\t\3\2\2\u0084!\3\2\2\2\u0085"+
		"\u0086\t\4\2\2\u0086#\3\2\2\2\6\'\64ju";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}