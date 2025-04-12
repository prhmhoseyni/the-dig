import { html } from "lit";


export interface Props {
  id?:string;
    title?: string;
    body?: any;
    withFooter?: boolean;
}

export function Dialog(props: Props) {
    const {id="",title = "", body = "",withFooter=false } = props;

if(!withFooter){

    return html`
<label for=${id} class="btn btn-brand">باز کردن</label>

<input type="checkbox" id=${id} class="dialog-toggle" />

<div class="dialog" role="dialog">
  <div class="dialog-box">
    <div class="dialog-header">
      <p class="dialog-title">${title}</p>

      <label class="dialog-close" for=${id}>✕</label>
    </div>

    <div class="dialog-content">
      ${body}
    </div>
  </div>

  <label class="dialog-backdrop" for=${id} />
</div>
`;}

return html`
<label for=${id} class="btn btn-brand">باز کردن</label>

<input type="checkbox" id=${id} class="dialog-toggle" />

<div class="dialog" role="dialog">
  <div class="dialog-box">
    <div class="dialog-header">
      <p class="dialog-title">${title}</p>

      <label class="dialog-close" for=${id}>✕</label>
    </div>

    <div class="dialog-content">
      ${body}
    </div>

    <div class="dialog-footer">
      <div class="flex" style="width:100%;flex: 1 1 0%;justify-content: flex-end; gap: 0.75rem">
        <label class="btn btn-gray btn-tinted" style="min-width: 3rem" for=${id}>انصراف</label>
        <label class="btn btn-brand" style="min-width: 3rem" for=${id}>تایید</label>
        </div>
      </div>
  </div>

  <label class="dialog-backdrop" for=${id} />
</div>
`;
}
