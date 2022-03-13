/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export function Answer(props) {
    const ansBoxStyle = css`
        width: 200px;
        height: 200px;
        border-radius: 30px;
        border-style: none;
        cursor: pointer;
        background-image: 
            radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,.1) 100%),
            url("https://i.scdn.co/image/ab67616d0000b2736f3c3c8c677633eddf0517d6");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
        p {
            margin-top: 0;
            margin-bottom: 0;
            font-size: 25px;
        }
        &:hover {
            box-shadow: 0px 0px 15px rgba(0,0,0,0.8);
            filter: brightness(1.2);
        }
    `

    console.log(props)

    if (props.ansType === "album") {
        return (
            <button css={ansBoxStyle}>
                <p>{props.answer.album.name}</p>
            </button>
        )
    } else if (props.ansType === "artist") {
        return (
            <button css={ansBoxStyle}>
                <p>{props.answer.artists[0].name}</p>
            </button>
        )
    } else if (props.ansType === "track") {
        return (
            <button css={ansBoxStyle}>
                <p>{props.answer.name}</p>
            </button>
        )
    }
}