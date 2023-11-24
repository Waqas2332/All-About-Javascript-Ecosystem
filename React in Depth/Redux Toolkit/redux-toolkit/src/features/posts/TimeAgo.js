import { parseISO, formatDistanceToNow } from "date-fns";

export default function TimeAgo({ timestamps }) {
  let timeAgo = "";
  if (timestamps) {
    const date = parseISO(timestamps);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span title={timestamps}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
}
