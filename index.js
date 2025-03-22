function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  myEach(collection, (item) => {
    result.push(callback(item));
  });
  return result;
}

function myReduce(collection, callback, acc) {
  let values = Array.isArray(collection)
    ? collection
    : Object.values(collection);

  let startId = 0;
  if (acc === undefined) {
    acc = values[0];
    startId = 1;
  }

  for (let i = startId; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }

  return acc;
}

function myFind(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const result = [];
  myEach(collection, (item) => {
    if (predicate(item)) {
      result.push(item);
    }
  });
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
