/** @format */

import { css } from "lit-element";

export const button = css`
    button[btn1] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--color-texto);
        fill: var(--primary-color);
        stroke: var(--primary-color);
        background-color: var(--color-gris-claro);
        font-size: 2.6vh;
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        box-shadow: 0 3px 6px 0 var(--orange-5);
        transition-duration: 0.4s;
        text-decoration: none;
        border: none;
        outline: none;
        padding: .5rem;
    }
    button[btn1]:hover {
        background-color: var(--color-azul-oscuro);
        color: var(--color-gris-claro);
    }
    button[btn1]:active {
        background-color: var(--primary-color);
        box-shadow: 0.2rem var(--color-azul-oscuro);
        transform: translateY(0.2rem);
    }
    button[btn1][apagado] {
        opacity: 0.8;
        background-color: var(--color-gris);
        cursor: not-allowed;
        pointer-events: none;
    }

    button[btn2] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--color-gris-claro);
        fill: var(--primary-color);
        stroke: var(--primary-color);
        background-color: transparent;
        font-size: 2.6vh;
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        box-shadow: 0 3px 6px 0 var(--orange-5);
        transition-duration: 0.4s;
        text-decoration-line: underline;
        text-decoration-style: solid;
        border: none;
        outline: none;
        padding: .5rem;
    }
    button[btn2]:hover {
        color: var(--color-celeste);
    }
    button[btn2]:active {
        color: var(--primary-color);
        transform: translateY(0.2rem);
    }
    button[btn2][apagado] {
        opacity: 0.8;
        color: var(--color-gris);
        cursor: not-allowed;
        pointer-events: none;
    }

    button[btn3] {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: 0.3rem;
        cursor: pointer;
        color: var(--color-gris-claro);
        background-color: transparent;
        font-size: 2.6vh;
        font-weight: var(--font-bajada-weight);
        border-radius: 0.4rem;
        border: 1px solid var(--color-gris-claro);
        box-shadow: 0 3px 6px 0 var(--orange-5);
        transition-duration: 0.4s;
        text-decoration: none;
        outline: none;
        padding: .5rem;
    }
    button[btn3]:hover {
        background-color: var(--color-azul-oscuro);
    }
    button[btn3]:active {
        background-color: var(--color-negro);
        box-shadow: 0.2rem var(--color-azul-oscuro);
        transform: translateY(0.2rem);
    }
    button[btn3][apagado] {
        opacity: 0.8;
        background-color: var(--color-gris);
        cursor: not-allowed;
        pointer-events: none;
    }
`;
