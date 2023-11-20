import { Typography } from "@material-tailwind/react";

interface CardAdminProps {
  icon: IconType;
  title: string;
  description: string | number;
}

export default function CardAdmin({
  icon: Icon,
  title,
  description,
}: CardAdminProps) {
  return (
    <div className="w-60 h-60 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
      <Typography variant="span" className="text-zinc-50">
        {title}
      </Typography>
      {Icon && <Icon className="text-limeyellow w-20 h-20" />}
      <Typography variant="h3" className="text-zinc-50">
        {description}
      </Typography>
    </div>
  );
}
