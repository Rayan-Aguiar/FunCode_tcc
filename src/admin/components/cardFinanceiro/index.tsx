import { Typography } from "@material-tailwind/react";

interface CardProps{
    title: string;
    value: string | number;
}

export default function CardFinanceiro({title, value}:CardProps) {

  return (
    <div className="w-60 h-36 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
      <Typography variant="span" className="text-zinc-50">
        {title}
      </Typography>
      <Typography variant="h3" className="text-zinc-50">
        {value}
      </Typography>
    </div>
  );
}
