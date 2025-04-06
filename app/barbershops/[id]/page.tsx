import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/BarbershopInfo";
import ServiceItem from "./_components/ServiceItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  const session = await getServerSession(authOptions);

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  const barbershopServices = await db.barbershopService.findMany({
    where: {
      barbershopId: params.id,
    },
  });

  return (
    <div>
      {barbershop && <BarbershopInfo barbershop={barbershop} />}
      <div className="px-5 flex flex-col gap-4 mt-4">
        {barbershopServices.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            isAuthenticated={!!session?.user}
          />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetailsPage;
