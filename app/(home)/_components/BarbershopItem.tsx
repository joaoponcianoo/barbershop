"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  };

  return (
    <Card className="p-0 min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-0">
        <div className="relative h-[159px] w-full">
          <div className="absolute top-2 left-2 z-50">
            <Badge className="bg-[#221C3D] border-none opacity-90">
              <StarIcon size={12} className="fill-[var(--primary)] text-[var(--primary)]" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            style={{ objectFit: "cover" }}
            layout="fill"
            className="rounded-2xl rounded-b-none"
          />
        </div>

        <div className="p-2">
          <h2 className="font-bold overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button className="bg-[#1b1e28] w-full mt-3" onClick={handleBookingClick}>Reservar</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
