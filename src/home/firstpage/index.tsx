import Kid1 from '../../assets/kid 1.png'

export default function FirstPage(){
    return(
        <div className="mt-8 flex justify-between items-center w-100%">
            <div className='text-white flex flex-col gap-8 ml-10'>
                <div className='w-96'>
                    <h1 className='text-5xl font-bold'>Muito prazer, nós somos a</h1>
                    <h1 className='text-limeyellow text-5xl font-bold'>FunCode</h1>
                </div>
                <p className='font-extralight w-96'>Inicie a Jornada Tecnológica de seu Filho(a) Hoje Mesmo: Construa o Futuro!</p>
                <button className='bg-limeyellow p-2 rounded-full text-roxo w-60'>Saiba mais!</button>
            </div>
            
            <div className='md:block hidden'>
                <img src={Kid1} alt="Imagem Criança" className='w-96 '/>
            </div>
        </div>
    )
}