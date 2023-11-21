import Button from "../components/Button";
import StudentsHeader from "../components/header";

export default function StudentsSuport(){
    return(
        <>
            <div className="w-full h-screen p-6 bg-gradient-to-br from-[#4C3F99] to-[#0D1635]">
                <StudentsHeader />
                <main>
                    <div className="mt-12">
                        <h1 className="text-2xl font-semibold text-white">Área de Suporte</h1>
                        <div className="mt-8 flex flex-col justify-center items-center">
                            <textarea name="" placeholder="Digite sua dúvida, sugestão..." id="" cols="30" rows="10" className="w-full rounded-lg p-2 outline-none text-roxo"></textarea>
                            <Button value="Enviar"/>
                        </div>
                    </div>
                </main>

            </div>
    
        </>
    )
}