var storageItemExists = function storageItemExists(item) {
  return typeof window !== 'undefined' && localStorage.getItem(item) !== null;
};
var getStorageItem = function getStorageItem(item) {
  return typeof window !== 'undefined' && localStorage.getItem(item);
};
var setStorageItem = function setStorageItem(item, value) {
  return typeof window !== 'undefined' && localStorage.setItem(item, value);
};

export { getStorageItem, setStorageItem, storageItemExists };
//# sourceMappingURL=storageUtils.js.map
