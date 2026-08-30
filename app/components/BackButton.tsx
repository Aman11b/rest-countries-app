"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex w-fit items-center gap-3 rounded-md bg-(--element) px-6 py-2 text-md shadow-md hover:shadow-md outline-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--foreground)"
    >
      <MoveLeft />
      Back
    </button>
  );
}
