function getDebugEvents() {
  const MS_TO_SEC = 1000;
  const MS_TO_MIN = 60 * MS_TO_SEC;
  const MS_TO_HOUR = 60 * MS_TO_MIN;
  
  let CUR_DAY = new Date();
  CUR_DAY = new Date(
    CUR_DAY.getFullYear(),
    CUR_DAY.getMonth(),
    CUR_DAY.getDate()
  )

  function DateAddTime(date, 
    addHour = 0, 
    addMinute = 0,
    addDay = 0, 
    addYear = 0, 
    addMonth = 0, 
  ) {
    const outDate = new Date(date);
    outDate.setFullYear(outDate.getFullYear() + addYear);
    outDate.setMonth(outDate.getMonth() + addMonth);
    outDate.setDate(outDate.getDate() + addDay);
    outDate.setHours(outDate.getHours() + addHour);
    outDate.setMinutes(outDate.getMinutes() + addMinute);
    return outDate;
  }

  /* 
  colors:
    var(--color-gray)
    var(--color-red)
    var(--color-blue)
    var(--color-green)
    var(--color-purple)
    var(--color-yellow)
    var(--color-orange)
    var(--color-lightgreen)
    var(--color-lavender)
    var(--color-brown)
    var(--color-pink)
  */
  const debugEvents = [
    // sunday
    {
      "id": "141341",
      "title": "Weekly Planning Session",
      "description": "Review tasks for the week ahead.",
      "color": "var(--color-green)",
      // starts Day=(today+0) at 8:15
      "startDateTime": `${DateAddTime(CUR_DAY, 8, 15, 0)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 9, 45, 0)}`,
    },
    {
      "id": "251423",
      "title": "Team Meeting",
      "description": "Discuss project progress and roadblocks.",
      "color": "var(--color-red)",
      "startDateTime": `${DateAddTime(CUR_DAY, 10, 0, 0)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 11, 30, 0)}`,
    },
    {
      "id": "743214",
      "title": "Client Call",
      "description": "Scheduled call with a key client.",
      "color": "var(--color-red)",
      "startDateTime": `${DateAddTime(CUR_DAY, 15, 0, 0)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 16, 0, 0)}`,
    },
    {
      "id": "545621",
      "title": "Code Review",
      "description": "Review pull requests from team members.",
      "color": "var(--color-blue)",
      "startDateTime": `${DateAddTime(CUR_DAY, 16, 30, 0)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 17, 30, 0)}`,
    },

    // monday
    {
      "id": "879879",
      "title": "Project Kickoff",
      "description": "Start of a new project - initial planning.",
      "color": "var(--color-orange)",
      "startDateTime": `${DateAddTime(CUR_DAY, 9, 0, 1)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 10, 0, 1)}`,
    },
    {
      "id": "345678",
      "title": "Individual Work Time",
      "description": "Focused work on assigned tasks.",
      "color": "var(--color-purple)",
      "startDateTime": `${DateAddTime(CUR_DAY, 10, 30, 1)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 12, 30, 1)}`,
    },
    {
      "id": "901234",
      "title": "Internal Sync",
      "description": "Quick check-in with team members.",
      "color": "var(--color-teal)",
      "startDateTime": `${DateAddTime(CUR_DAY, 14, 0, 1)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 14, 15, 1)}`,
    },

    // tuesday
    {
      "id": "123456",
      "title": "Workshop Session",
      "description": "Interactive session to brainstorm ideas.",
      "color": "var(--color-yellow)",
      "startDateTime": `${DateAddTime(CUR_DAY, 9, 30, 2)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 12, 30, 2)}`,
    },
    {
      "id": "789012",
      "title": "Testing & QA",
      "description": "Dedicated time for testing new features.",
      "color": "var(--color-pink)",
      "startDateTime": `${DateAddTime(CUR_DAY, 13, 0, 2)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 17, 0, 2)}`,
    },

    // wednesday
    {
      "id": "456789",
      "title": "Training Session",
      "description": "Attend a training on new software.",
      "color": "var(--color-brown)",
      "startDateTime": `${DateAddTime(CUR_DAY, 10, 0, 3)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 12, 0, 3)}`,
    },

    // thursday
    {
      "id": "012345",
      "title": "Deadline Check",
      "description": "Review progress on upcoming deadlines.",
      "color": "var(--color-lavender)",
      "startDateTime": `${DateAddTime(CUR_DAY, 9, 0, 4)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 10, 30, 4)}`,
    },

    // friday
    {
      "id": "678901",
      "title": "Team Social",
      "description": "Casual get-together with the team.",
      "color": "var(--color-lightgreen)",
      "startDateTime": `${DateAddTime(CUR_DAY, 17, 0, 5)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 19, 0, 5)}`,
    },

    // saturday
    {
      "id": "234567",
      "title": "Personal Time",
      "description": "No work scheduled.",
      "color": "var(--color-gray)",
      "startDateTime": `${DateAddTime(CUR_DAY, 7, 0, 6)}`,
      "endDateTime": `${DateAddTime(CUR_DAY, 23, 59, 6)}`,
    },
  ] 

  return(debugEvents);
}

export default function debugGetEvents() {
  return getDebugEvents();
}