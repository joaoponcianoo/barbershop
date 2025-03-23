import Header from "../_components/Header";
import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <div className="bg-background h-screen">
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, João!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de MMMM'", { locale: ptBR })}
        </p>
      </div>
    </div>
  );
}
