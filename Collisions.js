function rangesOverlap(range1, range2) {
  if (
    (range1.low <= range2.low && range1.high >= range2.low) ||
    (range2.low <= range1.low && range2.high >= range1.low) ||
    (range1.low >= range2.low && range1.high <= range2.high) ||
    (range2.low >= range1.low && range2.high <= range1.high)
  ) {
    return true;
  } else {
    return false;
  }
}

function isCollidingWith(obj1, obj2) {
  let obj1_x_range = { low: obj1.x_pos, high: obj1.x_pos + obj1.width };
  let obj1_y_range = { low: obj1.y_pos, high: obj1.y_pos + obj1.height };

  let obj2_x_range = { low: obj2.x_pos, high: obj2.x_pos + obj2.width };
  let obj2_y_range = { low: obj2.y_pos, high: obj2.y_pos + obj2.height };

  if (
    rangesOverlap(obj1_x_range, obj2_x_range) &&
    rangesOverlap(obj1_y_range, obj2_y_range)
  ) {
    return true;
  } else {
    return false;
  }
}
