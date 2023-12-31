import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().key);
}

export default useQuery;