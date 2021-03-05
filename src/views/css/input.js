/** @format */

import { css } from "lit-element";

export const input = css`
	input:-webkit-autofill {
		border: 1px solid var(--color-ok);
		-webkit-text-fill-color: var(--color-gris-oscuro);
		-webkit-box-shadow: 0 0 0px 1000px var(--color-gris-oscuro) inset;
		transition: background-color 5000s ease-in-out 0s;
	}
	input:-webkit-autofill::first-line {
		font-size: var(--font-bajada-size);
		font-weight: var(--font-bajada-weight);
	}
	.input {
		display: grid;
		grid-template-rows: 1fr auto 1fr;
		grid-gap: 0.1rem;
	}
	.input input {
		padding: .8rem;
		background-color: var(--color-blanco);
		border: 1px solid var(--color-verde-claro);
		color: var(--color-gris-oscuro);
		font-size: var(--font-bajada-size);
		font-weight: var(--font-bajada-weight);
		outline: none;
		border-radius: 1rem;
	}
	.input input:focus {
		border: 1px solid var(--primary-color);
	}
	.input[error] input {
		border: 1px solid var(--color-error);
	}
	.input label {
		color: var(--color-negro);
		font-size: var(--font-label-size);
		font-weight: var(--font-label-weight);
	}
	.input div {
		color: var(--color-error);
		font-size: var(--font-error-size);
		font-weight: var(--font-error-weight);
		display: none;
	}
	.input input[error] + div {
		display: grid;
	}
	::placeholder {
		/* Firefox, Chrome, Opera */
		color: var(--color-gris);
	}
`;
