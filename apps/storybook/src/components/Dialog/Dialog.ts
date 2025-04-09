import { html } from "lit";


export interface Props {
    title?: string;
    body?: any;
    footer?: any;
}

export function Dialog(props: Props) {
    const {title = "", body = "",footer="" } = props;

if(!footer){

    return html`
<label for="my_modal_1" class="btn btn-brand">باز کردن</label>

<input type="checkbox" id="my_modal_1" class="dialog-toggle" />

<div class="dialog" role="dialog">
  <div class="dialog-box">
    <div class="dialog-header">
      <p class="dialog-title">${title}</p>

      <label class="dialog-close" for="my_modal_1">✕</label>
    </div>

    <div class="dialog-content">
      ${body}
    </div>
  </div>

  <label class="dialog-backdrop" for="my_modal_1" />
</div>
`;}

return html`
<label for="my_modal_1" class="btn btn-brand">باز کردن</label>

<input type="checkbox" id="my_modal_1" class="dialog-toggle" />

<div class="dialog" role="dialog">
  <div class="dialog-box">
    <div class="dialog-header">
      <p class="dialog-title">${title}</p>

      <label class="dialog-close" for="my_modal_1">✕</label>
    </div>

    <div class="dialog-content">
      ${body}
    </div>

    <div class="dialog-footer">
      ${footer}
    </div>
  </div>

  <label class="dialog-backdrop" for="my_modal_1" />
</div>
`;
}
