import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MarkdownContent } from "@/components/markdown-content";
import termsOfServiceContent from "@/content/terms-of-service.md";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <MarkdownContent content={termsOfServiceContent} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
