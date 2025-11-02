import Dialog from "@repo/ui/Dialog";
import Button from "@repo/ui/Button";
import { useState } from "react";
import Preview from "../Preview";
import IconButton from "@repo/ui/IconButton";
import { X } from "lucide-react";

export default function BottomSheetPreview() {
	const [open, setOpen] = useState(false);

	return (
		<Preview>
			<Button onClick={() => setOpen(true)}>کلیک کن</Button>

			<Dialog open={open} onClose={() => setOpen(false)}>
				<Dialog.Header className="flex justify-between items-center">
					عنوان تست نمونه
					<X onClick={() => setOpen(false)} className="absolute end-6 cursor-pointer" size={18} />
				</Dialog.Header>

				<Dialog.Body>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
					روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
					ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
					تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
					کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
					نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
				</Dialog.Body>

				<Dialog.Footer className="flex items-center justify-end gap-4">
					<Button variant="tinted" color="gray" onClick={() => setOpen(false)} className="!min-w-28">
						انصراف
					</Button>
					<Button color="brand" variant="contained" onClick={() => setOpen(false)} className="!min-w-28">
						تایید
					</Button>
				</Dialog.Footer>
			</Dialog>
		</Preview>
	);
}
