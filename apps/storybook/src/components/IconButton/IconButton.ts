import { html } from "lit";

export enum IconButtonSize {
    xl = "icon-btn-xl",
    lg = "icon-btn-lg",
    md = "",
    sm = "icon-btn-sm",
    xs = "icon-btn-xs",
}

export enum IconButtonVariant {
    filled = "",
    tinted = "icon-btn-tinted",
    outlined = "icon-btn-outlined",
}

export enum IconButtonColor {
    brand = "icon-btn-brand",
    gray = "icon-btn-gray",
    success = "icon-btn-success",
    warning = "icon-btn-warning",
    danger = "icon-btn-danger",
}

export interface Props {
    size?: keyof typeof IconButtonSize;
    variant?: keyof typeof IconButtonVariant;
    color?: keyof typeof IconButtonColor;
    fullWidth?: boolean;
    disabled?: boolean;
}

export function IconButton(props: Props) {
    const { size = "md", variant = "filled", color = "brand", disabled = false } = props;

    if (disabled) {
        return html`
            <button
                type="button"
                class=${["icon-btn", IconButtonSize[size], IconButtonVariant[variant], IconButtonColor[color]]
                    .filter(Boolean)
                    .join(" ")}
                disabled
            >
                <span class="material-symbols-outlined">apps</span>
            </button>
        `;
    }

    return html`
        <button
            type="button"
            class=${["icon-btn", IconButtonSize[size], IconButtonVariant[variant], IconButtonColor[color]]
                .filter(Boolean)
                .join(" ")}
        >
            <span class="material-symbols-outlined">apps</span>
        </button>
    `;
}
