function secondsToDHM(seconds: number) {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);

  let dDisplay = d + (d == 1 ? ' day : ' : ' days : ');
  let hDisplay = h + (h == 1 ? ' hour : ' : ' hours : ');
  let mDisplay = m + (m == 1 ? ' min : ' : ' mins');
  return dDisplay + hDisplay + mDisplay;
}

function justNumbers(string: string[], name: string) {
  let newString = string.filter((x) => x.includes(name));

  let newString2 = newString.toString();
  let numsStr = newString2.replace(/[^0-9]/g, '');
  if (numsStr != '') {
    return parseInt(numsStr);
  }
  return 0;
}

function convertStringToTime(durationString: string): any {
  const parts = durationString.split(' : ');
  let mins = justNumbers(parts, 'mins') * 60;
  let days = justNumbers(parts, 'days') * 24 * 3600;
  let hours = justNumbers(parts, 'hours') * 3600;
  return mins + days + hours;
}
