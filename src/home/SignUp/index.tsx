import Button from "../../student/components/Button";
import Header from "../header";

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

export default function signUp() {
  return (
    <div className="w-screen  h-full bg-gradient-to-br from-[#4C3F99] to-[#0D1635] p-6">
      <Header />
      <div className="w-full h-fit  flex justify-center items-center">
        <div className="bg-roxo w-[450px] h-fit rounded shadow-lg flex flex-col items-center p-4">
          <h1 className="text-limeyellow text-3xl font-bold">Criar conta!</h1>
          <form action="POST" className="w-full">
            <div className="flex flex-col w-full mt-8 gap-1 ">
              <label htmlFor="" className="text-white font-semibold text-sm">
                Nome do aluno
              </label>
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />

              <label htmlFor="" className="text-white font-semibold text-sm">
                Email do responsavel
              </label>
              <input
                type="email"
                placeholder="Seu melhor email"
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />

              <label htmlFor="" className="text-white font-semibold text-sm">
                Nome do responsavel
              </label>
              <input
                type="text"
                placeholder="Nome completo do responsavel"
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />

              <label htmlFor="" className="text-white font-semibold text-sm">
                Telefone do Responsavel
              </label>
              <input
                type="number"
                placeholder="(21) 99999-9999"
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />

              <label htmlFor="" className="text-white font-semibold text-sm">
                Senha
              </label>
              <input
                type="password"
                placeholder="Sua senha "
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />
              <label htmlFor="" className="text-white font-semibold text-sm">
                Confirmar senha
              </label>
              <input
                type="password"
                placeholder="Confirme sua senha "
                className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
              />

              <div className="flex md:flex-row flex-col w-full gap-2">
                <div className="w-full ">
                  <label
                    htmlFor=""
                    className="text-white font-semibold text-sm"
                  >
                    Data de Nasc.
                  </label>
                  <input
                    type="text"
                    placeholder="20/08/1994 "
                    className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
                  />
                </div>
                <div className="w-full ">
                  <label
                    htmlFor=""
                    className="text-white font-semibold text-sm"
                  >
                    CEP
                  </label>
                  <input
                    type="number"
                    placeholder="00.000-00 "
                    className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
                  />
                </div>
              </div>

              <div className="flex md:flex-row flex-col items-center gap-2">
                <div className="flex flex-col w-4/5">
                  <label
                    htmlFor=""
                    className="text-white font-semibold text-sm"
                  >
                    Endereço
                  </label>
                  <input
                    type="text"
                    placeholder="Rua dos Alfeneiros nº4 "
                    className="w-full px-2 py-1 rounded text-roxo outline-none block bg-zinc-200 text-sm"
                  />
                </div>
                <div className="flex flex-col w-1/5">
                  <label className="text-white font-semibold text-sm">UF:</label>
                  <select name="UF" className="px-2 py-1.5 text-roxo rounded">
                    {Object.entries(estados).map(([uf]) => (
                      <option key={uf} value={uf}>
                        {uf} 
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            <div className="w-full  flex justify-center items-center">
              <Button 
                value="Enviar"
              />

            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
