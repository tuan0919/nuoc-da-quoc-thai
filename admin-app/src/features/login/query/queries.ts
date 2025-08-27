import { useToken } from "@/shared/stores/auth.store";
import { AuthService } from "../services/AuthService";
import { useQuery } from "@tanstack/react-query";

export const useValidateTokenQuery = () => {
    const token = useToken();
    return useQuery({
        queryKey: ["validateToken", token],
        queryFn: () => AuthService.validateToken(token),
        enabled: !!token,
        staleTime: 5 * 60 * 1000,
        retry: 0,
    });
}