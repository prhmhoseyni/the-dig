import { html } from "lit";

export enum TextareaVariant {
    primary = "",
    secondary = "textarea-secondary",
}

export interface Props {
    hasError?: boolean,
    variant?: keyof typeof TextareaVariant,
    disabled?: boolean,
}

export function Textarea(props: Props) {
    const {
        variant = "primary",
        hasError = false,
        disabled = false,
    } = props;

    if (disabled) {
        return html`
            <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="متن نمونه"
                class=${["textarea", TextareaVariant[variant], hasError ? "textarea--has-error" : ""].filter(Boolean).join(" ")}
                disabled=${disabled}
            ></textarea>
        `;
    }

    return html`
        <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="متن نمونه"
            class=${["textarea", TextareaVariant[variant], hasError ? "textarea--has-error" : ""].filter(Boolean).join(" ")}
        ></textarea>
    `;
}
