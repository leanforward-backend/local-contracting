export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">

        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opactity-0 animate-fade-in-delay-1"> Toby</span>
                    <span className="text-gradient ml-2 opactity-0 animate-fade-in-delay-2"> Crust</span>

                </h1>

                <p className="text-lg md:text-xl text-muted-forground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I've dipped my fingers into just about everytech related field and I'm here to bring my expertice to you for cash :)
                </p>

                <div>
                    <a href="#projects" className="button bg-white border border-rounded-xl border-red-500">
                        view previous projects
                    </a>
                </div>

            </div>

        </div>
    </section>
}