import Tooltip from "@repo/ui/Tooltip";

export default function TooltipPage() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center gap-8">
      <Tooltip id="top" content="این یک راهنمای ابزار است." place="top">
        <button>top</button>
      </Tooltip>

      <Tooltip id="bottom" content="این یک راهنمای ابزار است." place="bottom">
        <button>bottom</button>
      </Tooltip>

      <Tooltip id="left" content="این یک راهنمای ابزار است." place="left">
        <button>left</button>
      </Tooltip>

      <Tooltip id="right" content="این یک راهنمای ابزار است." place="right">
        <button>right</button>
      </Tooltip>

      <Tooltip id="left-start" content="این یک راهنمای ابزار است." place="left-start">
        <button>left-start</button>
      </Tooltip>

      <Tooltip id="left-end" content="این یک راهنمای ابزار است." place="left-end">
        <button>left-end</button>
      </Tooltip>

      <Tooltip id="right-start" content="این یک راهنمای ابزار است." place="right-start">
        <button>right-start</button>
      </Tooltip>

      <Tooltip id="right-end" content="این یک راهنمای ابزار است." place="right-end">
        <button>right-end</button>
      </Tooltip>

      <Tooltip id="top-start" content="این یک راهنمای ابزار است." place="top-start">
        <button>top-start</button>
      </Tooltip>

      <Tooltip id="top-end" content="این یک راهنمای ابزار است." place="top-end">
        <button>top-end</button>
      </Tooltip>

      <Tooltip id="bottom-start" content="این یک راهنمای ابزار است." place="bottom-start">
        <button>bottom-start</button>
      </Tooltip>

      <Tooltip id="bottom-end" content="این یک راهنمای ابزار است." place="bottom-end">
        <button>bottom-end</button>
      </Tooltip>
    </div>
  );
}
