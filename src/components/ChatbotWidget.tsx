'use client'

import { useState } from "react";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);

  return (
    <>
      {/* Floating Chatbot Icon */}
      <button
        aria-label="Open chatbot"
        onClick={() => setOpen(true)}
        className="fixed z-50 bottom-6 right-6 bg-[#0e7378] hover:bg-[#18816b] text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
      >
        <Bot className="w-7 h-7" />
      </button>

      {/* Chatbot Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end pointer-events-none">
          {/* No overlay, chat window is pointer-events-auto */}
          <div className="relative m-6 w-full max-w-sm bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 pointer-events-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold text-[#0e7378]">Chatbot</span>
              <button
                aria-label="Close chatbot"
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-[#0e7378]"
              >
                ×
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700">
              {messages.length === 0 ? (
                <div className="text-center text-gray-400 mt-8">Chatbot conversation coming soon...</div>
              ) : (
                <div className="flex flex-col gap-3">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`max-w-[80%] px-3 py-2 rounded-lg ${msg.from === 'user' ? 'bg-[#e1f1f2] self-end text-right' : 'bg-[#0e7378] text-white self-start'}`}>{msg.text}</div>
                  ))}
                </div>
              )}
            </div>
            <form
              className="flex items-center gap-2 p-4 border-t"
              onSubmit={e => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem('chat') as HTMLInputElement;
                if (!input.value.trim()) return;
                setMessages(m => [...m, { from: 'user', text: input.value }]);
                setTimeout(() => {
                  setMessages(m => [...m, { from: 'bot', text: "This is a test response." }]);
                }, 600);
                input.value = '';
              }}
            >
              <input
                name="chat"
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0e7378]"
                autoComplete="off"
              />
              <Button type="submit" size="sm" className="bg-[#0e7378] text-white">Send</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
