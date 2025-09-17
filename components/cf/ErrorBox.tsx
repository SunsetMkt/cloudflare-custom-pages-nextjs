"use client";

import { Icon } from "@/components/ui/icon";
import { errorPageTranslations, interfaceTranslations } from "@/config/i18n";
import type { ErrorPageConfig } from "@/config/routes";
import { Chip } from "@heroui/react";
import { CFCard } from "./ui/CFCard";
import { CFCardWrap } from "./ui/CFCardWrapper";
import { NetworkStatusBox } from "./ui/NetworkStatusBox";
import { NetworkStatusWrapper } from "./ui/NetworkStatusWrapper";

function wrapPlaceholder(name: string) {
  return `::${name}::`;
}

export const ErrorBox = ({
  type,
  code,
  box,
  icon,
  networkStatus,
}: ErrorPageConfig) => {
  const translation = errorPageTranslations[type];

  return (
    <CFCardWrap>
      <CFCard
        title={translation.title}
        message={translation.message}
        subtitle={
          <Chip variant="flat" color="danger" size="sm">
            Error {code}
          </Chip>
        }
        icon={<Icon name={icon} className="text-white w-6 h-6" />}
        scheme="danger"
      >
        <NetworkStatusWrapper>
          <NetworkStatusBox {...networkStatus} />
        </NetworkStatusWrapper>

        {/* 隐藏的 Cloudflare 错误占位符，仅用于服务端注入 */}
        {type === "1000s" && (
          <div id="cf-error-1000s-box" className="sr-only" aria-hidden="true">
            {wrapPlaceholder("CLOUDFLARE_ERROR_1000S_BOX")}
          </div>
        )}

        {type === "500s" && (
          <div id="cf-error-500s-box" className="sr-only" aria-hidden="true">
            {wrapPlaceholder("CLOUDFLARE_ERROR_500S_BOX")}
          </div>
        )}

        {box && (
          <div className="mt-3 sm:mt-4 p-3 sm:p-5 backdrop-blur-sm rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-100/80 dark:border-gray-800/80">
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 flex items-center gap-1.5">
                <Icon name="info" className="w-4 h-4 text-blue-500" />
                {interfaceTranslations["error-details"].message}
              </h3>

              <div className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/50 p-3 sm:p-4 rounded-lg overflow-x-auto">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<div>::${box}::</div>`,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </CFCard>
    </CFCardWrap>
  );
};

export default ErrorBox;
