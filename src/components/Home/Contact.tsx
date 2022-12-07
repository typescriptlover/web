import axios from 'axios';
import { useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import Animations from '../ui/Animations';
import Loading from '../ui/Loading';
import Modal from '../ui/Modal';

const Contact = () => {
   const [showModal, setShowModal] = useState<boolean>(false);

   const [from, setFrom] = useState<string>('');
   const [subject, setSubject] = useState<string>('');
   const [body, setBody] = useState<string>('');

   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<any | false>(false);
   const sendDisabled = useMemo(
      () => !from.length || !subject.length || !body.length || error,
      [from, subject, body, error]
   );

   async function Send() {
      setError(false);
      setLoading(true);

      await axios
         .post('/api/contact', {
            from,
            subject,
            body,
         })
         .then((res) => res.data)
         .then((data) => {
            if (data.success) {
               setFrom('');
               setSubject('');
               setBody('');
               setLoading(false);
               setShowModal(false);
               toast.success('Email sent.', {
                  duration: 3000,
                  position: 'top-center',
               });
            } else {
               setLoading(false);
               setError(data.message[0]);
            }
         })
         .catch((err) => {
            setLoading(false);
            setError({
               message: 'Something went wrong',
            });
            console.log('Contact failed:', err);
         });
   }

   return (
      <div key="contact" className="flex items-center justify-between mt-8">
         <div className="inline-flex items-center gap-x-4">
            <Animations.FadeY
               y={25}
               duration={0.4}
               delay={0.8}
               animationKey="contact"
               once={true}
            >
               <button
                  onClick={() => setShowModal(true)}
                  className="py-2.5 flex justify-center items-center group tracking-tight ring-8 shadow-2xl ring-base-800 ring-opacity-20 text-[0.925rem] px-4 font-semibold rounded-xl bg-base-900 border-2 transition duration-200 ease-linear hover:border-transparent focus:border-transparent hover:ring-2 focus:ring-2 hover:ring-base-800 focus:ring-base-800 hover:ring-opacity-100 focus:ring-opacity-100 border-base-800"
               >
                  Contact
                  <span className="ml-3 -mr-1 transition duration-200 ease-linear opacity-50 will-change-transform group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-100 -rotate-12">
                     <i className="fa-duotone fa-envelope-open-text"></i>
                  </span>
               </button>
            </Animations.FadeY>
         </div>
         <div className="inline-flex items-center gap-x-4">
            <Animations.Scale
               scale={0.5}
               duration={0.4}
               delay={1}
               animationKey="github"
               once={true}
            >
               <a
                  href="https://www.github.com/typescriptlover"
                  target="_blank"
                  className="text-xl transition duration-200 ease-linear text-zinc-400 hover:text-white"
               >
                  <i className="fa-brands fa-github"></i>
               </a>
            </Animations.Scale>
            <Animations.Scale
               scale={0.5}
               duration={0.4}
               delay={1.1}
               animationKey="linkedIn"
               once={true}
            >
               <a
                  href="https://www.linkedin.com/in/vignesh-wadhwani-a42845220"
                  target="_blank"
                  className="text-xl transition duration-200 ease-linear text-zinc-400 hover:text-white"
               >
                  <i className="fa-brands fa-linkedin-in"></i>
               </a>
            </Animations.Scale>
         </div>
         <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            className="max-w-md p-6 rounded-3xl"
         >
            <h1 className="text-2xl font-semibold tracking-tight">
               Contact Me
            </h1>
            <div className="flex flex-col mt-8 gap-y-4">
               <div>
                  <label
                     htmlFor="email"
                     className="text-sm font-medium text-zinc-300"
                  >
                     <span className="mr-2 text-xs text-red-400">
                        <i className="fa-solid fa-asterisk"></i>
                     </span>
                     Your Email
                  </label>
                  <input
                     id="email"
                     name="email"
                     type="email"
                     placeholder="john@doe.com"
                     value={from}
                     onInput={(e: any) => {
                        if (error && (error.path == 'from' || !error.path))
                           setError(false);
                        setFrom(e.target.value);
                     }}
                     className="w-full px-3 py-2 mt-1 font-medium transition duration-200 ease-linear rounded-lg placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-base-600 bg-base-800"
                  />
               </div>
               <div>
                  <label
                     htmlFor="subject"
                     className="text-sm font-medium text-zinc-300"
                  >
                     <span className="mr-2 text-xs text-red-400">
                        <i className="fa-solid fa-asterisk"></i>
                     </span>
                     Subject
                  </label>
                  <input
                     id="subject"
                     name="subject"
                     type="text"
                     placeholder="..."
                     value={subject}
                     onInput={(e: any) => {
                        if (error && (error.path == 'subject' || !error.path))
                           setError(false);
                        setSubject(e.target.value);
                     }}
                     className="w-full px-3 py-2 mt-1 font-medium transition duration-200 ease-linear rounded-lg placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-base-600 bg-base-800"
                  />
               </div>
               <div>
                  <label
                     htmlFor="body"
                     className="text-sm font-medium text-zinc-300"
                  >
                     <span className="mr-2 text-xs text-red-400">
                        <i className="fa-solid fa-asterisk"></i>
                     </span>
                     Body
                  </label>
                  <textarea
                     id="body"
                     name="body"
                     placeholder="I have something to ask you..."
                     value={body}
                     onInput={(e: any) => {
                        if (error && (error.path == 'body' || !error.path))
                           setError(false);
                        setBody(e.target.value);
                     }}
                     className="w-full h-24 px-3 py-2 mt-1 font-medium transition duration-200 ease-linear rounded-lg resize-none placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-base-600 bg-base-800"
                  />
               </div>
               {error && (
                  <div className="-mt-2 text-sm font-semibold text-red-400">
                     {error.message}
                  </div>
               )}
               <button
                  onClick={Send}
                  disabled={sendDisabled}
                  className="py-3 disabled:opacity-75 disabled:cursor-not-allowed transition duration-200 ease-linear rounded-lg text-[0.925rem] w-full bg-gradient-to-r from-indigo-700 via-purple-700 opacity-95 to-blue-700 font-medium"
               >
                  {loading ? (
                     <Loading className="w-[1.35rem] h-[1.35rem] mx-auto" />
                  ) : (
                     'Send'
                  )}
               </button>
            </div>
         </Modal>
      </div>
   );
};

export default Contact;
