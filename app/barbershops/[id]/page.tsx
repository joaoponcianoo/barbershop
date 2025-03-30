import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/BarbershopInfo";
import ServiceItem from "./_components/ServiceItem";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({
  params,
}: BarbershopDetailsPageProps) => {
  if (!params.id) {
    // todo: redirect to 404
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    // todo: redirect to 404
    return null;
  }
  const barbershopServices = await db.barbershopService.findMany({
    where: {
      barbershopId: params.id,
    },
  });

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
      <div className="px-5 flex flex-col gap-4 mt-4">
        {barbershopServices.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetailsPage;
