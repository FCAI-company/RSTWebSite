
"use client";

import { Bot, LoaderCircle, Mail, MapPin, Phone, PhoneCall, Rocket, Send  } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import axios from "axios";
import Typewriter from "./Typewriter";
import { getDirection } from "./getDir";
import { campus, socialMediaLinks } from "@/app/info/info";
import { CardContent } from "./ui/card";
import { Button } from "./ui/button";
 
 
export function ContactUs() {

      const [isOpen, setIsOpen] = useState(false);
  

 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
 


 

//  const sendMessage = async () => {
//        if (!input.trim()) return;
//        const userMsg = { sender: "user", text: input.trim() };
//        setMessages((prev: any) => [...prev, userMsg]);
//        setInput("");

//     setLoad(true);

   
//    axios
//      .post("/api/getanswer", { Context, input })
//      .then((response: any) => {
//        console.log(response);
//        setLoad(false);
//        if (response.status === 200) {
//          const botMessage = response.data.choices[0].message.content;

//          setMessages((prev) => [...prev, { sender: "bot", text: botMessage }]);
//        }
//        setLoad(false);
//      })
//      .catch((error: any) => {
//        setLoad(false);
//      });
//   ;
  
//  }
 function Handleclose(){
    setIsOpen(prev=>!prev);
 
  }

    return (
      <>
        <div className="fixed bottom-4 left-4 z-50">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => Handleclose()}
            className="fixed z-80 bottom-6 left-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition"
          >
            <PhoneCall className="h-8 w-8" />
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end justify-end z-50"
                onClick={() => Handleclose()}
              >
                <motion.div
                  initial={{ y: 100, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 100, opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white absolute p-5  bottom-25 left-5  sm:left-10  max-w-[90%]  sm:max-w-[350px]   rounded-2xl shadow-lg flex flex-col overflow-hidden"
                >
                 

                 
           <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl" style={{ color: '#2563eb' }}>
                        Contact Information
                      </h3>
                      <button onClick={() => Handleclose()} >
                        <p className="text-gray-500 font-bold hover:text-red-700 hover:scale-125 transition-all duration-200">
                          ✕
                        </p>
                        
                      </button>
                    </div>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#2563eb' }}>
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                    <a
                                         style={{ color: '#2563eb' }}
                                         href={`tel:${campus.Hotline}`}
                                         className="text-lg  hover:underline mx-0 px-0"
                                       >
                                         {campus.Hotline}
                                       </a>
                     {campus.Phone.map((phone: string, index: number) => (
                                     <div key={index} className="flex items-center">
                                    
                                       <a
                                         style={{ color: '#2563eb' }}
                                         href={`tel:${phone}`}
                                         className="text-lg  hover:underline mx-0 px-0"
                                       >
                                         {phone}
                                       </a>
                                     </div>
                                   ))}
                   
                     
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#2563eb' }}>
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email Address</p>
                    
                          <a className="text-lg" style={{ color: '#2563eb' }} href={`mailto:${campus.email}`}>{campus.email}</a>
                    
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#2563eb' }}>
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">University Location</p>
                      <a href={campus.addressLink} target='_blank' className="text-lg" style={{ color: '#2563eb' }}>
                        {campus.address}
                      </a>
                    </div>
                  </div>
                </div>

              
              

               <p className="text-sm text-gray-500 mt-4  mb-1">Follow Us</p>

                <div className="grid grid-cols-5 gap-4">
                
                  {socialMediaLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className=" flex flex-col items-center justify-center space-y-2 hover:shadow-md transition-all duration-200"
                      onClick={() => window.open(social.url, '_blank')}
                      style={{
                        borderColor: social.color + '20',
                        backgroundColor: 'white',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = social.color + '10';
                        e.currentTarget.style.borderColor = social.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.borderColor = social.color + '20';
                      }}
                    >
                      <social.icon className="h-5 w-5" style={{ color: social.color }} />
                      {/* <span className="text-xs" style={{ color: social.color }}>
                        {social.name}
                      </span> */}
                    </Button>
                  ))}
                </div>
          
         
               
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    );
}
