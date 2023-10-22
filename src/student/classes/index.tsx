import { PlayCircle } from "lucide-react";
import StudentsHeader from "../components/header";

export default function StudentsClasses(){
    return (
        <div className="w-screen h-full bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
            <StudentsHeader />
            
            <section className="mt-12 flex flex-col items-center justify-center">
                <div className="w-[1200px] h-96 bg-zinc-300 rounded-2xl flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-zinc-500/50 cursor-pointer" />
                </div>
                <div className="mt-2 flex justify-between w-[1200px]">
                    <div className="w-10/12">
                        <h3 className="font-semibold text-white mb-2">Seja bem vindo(a) - Algoritmo - Aula 1</h3>
                        <p className="text-white text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, vel quas. Saepe, suscipit aperiam quas nostrum commodi asperiores eum facilis eligendi ut corrupti sint animi consectetur ex quae quos ullam amet iste molestiae nihil minus rerum consequatur aliquam recusandae. Nesciunt porro hic quo deserunt animi dignissimos unde nihil temporibus at non repellendus minima blanditiis ducimus maxime voluptatum natus voluptates saepe vero, reprehenderit nemo est fugit fugiat? Nobis non ullam numquam, tenetur quas facere porro repudiandae nam nemo labore beatae officia.</p>
                    </div>
                    <div className="flex flex-col text-white">
                        <ul>
                            <li>Aula 1</li>
                            <li>Aula 2</li>
                            <li>Aula 3</li>
                            <li>Aula 4</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}