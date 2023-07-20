import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const useAuthenticatedRedirect = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const redirectToProtectedPage = () => {
    router.push("/protected");
  };

  useEffect(() => {
    if (status === "authenticated") {
      redirectToProtectedPage();
    }
  }, [status]);

  return redirectToProtectedPage;
};

export default useAuthenticatedRedirect;
