import { useQuery } from "@tanstack/react-query";
import fetchShows from "../API/showsApi";

function useShows() {
  return useQuery({
    queryKey: ["shows"],
    queryFn: fetchShows,
    staleTime: 1000 * 60 * 50,
  });
}

export default useShows;
