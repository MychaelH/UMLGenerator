import { useGlobal } from "@/global";
import { ActivityCompile } from "@/utils/ActivityGenerator/ActivityComplier";
import { CollaborationCompile } from "@/utils/CollaborationGenerator/CollaborationComplier";
import { SequenceCompile } from "@/utils/SequenceGenerator/SequenceComplier";
import { SequenceLayout } from "@/utils/SequenceGenerator/SequenceLayouter";
import { Button, Dropdown, InputRef, MenuProps, Space } from "antd";
import { Input } from 'antd';
import { useRef, useState } from "react";
import styles from "./InputPanel.module.less"
import { StateCompile } from "@/utils/StateGenerator/StateCompiler";

const { TextArea } = Input;

const defaultCodeSeq = `actor 'A';
participant 'Mychael';
'A' -> 'Mychael': "hhhhhhh";
`;

const defaultCode = `actor 'Actor';
database 'Database';
boundary 'Boundary';
alt "online":
    opt "identified":
        loop "if there is no response at all and this is a very long description":
        'Actor' -x> 'Actor': "check";
            activate 'Actor';
            'Database' --> 'Database': "update";
            activate 'Database';
            activate 'Actor';
            'Actor' -> 'Database': "this is a very very very very very long request description";
            activate 'Database';
            deactivate 'Database';
            activate 'Actor';
            'Actor' -> 'Actor': "check";
            'Actor' -> 'Actor': "check";
            deactivate 'Actor';
            'Database' ->> 'Actor': "message"; 
            deactivate 'Actor';
        end
    end
else "offline":
'Actor' -> 'Boundary': "<<destroy>>";
    destroy 'Boundary';
    'Database' --> 'Actor': "response";
    create control Control;
    'Actor' -> Control: "";
    deactivate 'Actor';
end`;

const defaultCode2 = `actor 'Client';
create participant 'Transaction';
'Client' -> 'Transaction': "";
database 'ODBCProxy';
activate 'Client';
'Client' -> 'Transaction': "setActions(a, d, 0)";
activate 'Transaction';
opt "legal":
    'Transaction' -> 'ODBCProxy': "setValues(d, 3.4)";
    activate 'ODBCProxy';
    deactivate 'ODBCProxy';
    'Transaction' -> 'ODBCProxy': "setValues(a, CO)";
    activate 'ODBCProxy';
    deactivate 'ODBCProxy';
end
'Transaction' -> 'Client': "commit()";
activate 'Client';
deactivate 'Client';
deactivate 'Transaction';
'Client' -> 'Transaction': "<<destroy>>";
deactivate 'Client';
destroy 'Transaction';
`;

const defaultCodeCol = `declare {
    ':用户': "";
    '系统查询界面': "";
    ':TicketManagement': "";
    ':Ticket': "*";
    ':Flight': "*";
}
link {
    ':用户', '系统查询界面': "1: 查询航班()", "";
    '系统查询界面', ':TicketManagement': "1.1: 发送查询请求()", "1.7: 显示查询结果()";
    ':TicketManagement', ':Flight':  "1.3: 查询余票()", "1.6: 返回余票信息()";
    ':Flight', ':Ticket': "1.4: 检查机票可用性()", "1.5: 返回机票可用性()";
    ':TicketManagement', ':TicketManagement': "1.2: 筛选航班()", "";
}
`;

const defaultCodeAct = `| swimlane1 |
start
: "i=5";
if "i>5" then "yes"
: "i is larger then 5";
elseif "i<5" then "yes"
: "i is smaller then 5";
else "no"
| swimlane2 |
: "i is 5";
endif
repeat "i > 0"
: "hello world";
: "i--";
endrepeat
fork
: "thread1";
fork
: "thread2";
fork
: "thread3";
endfork
stop
`

const defaultCodeSta = `state 'main' {
state 'A': "description"
[*] --> 'A' : "Hello";
state 'alt' <choice>
'A' --> 'alt': "check";
'alt' --> 'B': "yes";
'alt' --> 'C': "no";
'B' --> [*]: "";
'C' --> [*]: "";
}
[*] --> 'main' : "start";
'main' --> [*] : "stop";
`

type Props = {

};

const InputPanel: React.FC<Props> = ({
    
}) => {
    const [global, setGlobal] = useGlobal();
    const [code, setCode] = useState<string>(defaultCode2);

    const items: MenuProps['items'] = [
        {
            label: <div onClick={()=>{setGlobal(global => {return {...global, mode: "0"}}); setCode(defaultCode2);}}>顺序图</div>,
            key: '0',
        },
        {
            label: <div onClick={()=>{setGlobal(global => {return {...global, mode: "1"}}); setCode(defaultCodeCol);}}>通信图</div>,
            key: '1',
        },
        {
            label: <div onClick={()=>{setGlobal(global => {return {...global, mode: "2"}}); setCode(defaultCodeSta);}}>状态机图</div>,
            key: '2',
        },
        {
            label: <div onClick={()=>{setGlobal(global => {return {...global, mode: "3"}}); setCode(defaultCodeAct)}}>活动图</div>,
            key: '3',
        },
    ];

    const compileGrammar = () => {
        if (code) {
            if (global.mode === '0') {
                const sequenceGraph = SequenceCompile(code);
                if (sequenceGraph) {
                    setGlobal(global => {return {...global, sequenceGraph: sequenceGraph}});
                }
            }
            if (global.mode === '1') {
                const collaborationGraph = CollaborationCompile(code);
                if (collaborationGraph) {
                    setGlobal(global => {return {...global, collaborationGraph: collaborationGraph}});
                }
            }
            if (global.mode === '2') {
                const stateGraph = StateCompile(code);
                if (stateGraph) {
                    setGlobal(global => {return {...global, stateGraph: stateGraph}});
                }
            }
            if (global.mode === '3') {
                const activityGraph = ActivityCompile(code);
                if (activityGraph) {
                    setGlobal(global => {return {...global, activityGraph: activityGraph}});
                }
            }
        }
    };
    
    return (
        <div className={styles["input-panel"]}>
            <div className={styles.head}>
                <div className={styles.title}>输入区域</div>
                <div className={styles.hint}>模式：</div>
                <Dropdown className={styles.drop} menu={{ items }} trigger={['click']} key={global.mode}>
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        {global.mode === '0' && <div>顺序图</div>}
                        {global.mode === '1' && <div>通信图</div>}
                        {global.mode === '2' && <div>状态机图</div>}
                        {global.mode === '3' && <div>活动图</div>}
                    </Space>
                    </a>
                </Dropdown>
            </div>
            <TextArea style={{ width: 1625}} rows={10} value={code} onChange={e => {setCode(e.target.value)}}/>
            <Button className={styles.button} type="primary" onClick={compileGrammar}>
                生成
            </Button>
        </div>
    );
}

export default InputPanel;