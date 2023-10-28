import { Edit3Icon, Save, User2 } from "lucide-react";
import StudentsHeader from "../components/header";

const estados = {
  "": "",
  AC: "Acre",
  AL: "Alagoas",
  AM: "Amazonas",
  AP: "Amapá",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MG: "Minas Gerais",
  MS: "Mato Grosso do Sul",
  MT: "Mato Grosso",
  PA: "Pará",
  PB: "Paraíba",
  PE: "Pernambuco",
  PI: "Piauí",
  PR: "Paraná",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RO: "Rondônia",
  RR: "Roraima",
  RS: "Rio Grande do Sul",
  SC: "Santa Catarina",
  SE: "Sergipe",
  SP: "São Paulo",
  TO: "Tocantins",
};


export default function EditPerfil() {
  return (
    <div className="w-screen md:h-screen h-full bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
      <StudentsHeader />
      <div className="w-full flex items-center justify-center mt-12">
        <main className="bg-roxo md:w-[1100px] w-full h-full md:h-[400px] rounded-xl flex flex-col md:flex-row justify-between items-center p-4 gap-4">

          <div className="bg-limeyellow w-80 h-full rounded-lg flex flex-col justify-center items-center gap-20 relative md:p-0 p-4">
            <div className="flex justify-center items-center flex-col">
                <div className="rounded-full bg-zinc-400 w-28 h-28 flex justify-center items-center">
                    <User2 className="text-roxo w-12 h-12"/>
                </div>
                    <label htmlFor="fileInput" className="bg-roxo rounded-full p-1 absolute md:top-32 md:right-20 top-24 right-28 cursor-pointer hover:bg-roxo-normal duration-150"><Edit3Icon className="text-limeyellow"/></label>
                    <input type="file" id="fileInput" accept=".jpg, .jpeg, .png" multiple className="hidden"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <span className="font-bold">Rayan Siqueira</span>
                <div className="flex flex-col text-xs justify-center items-center gap-4">
                    <span>rayansiqueira@souunisuam.com.br</span>
                    <span>12 anos</span>
                    <span>Nova Iguaçu - RJ</span>
                </div>
            </div>

          </div>

          <div className="w-full flex flex-col items-center justify-center text-white gap-2">
            <h1 className="text-white font-bold text-2xl">Meu Perfil</h1>
            <div className="flex gap-2 w-full md:flex-row flex-col">
              <div className="flex flex-col w-full">
                <label>Nome do responsavel</label>
                <input type="text" className="rounded px-2 py-1 outline-none text-roxo" />
              </div>
              <div className="flex flex-col w-full">
                <label>Email do responsavel</label>
                <input
                  type="email"
                  className="rounded px-2 py-1 outline-none text-roxo"
                />
              </div>
            </div>
            <div className="flex gap-2 w-full md:flex-row flex-col">
              <div className="flex flex-col w-full">
                <label>Telefone do responsavel</label>
                <input
                  type="number"
                  className="rounded px-2 py-1 outline-none text-roxo"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Endereço</label>
                <input type="text" className="rounded px-2 py-1 outline-none text-roxo" />
              </div>
            </div>
            <div className="flex w-full gap-2">
              <div className="flex flex-col w-4/5">
                <label>Cidade</label>
                <input type="text" className="rounded px-2 py-1 outline-none text-roxo" />
              </div>
              <div className="flex flex-col w-1/5">
                <label>UF:</label>
                <select name="UF" className="px-2 py-1.5 text-roxo rounded">
                  {Object.entries(estados).map(([uf, estado]) => (
                    <option key={uf} value={uf}>
                      {uf} - {estado}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex w-full gap-2 md:flex-row flex-col">
              <div className="flex flex-col w-full">
                <label>Alterar Senha</label>
                <input
                  type="password"
                  className="rounded px-2 py-1 outline-none text-roxo"
                />
              </div>
              <div className="flex flex-col w-full">
                <label>Confirmar Senha</label>
                <input
                  type="password"
                  className="rounded px-2 py-1 outline-none text-roxo"
                />
              </div>
            </div>
            <button className="bg-limeyellow w-28 h-10 mt-4 text-roxo rounded-md font-semibold flex justify-center items-center gap-2 hover:bg-[#EBDA3A]">Enviar <Save /></button>
          </div>
        </main>
      </div>
    </div>
  );
}
