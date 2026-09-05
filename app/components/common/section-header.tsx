import { Icon, LucideIcon } from "lucide-react";

export default function SectionHeader({
  title,
  icon:Icon,
  description,
}: {
  title: string;
  icon: LucideIcon;
  description: string;
}) {
  return (
    <div className=" max-w-4xl mx-auto w-full py-8 ">
      <div className="flex gap-3 xl items-center align-center">
        <Icon size={12} className="" />
        <h2 className="font-semibold">{title}</h2>
      </div>
      <p className="text-sm font-normal leading-tight">{description}</p>
    </div>
  );
}
