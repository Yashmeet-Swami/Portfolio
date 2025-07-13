import React from "react";

const Footer = () => {
    return (
        <div className="w-full py-20 border-b border-black">
            {/* Centered container */}
            <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {/* Quick Links - Centered */}
                <div className="w-full">
                    <h3 className="text-xl uppercase text-[var(--color-designColor)] tracking-wider text-center">
                        Quick Link
                    </h3>
                    <ul className="flex flex-col gap-4 font-[var(--font-title)] py-6 items-center">
                        {["About", "Portfolio", "Services", "Blog", "Contact"].map((item) => (
                            <li key={item} className="w-fit">
                                <span className="relative group inline-block overflow-hidden text-lg cursor-pointer transition duration-300 hover:text-[var(--color-designColor)]">
                                    {item}
                                    <span className="block h-px w-full bg-[var(--color-designColor)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources - Centered */}
                <div className="w-full">
                    <h3 className="text-xl uppercase text-[var(--color-designColor)] tracking-wider text-center">
                        Resources
                    </h3>
                    <ul className="flex flex-col gap-4 font-[var(--font-title)] py-6 items-center">
                        {["Authentication", "System Status", "Terms of Service", "Pricing", "OverRight"].map((item) => (
                            <li key={item} className="w-fit">
                                <span className="relative group inline-block overflow-hidden text-lg cursor-pointer transition duration-300 hover:text-[var(--color-designColor)]">
                                    {item}
                                    <span className="block h-px w-full bg-[var(--color-designColor)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Developers - Centered */}
                <div className="w-full">
                    <h3 className="text-xl uppercase text-[var(--color-designColor)] tracking-wider text-center">
                        Developers
                    </h3>
                    <ul className="flex flex-col gap-4 font-[var(--font-title)] py-6 items-center">
                        {["Documentation", "Authentication", "API Reference", "Support", "Open Source"].map((item) => (
                            <li key={item} className="w-fit">
                                <span className="relative group inline-block overflow-hidden text-lg cursor-pointer transition duration-300 hover:text-[var(--color-designColor)]">
                                    {item}
                                    <span className="block h-px w-full bg-[var(--color-designColor)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;