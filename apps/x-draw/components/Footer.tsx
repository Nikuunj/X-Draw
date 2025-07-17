import { Github, Twitter, Heart, EarthIcon } from "lucide-react";

export const Footer = () => {
     return (
          <div className=" space-y-7 border-t py-7 border-cyan-950 relative -bottom-20">
                    {/* Brand */}
                    <div className="flex flex-col space-y-5 md:flex-row justify-center md:justify-between items-center w-full  h-full px-2 sm:px-10 lg:px-24 text-center md:text-start ">
                         <div className=" space-y-4 flex justify-center flex-col items-center md:items-start max-w-md text-balance">

                              <div className="flex items-center space-x-2">
                                   <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                                        <div className="w-4 h-4 border-2 border-white rounded-sm" />
                                   </div>
                                   <span className="text-xl font-bold text-foreground">XDraw</span>
                              </div>
                              <p className="text-cyan-300 text-sm leading-relaxed">
                                   The virtual collaborative whiteboard for sketching hand-drawn like diagrams.
                              </p>
                         </div>

                         <div className="flex gap-5">
                              <FooterLink href="https://github.com/Nikuunj">
                                   <Github />
                              </FooterLink>
                              <FooterLink href="https://x.com/IsNikunj">
                                   <Twitter />
                              </FooterLink>
                              <FooterLink href="https://nikunj-portfolio.vercel.app/">
                                   <EarthIcon />
                              </FooterLink>
                         </div>
                    </div>
               

                    <div className="flex flex-col md:flex-row items-center  border-t justify-between  border-cyan-950 text-cyan-300 pt-7 px-2 sm:px-10 lg:px-24 text-center md:text-start">
                         <p className="text-sm">
                         © 2024 Excalidraw. All rights reserved.
                         </p>
                         <p className=" text-sm flex items-center mt-4 md:mt-0">
                         Made with <Heart className="w-4 h-4 mx-1 text-primary" /> by the community
                         </p>
                    </div>
               
          </div>
     );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
     <a 
          href={href} 
          target="_blank"
          className="text-cyan-300 transition-colors text-sm block hover:text-cyan-700"
     >
          {children}
     </a>
);