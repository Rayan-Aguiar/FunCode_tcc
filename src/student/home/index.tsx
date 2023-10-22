import CardCourses from "../components/CardCourses"
import StudentsHeader from "../components/header"

export default function StudentsHome(){
    return(
        <div className="w-screen h-full bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
           <StudentsHeader />


            <section className="mt-12">
                <h1 className="text-2xl text-white font-bold mb-5">Comece por aqui!</h1>
                <div className="flex flex-wrap w-full gap-8">
                    <CardCourses />
                    <CardCourses />
                    <CardCourses />
                    <CardCourses />
                    <CardCourses />
                </div>

                <div className="mt-12">
                <h1 className="text-2xl text-white font-bold mb-5">Fundamentos</h1>
                <div className="flex flex-wrap w-full gap-8">
                    <CardCourses />
                    <CardCourses />
                </div>
                </div>
            </section>
        </div>
    )
}