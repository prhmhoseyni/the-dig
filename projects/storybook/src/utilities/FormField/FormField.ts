import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

export interface Props {
    label?: string;
    helperMessage?: string;
    errorMessage?: string;
}

export function FormField(props: Props) {
    const {
        label,
        helperMessage = "",
        errorMessage = "",
    } = props;

    function renderHelperMessage() {
        if (helperMessage) {
            return html`<div class="form-helper">${helperMessage}</div>`
        }
    }

    function renderErrorMessage() {
        if (errorMessage) {
            return html`<div class="form-error">${errorMessage}</div>`
        }
    }

    return html`
        <div class="form-field">
            <label class="form-label" for="firstName">${label}</label>

            <div class="form-wrapper">
                <span class="material-symbols-outlined form-start-adornment">apps</span>

                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    class=${["input", errorMessage ? "input--has-error" : ""].filter(Boolean).join(" ")}
                    style=${styleMap({ paddingInline: "2.25rem" })}
                >

                <span class="material-symbols-outlined form-end-adornment">apps</span>
            </div>

            ${renderHelperMessage()}

            ${renderErrorMessage()}
        </div>
    `;

}

