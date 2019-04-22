
export const transformFromApi = (day) => {
  return {
  	schoolHoliday: isSchoolHoliday(day),
  	publicHoliday: publicHoliday(day),
  	guests: guests(day),
  	notes: notes(day)
  };
};

function isSchoolHoliday(day) {
  return (day.school_holiday == 1) || (day.school_holiday == true)
}

function publicHoliday(day) {
  return day.public_holiday ? day.public_holiday : null;
}

function notes(day) {
  return day.notes || null;
}

function guests(day) {
  if (day.guests) return day.guests;

  if (day.bookings) {
  	return Object.keys(day.bookings).flatMap(key => transformBooking(key));
  }

  return [];
}

function transformBooking(key) {
  switch(key) {
  case 'kt':
    return [{ name: 'Kay', owner: true }, { name: 'Trevor', owner: true }];
  case 'mp':
    return [{ name: 'Melanie', owner: true }, { name: 'Paul', owner: true }];
  case 'fs':
    return [{ name: 'Felicity', owner: true }, { name: 'Samantha', owner: true }];
  case 'ls':
    return [{ name: 'Lesley', owner: true }, { name: 'Odin', owner: true }];
  default:
    return [{ name: key, owner: false }];
  }
}
