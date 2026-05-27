import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import { Container } from "@/shared/ui/Container";

export default function InstitucionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative bg-ink pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pt-44">
        <Container className="max-w-3xl">
          <article className="space-y-5 text-[14px] leading-relaxed text-cream/85 sm:space-y-6 sm:text-[15px] [&_h1]:font-serif [&_h1]:text-[30px] [&_h1]:leading-tight [&_h1]:text-cream sm:[&_h1]:text-[36px] md:[&_h1]:text-[40px] [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-[20px] [&_h2]:text-cream sm:[&_h2]:mt-10 sm:[&_h2]:text-[22px] [&_h3]:mt-6 [&_h3]:font-serif [&_h3]:text-[17px] [&_h3]:text-cream sm:[&_h3]:text-[18px] [&_p]:text-mute [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-mute [&_a]:text-gold [&_a:hover]:text-gold-2 [&_strong]:text-cream">
            {children}
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
