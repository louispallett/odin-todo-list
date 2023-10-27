import { format, addDays } from "date-fns";
export { showDate }

const showDate = ((deadline) => {
    return format(new Date(deadline), "eeee") + " " + format(new Date(deadline), "co") + " " + format(new Date(deadline), "MMMM");
});