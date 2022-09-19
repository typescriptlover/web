import Animations from '../ui/Animations';

const ContactSVG = () => {
   return (
      <svg
         width="10"
         height="10"
         viewBox="0 0 10 10"
         aria-hidden="true"
         className="relative ml-2 -mr-1 stroke-2 stroke-white fill-transparent"
      >
         <g fillRule="evenodd">
            <path
               className="transition duration-200 ease-in-out opacity-0 group-hover:opacity-100"
               d="M0 5h8"
            ></path>
            <path
               className="group-hover:translate-x-[4px] transition duration-200 ease-in-out"
               d="M1 1l4 4-4 4"
            ></path>
         </g>
      </svg>
   );
};

const Contact = () => {
   return (
      <div key="contact" className="flex items-center justify-between mt-8">
         <div className="inline-flex items-center gap-x-4">
            <Animations.FadeY y={25} duration={0.4} delay={0.8}>
               <button className="py-2.5 flex items-center group tracking-tight ring-8 shadow-2xl ring-base-800 ring-opacity-20 text-sm px-4 font-semibold rounded-xl bg-base-900 border-2 transition duration-200 ease-linear hover:border-transparent hover:ring-2 hover:ring-base-800 hover:ring-opacity-100 border-base-800">
                  Contact me
                  <ContactSVG />
               </button>
            </Animations.FadeY>
            <Animations.FadeX x={-25} duration={0.4} delay={0.9}>
               <span className="text-sm font-medium text-zinc-500 font-karla">
                  or scroll down
               </span>
            </Animations.FadeX>
         </div>
         <div className="inline-flex items-center gap-x-4">
            <Animations.Scale scale={0.5} duration={0.4} delay={1}>
               <a className="text-lg transition duration-200 ease-linear text-zinc-400 hover:text-white">
                  <i className="fa-brands fa-github"></i>
               </a>
            </Animations.Scale>
            <Animations.Scale scale={0.5} duration={0.4} delay={1.1}>
               <a className="text-lg transition duration-200 ease-linear text-zinc-400 hover:text-white">
                  <i className="fa-brands fa-linkedin-in"></i>
               </a>
            </Animations.Scale>
            <Animations.Scale scale={0.5} duration={0.4} delay={1.2}>
               <a className="text-lg transition duration-200 ease-linear text-zinc-400 hover:text-white">
                  <i className="fa-brands fa-discord"></i>
               </a>
            </Animations.Scale>
         </div>
      </div>
   );
};

export default Contact;
