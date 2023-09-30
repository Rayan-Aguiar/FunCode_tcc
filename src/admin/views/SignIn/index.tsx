import { Link } from "react-router-dom"

import { Button } from "@material-tailwind/react";
import { User2, LogIn, Lock } from "lucide-react";


export default function adminSignIn(){
    return(
        <div className="bg-gradient-to-br from-violet-700 via-violet-800 to-violet-900 w-screen h-screen flex items-center justify-center">
            <div className="w-96 h-96 bg-roxo flex flex-col justify-center items-center drop-shadow-lg rounded">
                <div className="flex flex-col justify-center items-center w-full gap-4">
                    <div className="w-16 h-16 bg-limeyellow rounded-full flex items-center justify-center">
                        <User2 className="text-roxo"/> 
                    </div>
                    <div className="flex flex-col w-10/12 items-center justify-center">                            
                            <div>
                                <label htmlFor="" className="text-zinc-50 ">Login</label>
                            </div>
                        <div className="w-full h-fit bg-zinc-200 flex py-4 rounded-md gap-2">
                            <LogIn className="text-roxo ml-2"/>
                            <input placeholder="Digite seu login" className="w-full h-full outline-none px-2 bg-inherit text-roxo"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-10/12 items-center justify-center">
                            <div>
                                <label htmlFor="" className="text-zinc-50 ">Senha</label>
                            </div>
                        <div className="w-full h-fit bg-zinc-200 flex py-4 rounded-md gap-2">
                            <Lock className="text-roxo ml-2"/> 
                            <input placeholder="Digite sua senha" type="password" className="w-full h-full outline-none px-2 bg-inherit text-roxo"/>
                        </div>
                    </div>
                    <Link to="/dashboard">
                        <Button className="bg-limeyellow text-roxo w-60 mt-2">Entrar!</Button>
                    </Link>
                    
                </div>
            </div>
        </div>
        
    )
}