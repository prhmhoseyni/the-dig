import { html } from "lit";

export enum AlertColor {
    default = "",
    info = "alert-info",
    success = "alert-success",
    warning = "alert-warning",
    danger = "alert-danger",
}

export interface Props {
    color?: keyof typeof AlertColor;
    title?: string;
    description?: string;
}

export function Alert(props: Props) {
    const { color = "default", title = "", description = "" } = props;

    if (!title) {
        return html` <div class=${["alert", AlertColor[color]].filter(Boolean).join(" ")}>${description}</div> `;
    }

    return html`
        <div class=${["alert", AlertColor[color]].filter(Boolean).join(" ")}>
            <div class="alert-title">${title}</div>
            <div class="alert-description">${description}</div>
        </div>
    `;
}
