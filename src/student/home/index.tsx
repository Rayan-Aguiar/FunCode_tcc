import CardCourses from "../components/CardCourses"
import StudentsHeader from "../components/header"


export default function StudentsHome(){
    return(
        <div className="w-screen h-full bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
           <StudentsHeader />


            <section className="mt-12">
                <h1 className="text-2xl text-white font-bold mb-5">Comece por aqui!</h1>
                <div className="flex flex-wrap w-full gap-8">
                    <CardCourses 
                        name="Algoritmos"
                        img="https://img.freepik.com/vetores-premium/ilustracao-de-algoritmo-de-aprendizado-de-maquina-banner-horizontal-de-vetor-de-tecnologia-em-fundo-branco_104589-1780.jpg"
                    />
                    <CardCourses 
                        name="Lógica de programação"
                        img="https://img.passeidireto.com/material/59553038/e60c37b1-238d-4bc7-99c9-9d9d63ffbabc.png"
                    />
                    <CardCourses 
                        name="HTML"
                        img="https://www.hiperbytes.com.br/wp-content/uploads/2021/02/banner-curso-html.png"
                    />
                    <CardCourses 
                        name="CSS"
                        img="https://3.bp.blogspot.com/-DLUhuVgdecY/VywOWBOoVJI/AAAAAAAASE0/qKLZ14yJDIAzruGHWnbYaHKtu_Ff-YPOACLcB/s1600/BANNER_POST.jpg"
                    />
                    <CardCourses 
                        name="JavaScript"
                        img="https://i.ytimg.com/vi/tYBBC7y5TiI/maxresdefault.jpg"
                    />
                    
                </div>

                <div className="mt-12">
                <h1 className="text-2xl text-white font-bold mb-5">Fundamentos</h1>
                <div className="flex flex-wrap w-full gap-8">
                    <CardCourses 
                        name="Fundamentos do JavaScript"
                        img="https://i.ytimg.com/vi/tYBBC7y5TiI/maxresdefault.jpg"
                    />
                    <CardCourses 
                        name="Funtamentos do JavaScript 2"
                        img="https://i.ytimg.com/vi/tYBBC7y5TiI/maxresdefault.jpg"

                    />
                </div>
                </div>
            </section>
        </div>
    )
}