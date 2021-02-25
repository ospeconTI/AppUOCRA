/** @format */

import { css } from "lit-element";

export const toggle = css`
    .toggle {
        position: relative;
        margin: 0;
        height: 2rem;
        width: 2rem;
        outline: none;
    }
    .toggle:focus {
        border: none;
    }
    .toggle:before {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: grid;
        place-content: center;
        background-color: var(--primary-color);
        font-size: 1.5rem;
        color: var(--color-blanco);
        cursor: pointer;
    }
    .toggle:hover:before {
        background-color: var(--color-azul-oscuro);
    }
    .toggle:focus:before {
        background-color: var(--color-celeste);
    }

    .toggle:not(:checked):before {
        content: " + ";
    }
    .toggle:checked:before {
        content: " - ";
    }
`;
