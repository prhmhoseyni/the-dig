import { html } from "lit";

export interface Props {
    value: string;
    disabled?: boolean;
    size?:"sm" | "md";
}

export function Switch(props: Props) {
    const {
        disabled = false,
        size="md",
    } = props;

    if (disabled) {
        if(size==="sm"){
            return html`
            <input type="checkbox" checked="checked" class="switch switch-sm disabled="true" />
            `;
        }

        return html`
        <input type="checkbox" checked="checked" class="switch" disabled="true" />
        `;
    }

    if(size==="sm"){
        return html`
        <input type="checkbox" checked="checked" class="switch switch-sm" />
        `;
    }

    return html`
    <input type="checkbox" checked="checked" class="switch" />
    `;
}
