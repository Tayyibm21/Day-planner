const timeBlockLabels = [
  { label: "9 AM", key: 9 },
  { label: "10 AM", key: 10 },
  { label: "11 AM", key: 11 },
  { label: "12 PM", key: 12 },
  { label: "1 PM", key: 13 },
  { label: "2 PM", key: 14 },
  { label: "3 PM", key: 15 },
  { label: "4 PM", key: 16 },
  { label: "5 PM", key: 17 },
];

const currentDay = $("#current-day");
const clockContainer = $("#clock");

const getDataFromLS = () => {
  return JSON.parse(localStorage.getItem("textInput")) || {};
};

const onSave = (event) => {
  const target = $(event.target);

  if (
    target.is('button[name="save-btn"]') ||
    target.is('i[name="save-icon"]')
  ) {
    const data = getDataFromLS();
    const key = target.attr("id");

    data[key] = $(`textarea[id="${key}"]`).val();

    localStorage.setItem("textInput", JSON.stringify(data));
  }
};

const getTextAreaValue = (key) => {

  const data = getDataFromLS();

  return data[key];
};

const getClassName = (key) => {
  const currentTime = moment().hour();

  const isPast = currentTime > key;
  const isFuture = currentTime < key;

  // check if it is past, future or present
  if (isPast) {
    return "textarea-container";
  } else if (isFuture) {
    return "textarea-future";
  } else {
    return "textarea-present";
  }
};
