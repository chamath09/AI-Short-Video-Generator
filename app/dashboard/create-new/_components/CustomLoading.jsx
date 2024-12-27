import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const CustomLoading = ({ loading }) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="bg-white">
      <AlertDialogTitle></AlertDialogTitle>
        <div className="bg-white flex flex-col items-center mt-10 justify-center">
          <Image
            src={"/progress.gif"}
            width={100}
            height={100}
            alt="animation"
          />
          <h2>Generating your video...Do not Refresh 🕹️</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomLoading;
