"use client";

import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import SideMenu from "@/app/_components/SideMenu";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          onClick={handleBackClick}
          size="icon"
          className="absolute z-50 top-4 left-4 bg-[#0f111d] text-white"
        >
          <ChevronLeftIcon />
        </Button>

        <Sheet>
          <SheetTrigger>
            <Button
              size="icon"
              variant="outline"
              className="absolute z-50 top-4 right-4 bg-[#0f111d] text-white"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0 bg-[var(--background)]">
            <SideMenu />
          </SheetContent>
        </Sheet>

        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          style={{ objectFit: "cover" }}
          className="opacity-75"
        />
      </div>

      <div className="px-5 pt-3 pb-6 border-b border-solid border-[var(--secundary)]">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-[var(--primary)]" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <StarIcon
            className="fill-[var(--primary)] text-[var(--primary)]"
            size={18}
          />
          <p className="text-sm">5,0 (889 Avaliações)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
