import { html } from "lit";

export enum InputVariant {
    primary = "",
    secondary = "input-secondary",
}

export interface Props {
    value: string;
    hasError?: boolean,
    variant?: keyof typeof InputVariant,
    disabled?: boolean,
}

export function Input(props: Props) {
    const {
        variant = "primary",
        hasError = false,
        disabled = false,
    } = props;

    if (disabled) {
        return html`
            <input
                type="text"
                placeholder="متن نمونه"
                class=${["input", InputVariant[variant], hasError ? "input--has-error" : ""].filter(Boolean).join(" ")}
                disabled=${disabled}
            />
        `;
    }

    return html`
        <input
            type="text"
            placeholder="متن نمونه"
            class=${["input", InputVariant[variant], hasError ? "input--has-error" : ""].filter(Boolean).join(" ")}
        />
    `;
}
