import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

export enum BoxShadowVariant {
    "xs" = "box-shadow-xs",
    "sm" = "box-shadow-sm",
    "md" = "box-shadow-md",
    "lg" = "box-shadow-lg",
    "xl" = "box-shadow-xl",
    "2xl" = "box-shadow-2xl",
    "3xl" = "box-shadow-3xl",

    "card-sm" = "box-shadow-card-sm",
    "card-md" = "box-shadow-card-md",
    "card-lg" = "box-shadow-card-lg",

    "btn-brand" = "box-shadow-btn-brand",
    "btn-info" = "box-shadow-btn-info",
    "btn-success" = "box-shadow-btn-success",
    "btn-warning" = "box-shadow-btn-warning",
    "btn-danger" = "box-shadow-btn-danger",

    "focus-brand" = "box-shadow-focus-brand",
    "focus-info" = "box-shadow-focus-info",
    "focus-success" = "box-shadow-focus-success",
    "focus-warning" = "box-shadow-focus-warning",
    "focus-danger" = "box-shadow-focus-danger",
    "focus-gray" = "box-shadow-focus-gray",

    "dialog" = "box-shadow-dialog",
    "menu" = "box-shadow-menu",
    "control" = "box-shadow-control",
    "alert" = "box-shadow-alert",
}

export interface Props {
    variant: keyof typeof BoxShadowVariant;
}

export function BoxShadow(props: Props) {
    const {
        variant = "md",
    } = props;

    return html`
        <div
            style=${styleMap({
                display: "flex",
                height: "120px",
                padding: "30px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F8F8F9",
            })}
        >
            <div
                class=${BoxShadowVariant[variant]}
                style=${styleMap({
                    width: "80px",
                    height: "80px",
                    borderRadius: "999px",
                    backgroundColor: "#FFFFFF",
                })}
            ></div>
        </div>
    `;
}