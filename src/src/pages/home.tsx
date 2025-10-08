import { ThemeToggle } from "../components/theme_toggle"
import { Navbar } from "../components/navbrar"
import { HeroSection } from "../components/hero_section"
import { AboutSection } from "@/components/about_section"


export const Home = () => {
    return (
        <div className={" min-h-screen bg-background text-foreground transition-colors duration-300"}>
            <ThemeToggle />

            {/* Background Effects */}

            <Navbar />
            {/* Nav bar */}

            <main>
                <HeroSection />

                <AboutSection />
            </main>



            {/* Main content */}

            {/* Footer */}
        </div>
    )
}