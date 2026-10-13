import { useEffect } from "react";
import { applySEO } from "@/utils/seo";

export const useSEO = (title: string, description: string, image?: string) => {
  useEffect(() => {
    applySEO({ title, description, image });
  }, [description, image, title]);
};
