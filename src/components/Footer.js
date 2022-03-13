/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export function Footer(props) {
    const footerStyle = css`
        height: 60px;
        border-top: 1px solid #eaeaea;
        position: fixed;
        bottom: 0px;
        width: 100%;
        box-shadow: 0px -7px 10px 5px rgba(0,0,0,0.2);
        background-color: rgba(160,160,160, .7);
        backdrop-filter: blur(5px);4
    `;
    return (
        <div css={footerStyle}>
            This is a footer
            <div className="questionCounter">
                <div>Questions: {props.correctCount} / {props.questionCount}</div>
            </div>
            {props.content && <div>{props.content}</div>}
        </div>
    )
}