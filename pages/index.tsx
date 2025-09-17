import { Hero } from "@/components/home/Hero";
import HomeFooter from "@/components/home/HomeFooter";
import { CardSection } from "@/components/home/ui/card-section";
import { Providers } from "@/components/providers";
import { sections } from "@/config/home";
import { Divider } from "@heroui/divider";

export default function Home() {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50/50 via-blue-50/10 to-blue-50/30 dark:from-gray-900 dark:to-gray-950 dark:via-blue-950/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <Hero className="animate-fade-down animate-once animate-duration-1000 animate-ease-in-out" />
          <Divider
            className="my-8 bg-gray-300/80 dark:bg-gray-700/80 shadow-sm"
            orientation="horizontal"
          />
          <section className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="animate-fade-up"
                  style={{
                    animationDelay: `${sections.indexOf(section) * 0.15}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  <CardSection {...section} />
                </div>
              ))}
            </div>
          </section>
        </div>
        <HomeFooter />
      </div>
    </Providers>
  );
}
