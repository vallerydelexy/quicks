import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { datetime, time, prettyDate } from "@/utils/date";
import axios from "axios";
import chatData from "@/utils/chatData.json";
import {
  CloseIcon,
  GroupIcon,
  HorizontalDotMenu,
  LeftArrowIcon,
  LetterIcon,
  UnreadIndicator,
  HorizontalLineOnChatDate,
  SmallLoadingCircle,
} from "./icons";
import usePopupStore from "@/store/popUpWindow";
import useLoadingStore from "@/store/loadingSpinner";
import Flyout from "./flyout";
import { AnimatePresence, motion } from "framer-motion";
import useChatStore from "@/store/chatData";
import { useOnScreen } from "@/utils/hooks";

export default function ChatWindow() {
  const [newMessageElementRef, setNewMessageElementRef] = useState(null);
  const [curElRef, setCurElRef] = useState();
  const [newMessage, setNewMessage] = useState([]);
  const isOpen = usePopupStore((state) => state.isOpen);
  const closePopup = usePopupStore((state) => state.closePopup);
  const flyoutRef = useRef(null);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const isNewMessageElementVisible = useOnScreen(() => newMessageElementRef);
  const [messageFlyoutState, setMessageFlyoutState] = useState({});

  const toggleFlyout = (messageId) => {
    setMessageFlyoutState((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((id) => {
        if (id !== messageId && newState[id]) {
          newState[id] = false;
        }
      });
      newState[messageId] = !newState[messageId] || false;
      return newState;
    });
  };
  const isLoading = useLoadingStore((state) => state.loading);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const chats = useChatStore((state) => state.data);
  const setChats = useChatStore((state) => state.setData);
  useEffect(() => {
    setTimeout(() => {
      setChats(chatData);
      setLoading(false);
    }, 247);
  }, []);
  useLayoutEffect(() => {
    if (isNewMessageElementVisible) {
    }
  }, [isNewMessageElementVisible]);
  const currentThread = usePopupStore((state) => state.thread);
  const setThread = usePopupStore((state) => state.setThread);
  function handleThreadChange(newThread) {
    setThread(newThread);
  }

  function compose(thread, message) {
    if (message) {
      const threadIndex = chats.findIndex((chat) => chat.thread === thread);
      if (threadIndex !== -1) {
        const newMessage = {
          id: String(
            parseInt(
              chats[threadIndex].data[chats[threadIndex].data.length - 1].id
            ) + 1
          ),
          text: message,
          sender: "You",
          senderId: "1",
          receiver: thread,
          receiverId: chats[threadIndex].id,
          timestamp: new Date().toISOString(),
          read: false,
        };
        const newData = [...chats[threadIndex].data, newMessage];
        const updatedThread = { ...chats[threadIndex], data: newData };
        const newChats = [...chats];
        newChats[threadIndex] = updatedThread;
        setChats(newChats);
      }
      setNewMessage("");
    }
  }
  const groupMessagesByDate = (messages) => {
    const groupedMessages = {};

    messages.forEach((msg) => {
      const date = msg.read
        ? new Date(msg.timestamp).toLocaleDateString()
        : "unread";

      if (!groupedMessages[date]) {
        groupedMessages[date] = [];
      }

      groupedMessages[date].push(msg);
    });

    return groupedMessages;
  };

  const renderGroupedMessages = (groupedMessages) => {
    const groupedMessageElements = [];
    for (const [date, messages] of Object.entries(groupedMessages)) {
      groupedMessageElements.push(
        <div key={date}>
          <div className="flex items-center gap-3 pt-[22px]">
            <HorizontalLineOnChatDate bool={date} expected={"unread"} />
            <p
              ref={(ref) => setNewMessageElementRef(ref)}
              className={`text-[16px] ${
                date === "unread" ? "text-red1" : "text-gray3"
              } font-bold text-center`}
            >
              {date === "unread" ? "New Message" : prettyDate(date)}
            </p>
            <HorizontalLineOnChatDate bool={date} expected={"unread"} />
          </div>
          {messages.map((msg) => (
            <div key={msg.id}>
              <div
                className={`text-[14px] font-bold ${
                  msg.senderId === "1"
                    ? "text-right text-purple2"
                    : "text-left text-yellow3"
                }`}
              >
                {msg.sender}
              </div>
              <div className="flex gap-2">
                <div
                  className={`p-[12px] w-[518px] rounded-[5px] text-[14px] text-gray2 ${
                    msg.senderId === "1"
                      ? "bg-purple3 text-right"
                      : "bg-yellow2 text-left"
                  }`}
                >
                  <p className={`mb-[10px]`}>{msg.text}</p>
                  <span className={`text-[12px]`}>{time(msg.timestamp)}</span>
                </div>
                <div
                  className={`relative self-baseline ${
                    msg.senderId === "1"
                      ? "order-first mr-0 ml-auto"
                      : "order-last"
                  }`}
                >
                  <Flyout
                    actions={["Edit", "Reply"]}
                    isOpen={messageFlyoutState[msg.id]}
                    onClose={() => toggleFlyout(msg.id)}
                  />
                  <button onClick={() => toggleFlyout(msg.id)}>
                    <HorizontalDotMenu
                      className={`fill-gray2 w-[16px] h-[16px]`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return groupedMessageElements;
  };
  return (
    <div>
      <AnimatePresence>
        <div className="max-h-[737px]">
          {currentThread === "default" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="px-[32px] py-[22px] w-[734px] h-[737px]"
            >
              <div className="w-[666px] h-[32px] rounded mx-auto flex items-center">
                <label className="absolute pl-4 text-gray2">Search</label>

                <input
                  type="text"
                  className="w-full focus:outline-none h-[32px] border-2 border-gray2 mx-2 px-[64px] my-[22px] active:ring-0 focus:ring-0"
                >
                </input>
              </div>

              <ul className="flex flex-col">
                {chats?.map((chat) => (
                  <li
                    onClick={() => handleThreadChange(chat.thread)}
                    className="hover:cursor-pointer border-b-2 border-gray-1 pb-4 my-[22px] flex gap-2 flex-row cursor-pointer"
                    key={chat.id}
                  >
                    <div className="min-w-[64px]">
                      {chat.type === "private" ? (
                        <LetterIcon
                          name={chat.thread}
                          className="w-[34px] h-[34px] mx-auto bg-blue1 text-white"
                        />
                      ) : (
                        <GroupIcon />
                      )}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-row gap-3">
                        <span className="text-blue1 font-bold text-[16px]">
                          {chat.thread}
                        </span>
                        <span className="whitespace-nowrap text-[14px] align-top">
                          {new Date(
                            chat.data[chat.data.length - 1].timestamp
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex flex-col w-full">
                        {chat.type === "group" && (
                          <span className="font-bold text-[14px]">
                            {chat.data[chat.data.length - 1].sender}:
                          </span>
                        )}
                        <div className="flex justify-between">
                          {chat.data[chat.data.length - 1].text}
                          {chat.data[chat.data.length - 1].read ? null : (
                            <UnreadIndicator />
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {currentThread !== "default" && (
            <div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className=""
            >
              <div className="border-b-2 border-gray1">
                <div className="w-[666px] h-[73px] mx-[28px] flex items-center gap-2">
                  <button onClick={() => handleThreadChange("default")}>
                    <LeftArrowIcon className={"fill-gray2"} />
                  </button>
                  <div className="flex-grow ">
                    <div className="font-bold text-blue1 text-[16px]">
                      {currentThread}
                    </div>
                    <span className="text-[14px]">3 Participants</span>
                  </div>
                  <button onClick={() => closePopup()}>
                    <CloseIcon className={"fill-gray2"} />
                  </button>
                </div>
              </div>

              <div className="h-[578px] w-[734px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray4 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-track-transparent">
                {chats.map((chat) => {
                  if (chat.thread === currentThread) {
                    return (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`mx-[28px] flex flex-col my-[12px]`}
                        key={chat.id}
                      >
                        {renderGroupedMessages(groupMessagesByDate(chat.data))}
                      </motion.div>
                    );
                  }
                })}
              </div>

              <div className="flex flex-row gap-2 px-[32px] py-[22px]">
                <input
                  className="w-full rounded-[5px] outline outline-1 outline-gray1 p-2"
                  type="text"
                  placeholder="Type a new message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  onClick={() => {
                    compose(currentThread, newMessage);
                  }}
                  className={`${
                    newMessage ? "bg-blue1" : "bg-gray1 cursor-not-allowed"
                  } text-white p-2 rounded`}
                >
                  Send
                </button>
              </div>
            </div>
          )}

          {currentThread !== "default" && (
            <div className="absolute bottom-[88px] left-1/2 transform -translate-x-1/2">
              {!isNewMessageElementVisible && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.1 }}
                  className=" text-[12px] text-blue1 bg-blue2 font-bold whitespace-nowrap p-2 rounded-[5px]"
                >
                  New Message
                </motion.span>
              )}
              {currentThread === "FastVisa Support" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.1 }}
                  className=" text-[12px] text-blue1 bg-blue2 font-bold whitespace-nowrap py-[12px] pr-[308px] pl-[12px] rounded-[5px] flex flex-row gap-2"
                >
                  <SmallLoadingCircle
                    className={"animate-spin h-5 w-5 text-blue1"}
                  />{" "}
                  <span className="flex-grow">
                    Please wait while we connect you with one of our team ...
                  </span>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}
