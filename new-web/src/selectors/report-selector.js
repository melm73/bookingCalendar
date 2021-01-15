import { createSelector } from 'reselect'
import moment from 'moment';

const getJanDays = (state) => state.report.get('days').get('1');

export const summariseJan = createSelector([ getJanDays ], days => summariseMonth(1, days));

const summariseMonth = (month, days) => {
  return {
    month: moment(month, 'MM').format('MMM'),
    totalDaysOccupied: countDays(days),
    guestCounts: guestTotals(days)
  }
};

const countDays = (monthDays) => {
  if (monthDays == undefined) {
    return '' ;
  }

  let count = 0;
  Object.keys(monthDays).forEach(key => {
    if (monthDays[key].guests.length > 0) count += 1;
  });

  return count;
};

const guestTotals = (monthDays) => {
  if (monthDays == undefined) return [];

  const guests = Object.keys(monthDays).flatMap(key => monthDays[key].guests);

  const result = {};
  guests.forEach(guest => {
    if (result[guest.name]) {
      result[guest.name].count += 1;
    } else {
      result[guest.name] = { owner: guest.owner, count: 1 };
    }
  });

  return result;
};
