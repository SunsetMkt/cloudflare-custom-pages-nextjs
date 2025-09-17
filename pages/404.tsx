import { ErrorBox } from "@/components/cf/ErrorBox";
import { CFLayout } from "@/components/layout/CFLayout";
import { Providers } from "@/components/providers";
import type { ErrorPageConfig } from "@/config/routes";
import { Button } from "@heroui/button";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  const config: ErrorPageConfig = {
    type: "1000s",
    code: "404",
    title: "Page Not Found",
    message: "The page you are looking for could not be found.",
    box: "RAY_ID",
    icon: "file-question",
    networkStatus: {
      clientStatus: "success",
      edgeStatus: "success",
      originStatus: "error",
    },
  };

  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
      <CFLayout>
        <div className="space-y-6">
          <ErrorBox {...config} />
          <div className="flex justify-center gap-4">
            <Button color="primary" onPress={() => router.push("/")}>
              Return to Home
            </Button>
            <Button color="secondary" onPress={() => router.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </CFLayout>
    </Providers>
  );
}

export const getStaticProps = () => {
  return {
    props: {},
  };
};
