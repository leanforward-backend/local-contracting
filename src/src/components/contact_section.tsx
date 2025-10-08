import { CircleUserRound, Mail, MapPin, Phone } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Contact <span className="text-primary"> Me</span>
                </h2>

                <p className="text-center text-muted-forground mb-12   max-w-2xl mx-auto">
                    If you want to hire me for anything, let me know
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:tobycrust@gmail.com"
                                        className="text-muted-forground hover:text-primary transition-colors"
                                    >
                                        tobycrust@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:0425843487"
                                        className="text-muted-forground hover:text-primary transition-colors"
                                    >
                                        0425843487
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a
                                        className="text-muted-forground hover:text-primary transition-colors"
                                    >
                                        Vaulcluse
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <CircleUserRound className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Linkedin</h4>
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/toby-crust-a6a2a2245/"
                                        className="text-muted-forground hover:text-primary transition-colors"
                                    >
                                        Toby Crust
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Hire me to work for you</h3>
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                > Your Name*</label>
                                <Input
                                    type="text"
                                    id="name"
                                    required={true}
                                    className="w-full px-4 py-3 rounded-md border border-inout bg-background"
                                    placeholder="Your Name Here..."
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                > Your Email*</label>
                                <Input
                                    type="email"
                                    id="email"
                                    required={true}
                                    className="w-full px-4 py-3 rounded-md border border-inout bg-background"
                                    placeholder="youremail@gmail.com..."
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                > What would you want to hire me for?*</label>
                                <Textarea
                                    id="message"
                                    required={true}
                                    className="w-full px-4 py-3 rounded-md border border-inout bg-background"
                                    placeholder="Description of what work I will be doing for you..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                > Any questions you have?</label>
                                <Textarea
                                    id="questions"
                                    required={false}
                                    className="w-full px-4 py-3 rounded-md border border-inout bg-background"
                                    placeholder="Any questions you have? I will get back to you as soon as possible..."
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}