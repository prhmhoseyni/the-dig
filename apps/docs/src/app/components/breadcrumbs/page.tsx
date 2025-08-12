import Link from "next/link";
import {ChevronLeft} from "lucide-react";
import Breadcrumbs from "@repo/ui/Breadcrumbs";

export default function BreadcrumbsPage() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <Breadcrumbs>
                <Link href="">عنوان</Link>
                <Link href="">عنوان</Link>
                <Link href="">عنوان</Link>
                <Link href="">عنوان</Link>
            </Breadcrumbs>

            <Breadcrumbs separator={<ChevronLeft size={14}/>}>
                <Link href="">عنوان</Link>
                <Link href="">عنوان</Link>
                <Link href="">عنوان</Link>
                <Link href="">عنوان</Link>
            </Breadcrumbs>

            <Breadcrumbs separator="\">
                <Link href="">عنوان</Link>
                <Link href="">عنوان</Link>
                <Link href="">عنوان</Link>
                <Link href="">عنوان</Link>
            </Breadcrumbs>
        </div>
    )
}