import { html } from "lit";

export interface Props {
  id?: string;
  title?: string;
  body?: any;
  withFooter?: boolean;
}

export function Dialog(props: Props) {
  const { id = "", title = "", body = "", withFooter = false } = props;

  if (!withFooter) {
    return html`
      <button class="btn" onclick="document.getElementById('${id}').showModal();">open modal</button>

      <dialog id="${id}" class="dialog" open>
        <div class="dialog-box">
          <div class="dialog-header">
            <p class="text-lg font-bold">${title}</p>

            <form method="dialog" class="dialog-close">
              <button>✕</button>
            </form>
          </div>

          <div class="dialog-content">
            ${body}
          </div>
        </div>

        <form method="dialog" class="dialog-backdrop">
          <button></button>
        </form>
      </dialog>
    `;
  }

  return html`
    <button class="btn" onclick="document.getElementById('${id}').showModal();">open modal</button>

    <dialog id="${id}" class="dialog" open>
      <div class="dialog-box">
        <div class="dialog-header">
          <p class="text-lg font-bold">${title}</p>

          <form method="dialog" class="dialog-close">
            <button>✕</button>
          </form>
        </div>

        <div class="dialog-content">
          ${body}
        </div>

        <form method="dialog" class="dialog-footer" dir="ltr">
          <button class="btn btn-brand">بستن</button>
        </form>
      </div>

      <form method="dialog" class="dialog-backdrop">
        <button></button>
      </form>
    </dialog>
  `;
}