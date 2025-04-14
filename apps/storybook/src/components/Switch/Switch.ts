import { html } from "lit";

export interface Props {
    value: string;
    disabled?: boolean,
}

export function Switch(props: Props) {
    const {
        disabled = false,
    } = props;

    if (disabled) {
        return html`
        <input type="checkbox" checked="checked" class="switch" disabled />
        `;
    }

    return html`
    <input type="checkbox" checked="checked" class="switch" />
    `;
}
