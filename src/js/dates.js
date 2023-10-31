import { format, isPast} from "date-fns";
export { showDate }

const showDate = ((deadline) => {
    return format(new Date(deadline), 'eeee') + ' ' + format(new Date(deadline), 'do') + ' ' + format(new Date(deadline), 'MMMM');
});