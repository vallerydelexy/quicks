export const datetime = (dateString) => {
  const dateObject = new Date(dateString);
  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const year = dateObject.getFullYear();
  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");
  return `${day}-${month}-${year} ${hours}:${minutes}`;
};

export const time = (dateString) => {
  const dateObject = new Date(dateString);
  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const prettyDate = (timestamp) => {
  const msgDate = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (
    msgDate.getFullYear() === today.getFullYear() &&
    msgDate.getMonth() === today.getMonth() &&
    msgDate.getDate() === today.getDate()
  ) {
    return `Today ${msgDate.toLocaleDateString(undefined, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })}`;
  } else if (
    msgDate.getFullYear() === yesterday.getFullYear() &&
    msgDate.getMonth() === yesterday.getMonth() &&
    msgDate.getDate() === yesterday.getDate()
  ) {
    return `Yesterday ${msgDate.toLocaleDateString(undefined, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })}`;
  } else {
    return msgDate.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }
};

export function generateRandomDate () {
  const today = new Date();
  const weekFromNow = new Date(today);
  weekFromNow.setDate(today.getDate() + 7);
  const randomDate = new Date(today.getTime() + Math.random() * (weekFromNow.getTime() - today.getTime()));
  return randomDate.toISOString();
};

export function calculateDaysLeft(targetDate) {
  const targetDateTime = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const difference = targetDateTime - now;
  return Math.ceil(difference / (1000 * 60 * 60 * 24));
}