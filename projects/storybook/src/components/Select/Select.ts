import { html } from "lit";

export enum SelectVariant {
    primary = "",
    secondary = "select-secondary",
}

export interface Props {
    hasError?: boolean,
    variant?: keyof typeof SelectVariant,
    disabled?: boolean,
}

export function Select(props: Props) {
    const {
        variant = "primary",
        hasError = false,
        disabled = false,
    } = props;

    if (disabled) {
        return html`
            <select
                class=${["select", SelectVariant[variant], hasError ? "select--has-error" : ""].filter(Boolean).join(" ")}
                disabled=${disabled}
            >
                <option value="msk">فناوری های مسکن داتین</option>
            </select>
        `;
    }

    return html`
        <select
            class=${["select", SelectVariant[variant], hasError ? "select--has-error" : ""].filter(Boolean).join(" ")}>
            <option value="msk">فناوری های مسکن داتین</option>
        </select>
    `;
}
