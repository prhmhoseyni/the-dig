import { useState } from "react";

import Button from "@repo/ui/Button";
import Switch from "@repo/ui/Switch";
import Preview from "../Preview";
import { BadgeCheck } from "lucide-react";
export default function ButtonLoading() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Preview>
      <div className="flex  items-center w-full justify-end">
        <span className="ml-2 mt-1"> Loading</span>
        <Switch
          defaultChecked
          onChange={(e) => {
            console.log("change : ", e.target.checked);
            setIsLoading(e.target.checked);
          }}
        />
      </div>
      <div className="flex items-center flex-wrap  justify-start gap-4">
        <Button
          className="width-120"
          variant="contained"
          color="brand"
          isLoading={isLoading}
          loadingPosition="start"
          startIcon={<BadgeCheck size={18} />}
        >
          ثبت
        </Button>
        <Button
          className="width-120"
          variant="tinted"
          color="brand"
          isLoading={isLoading}
          loadingPosition="end"
          endIcon={<BadgeCheck size={18} />}
        >
          پرداخت
        </Button>
        <Button
          className="width-120"
          variant="contained"
          color="success"
          isLoading={isLoading}
          endIcon={<BadgeCheck size={18} />}
        >
          برداشت
        </Button>
        <Button
          className="width-120"
          variant="tinted"
          color="success"
          isLoading={isLoading}
          loadingIndicator="در حال دریافت ..."
          endIcon={<BadgeCheck size={18} />}
        >
          انتقال
        </Button>

        <Button
          className="width-120"
          variant="outlined"
          color="success"
          isLoading={isLoading}
          loadingPosition="start"
          startIcon={<BadgeCheck size={18} />}
        >
          شارژ
        </Button>
        <Button
          className="width-120"
          variant="outlined"
          color="brand"
          isLoading={isLoading}
          loadingPosition="end"
          endIcon={<BadgeCheck size={18} />}
        >
          گزارشات
        </Button>
        <Button
          className="width-120"
          variant="outlined"
          color="warning"
          isLoading={isLoading}
          endIcon={<BadgeCheck size={18} />}
        >
          حذف
        </Button>
        <Button
          className="width-120"
          variant="outlined"
          color="gray"
          isLoading={isLoading}
          loadingIndicator="در حال دریافت ..."
          endIcon={<BadgeCheck size={18} />}
        >
          ویرایش
        </Button>

        <Button
          className="width-120"
          variant="tinted"
          color="danger"
          isLoading={isLoading}
          loadingPosition="start"
          isShowAdornmentLoading={isLoading}
          startIcon={<BadgeCheck size={18} />}
        >
          ثبت
        </Button>
        <Button
          className="width-120"
          variant="contained"
          color="danger"
          isLoading={isLoading}
          loadingPosition="end"
          isShowAdornmentLoading={isLoading}
          endIcon={<BadgeCheck size={18} />}
        >
          پرداخت
        </Button>
        <Button className="width-120" variant="contained" color="gray" isLoading={isLoading} endIcon={<BadgeCheck size={18} />}>
          برداشت
        </Button>
        <Button
          className="width-120"
          variant="tinted"
          color="gray"
          isLoading={isLoading}
          loadingIndicator="در حال دریافت ..."
          endIcon={<BadgeCheck size={18} />}
        >
          انتقال
        </Button>

        <Button
          className="width-120"
          variant="outlined"
          color="success"
          isLoading={isLoading}
          loadingPosition="start"
          startIcon={<BadgeCheck size={18} />}
        >
          شارژ
        </Button>
        <Button
          className="width-120"
          variant="outlined"
          color="brand"
          isLoading={isLoading}
          loadingPosition="end"
          endIcon={<BadgeCheck size={18} />}
        >
          گزارشات
        </Button>
        <Button
          className="width-120"
          variant="outlined"
          color="warning"
          isLoading={isLoading}
          endIcon={<BadgeCheck size={18} />}
        >
          حذف
        </Button>
        <Button
          className="width-120"
          variant="outlined"
          color="gray"
          isLoading={isLoading}
          loadingIndicator="در حال دریافت ..."
          endIcon={<BadgeCheck size={18} />}
        >
          ویرایش
        </Button>
      </div>
    </Preview>
  );
}
