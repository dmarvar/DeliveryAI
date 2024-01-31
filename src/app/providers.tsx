"use client";
import { fetcher } from "@/libs/fetcher";
import useSWRImmutable from "swr";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { data, error } = useSWRImmutable("/account/me", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return <div>{children}</div>;
};

export default Providers;
