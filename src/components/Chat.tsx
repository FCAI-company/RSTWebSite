
"use client";

import { Bot, LoaderCircle, Rocket, Send  } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import axios from "axios";
import Typewriter from "./Typewriter";
import { getDirection } from "./getDir";
 
 
export function Chat() {

      const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [Load, setLoad] = useState<boolean>(false);

  const [Context, setContext] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
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
useEffect(() => {
  axios
    .get("/api/extract-text").then((response) => {
if(response.status===200) {
         setContext(response.data.text); 
} 
    })
    .catch((error) => {
      console.error("Error fetching extracted text:", error);
    });
}, []);


  const sendMessage = async () => {

    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input.trim() };
    setMessages((prev: any) => [...prev, userMsg]);
    setInput("");

 setLoad(true);

  axios
    .post(
      "https://router.huggingface.co/v1/chat/completions",
      {
        messages: [
          {
            role: "user",
            content: `You must answer the following question using ONLY the information found in the provided context. and Simplify the answer with same language of question to egyptian students. If the answer is not explicitly stated in the context, respond exactly with:  Answer not found in context. Context: '${Context}' Question: '${input}'`,
          },
        ],
        model: "openai/gpt-oss-120b:fireworks-ai",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    )
    .then((response: any) => {
       if (response.status === 200) {
        const botMessage = response.data.choices[0].message.content;

        setMessages((prev) => [...prev, { sender: "bot", text: botMessage }]);
      }
      setLoad(false);
    })
    .catch((error: any) => {
       setLoad(false);
    });


  };

 function Handleclose(){
    setIsOpen(prev=>!prev);
    setMessages([]);
    setInput("");
    setLoad(false);
  }

    return (
      <>
        <div className="fixed bottom-4 right-4 z-50">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => Handleclose()}
            className="fixed z-80 bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition"
          >
            <Bot className="h-8 w-8" />
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
                  className="bg-white absolute  bottom-25 right-10 w-100 max-w-[300px]  h-[70vh] rounded-2xl shadow-lg flex flex-col overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-[#0047ab] text-white p-4 flex justify-between  items-center">
                    <Bot className="h-8 w-8" />
                    <h2 className="text-lg font-semibold">
                      {" "}
                      RST Smart Assistant
                    </h2>
                    <button onClick={() => Handleclose()}>✕</button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4  bg-white">
                    {messages.length === 0 ? (
                      <>
                        <div className="bg-white flex flex-col items-center justify-center h-full w-full">
                          <Image
                            src={`/AI.gif`}
                            width={250}
                            height={100}
                            alt="Alryada university"
                          />
                          <h4 className="text-gray-500 font-bold text-2xl">
                            Ask me anything
                          </h4>
                          <p className="text-gray-500 text-sm">
                            I’m your RST Smart Assistant!
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {messages.map((msg, idx) => (
                          <div
                            dir={getDirection(msg.text)}
                            style={{ whiteSpace: "pre-line" }}
                            key={idx}
                            className={`  p-2  ${
                              msg.sender === "user"
                                ? "w-fit rounded-full bg-[#0047ab] px-3 text-white self-end ml-auto"
                                : " bg-[#0000000e] rounded-xl w-[100%]   "
                            }`}
                          >
                            {msg.sender === "user" ? (
                              <div
                                className={`   ${
                                  msg.sender === "user"
                                    ? ""
                                    : " bg-[#0000000e] rounded-xl w-[100%]   "
                                }`}
                                style={{ fontFamily: "var(--font-arabic)" }}
                                dangerouslySetInnerHTML={{ __html: msg.text }}
                              />
                            ) : (
                              <Typewriter text={msg.text} speed={30} />
                            )}
                          </div>
                        ))}
                      </>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="p-3 bg-white border-t flex items-center gap-2">
                    <input
                      style={{ fontFamily: "var(--font-arabic)" }}
                      value={input}
                      disabled={Load}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                      placeholder="Type your inquiry..."
                      className="flex-1 border rounded-lg px-3 h-full  focus:outline-none focus:ring-2 focus:ring-[#0047ab75]"
                    />
                    <button
                      disabled={!input.trim()}
                      onClick={sendMessage}
                      className=" text-white    p-2     disabled:opacity-50 disabled:cursor-not-allowed  "
                    >
                      {Load ? (
                        <LoaderCircle
                          color="#0047ab"
                          className="animate-spin"
                        />
                      ) : (
                        <Send color="#0047ab" />
                      )}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
    );
}
