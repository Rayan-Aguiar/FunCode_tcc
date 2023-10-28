import ReactPlayer from 'react-player'
import StudentsHeader from "../components/header";
import { Link } from 'react-router-dom';



export default function StudentsClasses(){
    return (
        <div className="w-screen md:h-full h-screen bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
            <StudentsHeader />
            
            <section className="mt-12 flex flex-col items-center justify-center">
                <div className="md:w-[1200px] w-full md:h-[550px] overflow-hidden bg-zinc-300 rounded-2xl flex items-center justify-center">
                    <ReactPlayer 
                        className=""
                        width='100%'
                        height='100%'
                        controls                        
                        playing
                        pip                        
                        url={"https://www.youtube.com/watch?v=8mei6uVttho&pp=ygUOYWxnb3JpdG1vIGF1bGE%3D"}/>
                </div>
                <div className="mt-2 flex justify-between w-[1200px]">
                    <div className="w-10/12">
                        <h3 className="font-semibold text-white mb-2">Seja bem vindo(a) - Algoritmo - Aula 1</h3>
                        <p className="text-white text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, vel quas. Saepe, suscipit aperiam quas nostrum commodi asperiores eum facilis eligendi ut corrupti sint animi consectetur ex quae quos ullam amet iste molestiae nihil minus rerum consequatur aliquam recusandae. Nesciunt porro hic quo deserunt animi dignissimos unde nihil temporibus at non repellendus minima blanditiis ducimus maxime voluptatum natus voluptates saepe vero, reprehenderit nemo est fugit fugiat? Nobis non ullam numquam, tenetur quas facere porro repudiandae nam nemo labore beatae officia.</p>
                    </div>
                    <div className="flex flex-col text-white overflow-auto w-24 h-40 bg-roxo-light/50 justify-center items-center rounded-2xl ">
                        <ul>
                            <li><Link to="#" className='font-semibold'>Aula 1</Link></li>
                            <li><Link to="#" className='font-semibold'>Aula 2</Link></li>
                            <li><Link to="#" className='font-semibold'>Aula 3</Link></li>
                            <li><Link to="#" className='font-semibold'>Aula 4</Link></li>
                            <li><Link to="#" className='font-semibold'>Aula 5</Link></li>
                            <li><Link to="#" className='font-semibold'>Aula 6</Link></li>
                            <li><Link to="#" className='font-semibold'>Aula 7</Link></li>
                            
                            
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}