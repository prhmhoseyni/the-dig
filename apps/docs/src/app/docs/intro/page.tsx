"use client"

import { useRef, useState } from "react";

export default function Introduction() {
const [isOpen, setIsOpen] = useState(false);
const ref = useRef<HTMLDialogElement>(null)


    return <>
    
    <div>Introduction</div>
    <button className="btn" onClick={()=>ref?.current?.showModal()}>open modal</button>
<dialog id="id" className="modal" open ref={ref}>
  <div className="modal-box">
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog></>;
}
