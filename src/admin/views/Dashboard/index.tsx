import { Typography } from "@material-tailwind/react";
import { ArrowDown, Coins, GraduationCap, HelpCircle, Landmark, PieChart, User } from "lucide-react";

export default function Dashboard(){
    return(
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-fit ">
            <header className="flex items-center justify-between w-full h-20 p-8">
                <div>
                    <img src="logo.png" alt="Logo Fun Code" />
                </div>
                
                <div className="w-20 h-12 bg-zinc-300 rounded-full flex items-center">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                        <User  className="text-roxo"/>
                    </div>
                    <ArrowDown className="text-roxo" />
                </div>
            </header>
            <nav className="w-full h-10 bg-roxo flex items-center px-10 gap-8">
                <Typography className="text-zinc-50 font-semibold bg-roxo-light w-fit h-full flex items-center gap-2 p-2">
                    <PieChart className="text-limeyellow" /> Dashboard</Typography>
                <Typography className="text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2">
                    <GraduationCap className="text-limeyellow" /> Alunos</Typography>
                <Typography className="text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2">
                    <Coins className="text-limeyellow" /> Financeiro</Typography>
                <Typography className="text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2">
                    <HelpCircle className="text-limeyellow" /> Suporte</Typography>
            </nav>
            <main className="flex items-center justify-center flex-col">
                <div className="grid grid-cols-4 md:flex-row justify-around items-center p-8 w-11/12 gap-8">
                    <div className="w-60 h-60 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
                        <Typography variant="span" className="text-zinc-50">Alunos cadastrados</Typography>
                        <GraduationCap className="text-limeyellow w-20 h-20"/>
                        <Typography variant="h3" className="text-zinc-50">300</Typography>
                    </div>
                    <div className="w-60 h-60 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
                        <Typography variant="span" className="text-zinc-50">Bolsistas</Typography>
                        <GraduationCap className="text-limeyellow w-20 h-20"/>
                        <Typography variant="h3" className="text-zinc-50">100</Typography>
                    </div>
                    <div className="w-60 h-60 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
                        <Typography variant="span" className="text-zinc-50">Suportes em aberto</Typography>
                        <HelpCircle className="text-limeyellow w-20 h-20"/>
                        <Typography variant="h3" className="text-zinc-50">2</Typography>
                    </div>
                    <div className="w-60 h-60 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
                        <Typography variant="span" className="text-zinc-50">Faturamento Total</Typography>
                        <Landmark className="text-limeyellow w-20 h-20"/>
                        <Typography variant="h3" className="text-zinc-50">R$ 1200,00</Typography>
                    </div>                    
                    <div className="w-60 h-60 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
                        <Typography variant="span" className="text-zinc-50">Faturamento Mensal</Typography>
                        <Landmark className="text-limeyellow w-20 h-20"/>
                        <Typography variant="h3" className="text-zinc-50">R$ 1200,00</Typography>
                    </div>
                    <div className="w-fit h-60 rounded-md bg-roxo-normal flex flex-col justify-center items-center gap-4">
                        <Typography variant="span" className="text-zinc-50">Últimos Alunos cadastrados</Typography>
                        <table className="table-auto text-zinc-50 text-xs">
                            <thead>
                                <tr>
                                    <th>Aluno</th>
                                    <th>Responsável</th>
                                    <th>Status</th>
                                    <th>Data da matricula</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>João batista</th>
                                    <th>Guilherme Sampaio</th>
                                    <th>Lucas José</th>
                                    <th>Priscila Rocha</th>
                                    <th>Larissa Indrig</th>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                                    

                                  
                </div>
                
            </main>
        </div>
    )
}