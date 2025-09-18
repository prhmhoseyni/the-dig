"use client";

import Tabs from "@repo/ui/Tabs";
import { useState } from "react";

export default function TabsPreview() {
	const [value, setValue] = useState(1);

	return (
		<Tabs value={value} onChange={(value) => setValue(value)}>
			<Tabs.Item>عنوان ۱</Tabs.Item>
			<Tabs.Item>عنوان ۲</Tabs.Item>
			<Tabs.Item>عنوان ۳</Tabs.Item>
		</Tabs>
	);
}
