import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const clientNavigate = (router: AppRouterInstance, destinationUrl: string) => {
    router.push(destinationUrl);
}