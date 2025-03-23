import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale";
import Header from "../_components/Header";
import Search from "./_components/Search";
import BookingItem from "../_components/BookingItem";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/BarbershopItem";

export default async function Home() {
  //get barbershops from database
  const barbershops = await db.barbershop.findMany();

  return (
    <div>
      <Header />

      <div className="px-5 pt-6">
        <h2 className="text-xl font-bold">Olá, João!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>

      <div className="mt-6 px-5">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <div className="mt-6 px-5 ">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Populares
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
