import { html } from "lit";

export interface Props {
    title?: string;
    description?: string;
}

export function Notification(props: Props) {
    const { title = "", description = ""} = props;

    if (!title) {
        return html` <div class="notification">${description}</div> `;
    }

    return html`
        <div class="notification"}>
            <div class="notification-title">${title}</div>
            <div class="notification-description">${description}</div>
            <div class="notification-actions"><button class="btn btn-brand btn-tinted">عملیات</button></div>
        </div>
    `;
}
