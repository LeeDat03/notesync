"use client";

import { icons } from "@/constants";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@nextui-org/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      <Image
        src={icons.welcome}
        alt="Welcome Image"
        className="sm:w-[300px] sm:h-[300px] w-[250px] h-[250px]"
        loading="lazy"
      />

      <h2 className="text-dark font-bold text-xl md:text-2xl lg:text-3xl  text-center">
        Welcome to {user?.firstName}&apos; NoteSync
      </h2>

      <Button color="primary" size="lg">
        <PlusCircle className="h-6 w-6 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentPage;
