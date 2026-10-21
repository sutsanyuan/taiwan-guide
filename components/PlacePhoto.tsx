import Image from "next/image";
import type { TFunction } from "@/lib/i18n/t";
import type { PlaceImage } from "@/lib/places";

type Props = {
  image: PlaceImage;
  alt: string;
  sizes: string; // 圖片在各種螢幕上大約多寬，Next.js 依此挑剛好的尺寸
  t: TFunction;
  className?: string; // 外框的比例和圓角，由使用的地方決定
};

// 卡片和詳細頁共用的照片：圖片＋右下角的作者和授權（CC 授權規定一定要標示）
export default function PlacePhoto({ image, alt, sizes, t, className = "" }: Props) {
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <Image src={image.src} alt={alt} fill sizes={sizes} className="object-cover" />
      <figcaption className="absolute right-0 bottom-0 rounded-tl-md bg-black/55 px-2 py-0.5 text-[10px] text-white">
        {t("place.photo")}:{" "}
        <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
          {image.credit}
        </a>{" "}
        ·{" "}
        <a href={image.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline">
          {image.license}
        </a>
      </figcaption>
    </figure>
  );
}
