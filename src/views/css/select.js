import {
  css
} from "lit-element"

export const select = css `
	select {
		outline: 0;
		box-shadow: none;
		border: solid 2px var(--color-azul-icono);
		background-color: var(--color-blanco);
    border-radius: 1rem;
	}

	select::-ms-expand {
		display: none;
	}

	.select {
		position: relative;
		display: grid;
		grid-gap: 0;
		grid-template-rows: 26% 74%;
		line-height: 1;
		overflow: hidden;
	}
	select {
		padding: 0.2rem;
		color: var(--color-gris-oscuro);
		cursor: pointer;
		font-size: var(--font-bajada-size);
		font-weight: var(--font-bajada-weight);
		width: 100%;
		height: 1.8rem;
	}
	.select select:hover {
		border-color: var(--color-negro) !important;
	}
	.select select:focus {
		background-color: var(--color-gris);
		border-color: var(--color-negro) !important;
	}
	.select label {
		font-size: var(--font-label-size);
		font-weight: var(--font-label-weight);
		color: var(--color-negro);
	}
  `