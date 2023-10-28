import { Save } from "lucide-react";

type Props = {
    value: string;
};

export default function Button(buttonProp: Props){
    return(
        <button className="bg-limeyellow w-28 h-10 mt-4 text-roxo rounded-md font-semibold flex justify-center items-center gap-2 hover:bg-[#EBDA3A]">{buttonProp.value} <Save /></button>
    )
}