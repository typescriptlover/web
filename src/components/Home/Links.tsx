import Tooltip from '@/ui/Tooltip';

const Links = () => {
   return (
      <div className="flex flex-wrap items-center mt-5 sm:mt-12 gap-x-5">
         <Tooltip text="GitHub" placement="bottom">
            <a
               className="inline-block text-xl transition duration-150 ease-linear will-change hover:rotate-6 hover:scale-105 hover:text-white text-trueGray-400"
               target="_blank"
               href="https://github.com"
            >
               <i className="fa-brands fa-github"></i>
            </a>
         </Tooltip>
         <Tooltip text="Linked In" placement="bottom">
            <a
               className="inline-block text-xl transition duration-150 ease-linear will-change hover:rotate-6 hover:scale-105 hover:text-white text-trueGray-400"
               target="_blank"
               href="https://linkedin.com"
            >
               <i className="fa-brands fa-linkedin-in"></i>
            </a>
         </Tooltip>
         <Tooltip text="Discord" placement="bottom">
            <a
               className="inline-block text-xl transition duration-150 ease-linear will-change hover:rotate-6 hover:scale-105 hover:text-white text-trueGray-400"
               target="_blank"
               href="https://linkedin.com"
            >
               <i className="fa-brands fa-discord"></i>
            </a>
         </Tooltip>
      </div>
   );
};

export default Links;
