import { useState } from "react";

import Button from "@repo/ui/Button";
import Switch from "@repo/ui/Switch";
import Preview from "../Preview";
import { BadgeCheck } from "lucide-react";
export default function ButtonLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [isShowAdornment, setIsShowAdornment] = useState(true);

  return (
    <Preview>
      <div className="flex w-full justify-end">
        <div className="flex  items-center justify-end ml-8">
          <span className="ml-2 mt-1"> isShowAdornmentLoading</span>
          <Switch
            defaultChecked
            onChange={(e) => {
              setIsShowAdornment(e.target.checked);
            }}
          />
        </div>
        <div className="flex  items-center justify-end">
          <span className="ml-2 mt-1"> Loading</span>
          <Switch
            defaultChecked
            onChange={(e) => {
              setIsLoading(e.target.checked);
            }}
          />
        </div>
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
          isShowAdornmentLoading={isShowAdornment}
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
          isShowAdornmentLoading={isShowAdornment}
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
