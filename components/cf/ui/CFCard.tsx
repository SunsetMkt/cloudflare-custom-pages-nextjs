import { ThemeSwitch } from "@/components/theme-switch";
import { getSchemeClasses } from "@/components/ui/color-scheme";
import type { ColorScheme } from "@/config/home";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { clsx as cx } from "clsx";
import type { ReactNode } from "react";

interface CFCardProps {
  title: string;
  subtitle?: ReactNode;
  message: string;
  icon: ReactNode;
  watermark?: ReactNode;
  headerClassName?: string;
  iconClassName?: string;
  scheme?: ColorScheme;
  children?: ReactNode;
  footer?: ReactNode;
}

export const CFCard = ({
  title,
  subtitle,
  message,
  icon,
  watermark,
  headerClassName = "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900",
  iconClassName,
  scheme = "primary",
  children,
  footer,
}: CFCardProps) => {
  const schemeClasses = getSchemeClasses(scheme);
  const finalIconClassName =
    iconClassName ||
    cx("bg-gradient-to-br", schemeClasses.gradient, schemeClasses.iconBg);

  const getIconGlowClass = () => {
    if (scheme === "primary") return "bg-blue-500/20";
    if (scheme === "danger") return "bg-red-500/20";
    if (scheme === "warning") return "bg-amber-500/20";
    return "bg-default-500/20";
  };

  return (
    <Card
      suppressHydrationWarning
      className="max-w-xl mx-auto overflow-hidden bg-white dark:bg-gray-900 shadow-xl ring-1 ring-gray-900/5 dark:ring-gray-800 m-2 sm:m-4 rounded-xl md:min-w-[600px]"
    >
      <CardHeader
        className={cx("relative p-4 sm:p-6 rounded-t-xl", headerClassName)}
      >
        {watermark && (
          <div className="absolute right-0 top-0 h-16 sm:h-24 w-16 sm:w-24 opacity-20">
            {watermark}
          </div>
        )}

        <div className="absolute right-4 sm:right-6 top-4 sm:top-6">
          <ThemeSwitch />
        </div>

        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <div className="flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div
                className={cx(
                  "absolute inset-0 animate-pulse rounded-full blur-xl",
                  getIconGlowClass(),
                )}
              />
              <div
                className={cx(
                  "relative rounded-full p-2 sm:p-2.5 flex items-center justify-center h-full",
                  finalIconClassName,
                )}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  {icon}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col min-w-0">
            {subtitle &&
              (typeof subtitle === "string" ? (
                <span className="text-sm font-medium text-default-600 dark:text-default-400 truncate">
                  {subtitle}
                </span>
              ) : (
                subtitle
              ))}
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
              {title}
            </h3>
          </div>
        </div>
      </CardHeader>

      <CardBody
        suppressHydrationWarning
        className="space-y-3 sm:space-y-4 md:space-y-6 p-4 sm:p-5 md:p-6"
      >
        <p
          suppressHydrationWarning
          className="text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          {message}
        </p>
        {children}
      </CardBody>

      {footer && (
        <CardFooter
          suppressHydrationWarning
          className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800 px-6 py-4"
        >
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};
