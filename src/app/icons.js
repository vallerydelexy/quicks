export const SmallLoadingCircle = ({className}) => {
  return (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>)
}

export const HorizontalLineOnChatDate = ({className, bool, expected}) => {
  return (<div
    className={`flex-grow h-[1px] ${
      bool === expected ? "bg-red1" : "bg-gray3"
    } ${className}`}
  />)
}

export const HorizontalDotMenu = ({className}) => {
  return (<svg width="31" height="31" viewBox="0 0 31 31" className={className} xmlns="http://www.w3.org/2000/svg">
  <g id="more_horiz_24px">
  <path id="icon/navigation/more_horiz_24px" fillRule="evenodd" clipRule="evenodd" d="M8.07016 12.5731C6.68712 12.5731 5.55554 13.7046 5.55554 15.0877C5.55554 16.4707 6.68712 17.6023 8.07016 17.6023C9.4532 17.6023 10.5848 16.4707 10.5848 15.0877C10.5848 13.7046 9.4532 12.5731 8.07016 12.5731ZM23.1579 12.5731C21.7748 12.5731 20.6433 13.7046 20.6433 15.0877C20.6433 16.4707 21.7748 17.6023 23.1579 17.6023C24.5409 17.6023 25.6725 16.4707 25.6725 15.0877C25.6725 13.7046 24.5409 12.5731 23.1579 12.5731ZM13.0994 15.0877C13.0994 13.7046 14.231 12.5731 15.614 12.5731C16.9971 12.5731 18.1286 13.7046 18.1286 15.0877C18.1286 16.4707 16.9971 17.6023 15.614 17.6023C14.231 17.6023 13.0994 16.4707 13.0994 15.0877Z"/>
  </g>
  </svg>
  )
}

export const LeftArrowIcon = ({ className }) => {
  return (
    <svg
      width="32"
      height="31"
      viewBox="0 0 32 31"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25.9883 13.8304H10.6868L17.7152 6.80204L15.9298 5.02924L5.87134 15.0877L15.9298 25.1462L17.7026 23.3734L10.6868 16.345H25.9883V13.8304Z" />
    </svg>
  );
};

export const CloseIcon = ({ className }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z" />
    </svg>
  );
};

export function UnreadIndicator() {
  return <i className="w-[10px] h-[10px] rounded-full bg-red1 self-center" />;
}

export const SearchIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7124 10.0629H11.4351L16 14.6369L14.6369 16L10.0629 11.4351V10.7124L9.81589 10.4563C8.77301 11.3528 7.4191 11.8925 5.94625 11.8925C2.66209 11.8925 0 9.23042 0 5.94625C0 2.66209 2.66209 0 5.94625 0C9.23042 0 11.8925 2.66209 11.8925 5.94625C11.8925 7.4191 11.3528 8.77301 10.4563 9.81589L10.7124 10.0629ZM1.82959 5.94554C1.82959 8.22342 3.66835 10.0622 5.94623 10.0622C8.2241 10.0622 10.0629 8.22342 10.0629 5.94554C10.0629 3.66767 8.2241 1.82891 5.94623 1.82891C3.66835 1.82891 1.82959 3.66767 1.82959 5.94554Z"
        fill="#F2F2F2"
      />
    </svg>
  );
};

export function LetterIcon({ name, className }) {
  return (
    <div
      className={`${className} rounded-full flex items-center justify-center font-bold`}
    >
      {name.slice(0, 1).toUpperCase()}
    </div>
  );
}

