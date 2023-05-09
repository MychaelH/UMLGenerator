import { useGlobal } from "@/global";
import { useState, useEffect } from "react";
import InputPanel from "./InputPanel/InputPanel";
import OutputPanel from "./Output/OutputPanel";
import styles from './MainPage.module.less';
import { Button } from "antd";

type Props = {}

const MainPage: React.FC<Props> = ({

}) => {
    const [page, setPage] = useState<number>(0);

    return (
        <div>
        {page === 0 && (
            <div className={styles.main}>
                <div className={styles.title}>UML动态图生成工具</div>
                <div className={styles.button1}>
                <Button  className={styles.button} type="primary" onClick={()=>{setPage(2)}}>
                开始使用
                </Button>
                </div>
                <div className={styles.button2}>
                <Button className={styles.button} type="primary" onClick={()=>{}}>
                文档
                </Button>
                </div>
                
            </div>
        )}
        {page === 2 && (
            <div>
                <h2>UML动态图生成工具</h2>
                <InputPanel/>
                <OutputPanel/>
            </div>
        )}
        </div>
    );
}

export default MainPage;