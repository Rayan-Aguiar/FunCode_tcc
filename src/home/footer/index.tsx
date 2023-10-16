import { CornerLeftUp } from 'lucide-react'
import Logo from '../../assets/logo.png'

export default function Footer(){
    return(
        <div className="bg-limeyellow flex flex-col items-center justify-between p-8 text-roxo divide-y divide-roxo/20 ">
            <div className="flex items-center justify-between w-full">
                <div>
                    <img src={Logo} alt="Logo FunCode" />
                </div>
                <div className=''>
                    <ul className='flex gap-8'>
                        <li>Home</li>
                        <li>Sobre nós</li>
                        <li className='font-bold'>Área do Aluno</li>
                    </ul>
                </div>
                <div>
                    <a href="#">
                        <button className='p-6 rounded-xl bg-roxo flex items-center justify-center'><CornerLeftUp className='text-limeyellow ' /></button>
                    </a>
                </div>
            </div>

            <div className='w-full flex justify-center mt-4'>
                <span className='text-sm'>funCode © 2023 | Todos os direitos reservados.</span>

            </div>
        </div>
    )
}