export const GroupIcon = () => {
  return (
    <svg
      width="51"
      height="34"
      viewBox="0 0 51 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17Z"
        fill="#E0E0E0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 11C15.3425 11 14 12.3425 14 14C14 15.6575 15.3425 17 17 17C18.6575 17 20 15.6575 20 14C20 12.3425 18.6575 11 17 11ZM18.5 14C18.5 13.175 17.825 12.5 17 12.5C16.175 12.5 15.5 13.175 15.5 14C15.5 14.825 16.175 15.5 17 15.5C17.825 15.5 18.5 14.825 18.5 14ZM21.5 21.5C21.35 20.9675 19.025 20 17 20C14.9825 20 12.6725 20.96 12.5 21.5H21.5ZM11 21.5C11 19.505 14.9975 18.5 17 18.5C19.0025 18.5 23 19.505 23 21.5V23H11V21.5Z"
        fill="black"
        fillOpacity="0.54"
      />
      <path
        d="M51 17C51 26.3888 43.3888 34 34 34C24.6112 34 17 26.3888 17 17C17 7.61116 24.6112 0 34 0C43.3888 0 51 7.61116 51 17Z"
        fill="#2F80ED"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 11C32.3425 11 31 12.3425 31 14C31 15.6575 32.3425 17 34 17C35.6575 17 37 15.6575 37 14C37 12.3425 35.6575 11 34 11ZM35.5 14C35.5 13.175 34.825 12.5 34 12.5C33.175 12.5 32.5 13.175 32.5 14C32.5 14.825 33.175 15.5 34 15.5C34.825 15.5 35.5 14.825 35.5 14ZM38.5 21.5C38.35 20.9675 36.025 20 34 20C31.9825 20 29.6725 20.96 29.5 21.5H38.5ZM28 21.5C28 19.505 31.9975 18.5 34 18.5C36.0025 18.5 40 19.505 40 21.5V23H28V21.5Z"
        fill="white"
      />
    </svg>
  );
};

export const InboxIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4443 3.11066H3.9999C3.38879 3.11066 2.88879 3.61066 2.88879 4.22177V19.7773L7.33324 15.3329H18.4443C19.0555 15.3329 19.5555 14.8329 19.5555 14.2218V4.22177C19.5555 3.61066 19.0555 3.11066 18.4443 3.11066ZM17.3332 5.3328V13.1106H6.41103L5.75547 13.7661L5.11103 14.4106V5.3328H17.3332ZM21.7777 7.55512H23.9999C24.611 7.55512 25.111 8.05512 25.111 8.66623V25.3329L20.6666 20.8885H8.44435C7.83324 20.8885 7.33324 20.3885 7.33324 19.7773V17.5551H21.7777V7.55512Z"
      />
    </svg>
  );
};

export const ActionIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.4427 12.3359C32.3618 12.9486 32.6101 14.1904 31.9974 15.1094L24.737 26H35C35.7376 26 36.4153 26.406 36.7634 27.0563C37.1114 27.7066 37.0732 28.4957 36.6641 29.1094L27.3308 43.1094C26.7181 44.0285 25.4763 44.2768 24.5573 43.6641C23.6382 43.0514 23.3899 41.8097 24.0026 40.8906L31.263 30H21C20.2624 30 19.5847 29.5941 19.2367 28.9437C18.8886 28.2934 18.9268 27.5043 19.3359 26.8906L28.6692 12.8906C29.2819 11.9716 30.5237 11.7232 31.4427 12.3359Z"
      />
    </svg>
  );
};

export const TaskIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.11114 4.66669H24.1111C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88891C1.88892 5.66669 2.88892 4.66669 4.11114 4.66669ZM4.11114 6.88891V21.3334H13V6.88891H4.11114ZM24.1111 21.3334H15.2222V6.88891H24.1111V21.3334ZM23 10.7778H16.3334V12.4445H23V10.7778ZM16.3334 13.5556H23V15.2222H16.3334V13.5556ZM23 16.3334H16.3334V18H23V16.3334Z"
      />
    </svg>
  );
};

export const ChatIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="32"
      height="31"
      viewBox="0 0 32 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.0371 2.92615H4.66671C3.97411 2.92615 3.40745 3.49281 3.40745 4.18541V21.815L8.44448 16.778H21.0371C21.7297 16.778 22.2963 16.2113 22.2963 15.5187V4.18541C22.2963 3.49281 21.7297 2.92615 21.0371 2.92615ZM19.7778 5.44458V14.2594H7.39931L6.65635 15.0024L5.92598 15.7327V5.44458H19.7778ZM24.8149 7.96321H27.3334C28.026 7.96321 28.5926 8.52987 28.5926 9.22247V28.1114L23.5556 23.0743H9.70374C9.01115 23.0743 8.44448 22.5077 8.44448 21.8151V19.2965H24.8149V7.96321Z"
      />
    </svg>
  );
};
