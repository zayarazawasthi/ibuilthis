import { EyeIcon, LucideIcon, RocketIcon, UserIcon } from "lucide-react";

const statsData = [
  { icon: RocketIcon, value: "2.5k+", label: "Projects Shared" },
  { icon: UserIcon, value: "10k+", label: "Active Creators" },
  { icon: EyeIcon, value: "50k+", label: "Monthly Visitors" },
];

export default function StatsCard() {
    return (
      <div className="py-8 flex gap-8 divide-x  px-4">
        {statsData.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} >
              <div className="flex  justify-center items-center">
                <Icon />
                <p className="text-3xl font-bold">{item.value}</p>
              </div>

              <p className="text-sm">{item.label}</p>
            </div>
          );
        })}
      </div>
    );
  
}
