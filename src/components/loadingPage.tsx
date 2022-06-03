import React, { useEffect } from "react";
import { LoadingCustomProps } from "../interfaces/LoadingCustomProps";
import { LoadingPageCustom } from './indexComponents'

const LoadingPage = (props: LoadingCustomProps) => {

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2750);
    }, [])

    return <LoadingPageCustom>
        {
            loading ? <div className="loading-page-content">
            <div className="loading-page-content-text select-none">
                <div className="contenedor">
                    <ul>
                        <li>ñ</li>
                        <li>m</li>
                        <li>l</li>
                        <li>q</li>
                        <li>w</li>
                        <li>o</li>
                        <li>g</li>
                        <li>x</li>
                        <li>k</li>
                    </ul>
                    <ul>
                        <li>~</li>
                        <li>!</li>
                        <li>@</li>
                        <li>#</li>
                        <li>#</li>
                        <li>$</li>
                        <li>%</li>
                        <li>%</li>
                        <li>h</li>
                    </ul>
                    <ul>
                        <li>{"&"}</li>
                        <li>*</li>
                        <li>(</li>
                        <li>)</li>
                        <li>_</li>
                        <li>+</li>
                        <li>{"{"}</li>
                        <li>{"}"}</li>
                        <li>r</li>
                    </ul>
                    <ul>
                        <li>阿</li>
                        <li>贝</li>
                        <li>吴</li>
                        <li>特</li>
                        <li>苦</li>
                        <li>哦</li>
                        <li>佩</li>
                        <li>卡</li>
                        <li>i</li>
                    </ul>
                    <ul>
                        <li>あ</li>
                        <li>녕</li>
                        <li>う</li>
                        <li>え</li>
                        <li>お</li>
                        <li>か</li>
                        <li>き</li>
                        <li>하</li>
                        <li>s</li>
                    </ul>
                    <ul>
                        <li>け</li>
                        <li>こ</li>
                        <li>さ</li>
                        <li>세</li>
                        <li>す</li>
                        <li>せ</li>
                        <li>そ</li>
                        <li>た</li>
                        <li>ち</li>
                    </ul>
                    <ul>
                        <li>ち</li>
                        <li>つ</li>
                        <li>て</li>
                        <li>と</li>
                        <li>な</li>
                        <li>に</li>
                        <li>ぬ</li>
                        <li>ね</li>
                        <li>o</li>
                    </ul>
                    <ul>
                        <li>の</li>
                        <li>は</li>
                        <li>ひ</li>
                        <li>ふ</li>
                        <li>요</li>
                        <li>ほ</li>
                        <li>안</li>
                        <li>사</li>
                        <li>p</li>
                    </ul>
                    <ul>
                        <li>/</li>
                        <li>Z</li>
                        <li>⁂</li>
                        <li>±</li>
                        <li>色</li>
                        <li>卡</li>
                        <li>苦</li>
                        <li>阿</li>
                        <li>h</li>
                    </ul>
                    <ul>
                        <li>に</li>
                        <li>в</li>
                        <li>д</li>
                        <li>±</li>
                        <li>Ω</li>
                        <li>Б</li>
                        <li>Д</li>
                        <li>に</li>
                        <li>e</li>
                    </ul>
                    <ul>
                        <li>Ё</li>
                        <li>Ж</li>
                        <li>Ф</li>
                        <li>Й</li>
                        <li>Л</li>
                        <li>に</li>
                        <li>Ю</li>
                        <li>Ш</li>
                        <li>r</li>
                    </ul>
                </div>
            </div>
            </div>
            :  props.children
        }
    </LoadingPageCustom>
}

export default LoadingPage;