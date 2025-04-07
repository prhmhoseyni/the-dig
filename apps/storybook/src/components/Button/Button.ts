import { html } from "lit";

export enum ButtonSize {
    xl = "btn-xl",
    lg = "btn-lg",
    md = "",
    sm = "btn-sm",
    xs = "btn-xs",
}

export enum ButtonVariant {
    filled = "",
    tinted = "btn-tinted",
    outlined = "btn-outlined",
}

export enum ButtonColor {
    default = "",
    brand = "btn-brand",
    gray = "btn-gray",
    success = "btn-success",
    warning = "btn-warning",
    danger = "btn-danger",
}

export interface Props {
    label: string;
    size?: keyof typeof ButtonSize;
    variant?: keyof typeof ButtonVariant;
    color?: keyof typeof ButtonColor;
    fullWidth?: boolean;
    disabled?: boolean;
}

export function Button(props: Props) {
    const { label, size = "md", variant = "filled", color = "default", disabled = false } = props;

    if (disabled) {
        return html`
            <button
                type="button"
                class=${["btn", ButtonSize[size], ButtonVariant[variant], ButtonColor[color]].filter(Boolean).join(" ")}
                disabled
            >
                ${label}
            </button>
        `;
    }

    return html`
        <button
            type="button"
            class=${["btn", ButtonSize[size], ButtonVariant[variant], ButtonColor[color]].filter(Boolean).join(" ")}
        >
            ${label}
        </button>
    `;
}
