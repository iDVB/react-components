var storageItemExists = function storageItemExists(item) {
  return typeof window !== 'undefined' && localStorage.getItem(item) !== null;
};
var getStorageItem = function getStorageItem(item) {
  return typeof window !== 'undefined' && localStorage.getItem(item);
};
var setStorageItem = function setStorageItem(item, value) {
  return typeof window !== 'undefined' && localStorage.setItem(item, value);
};
var removeStorageItem = function removeStorageItem(item) {
  return typeof window !== 'undefined' && localStorage.removeItem(item);
};

export { getStorageItem, removeStorageItem, setStorageItem, storageItemExists };
//# sourceMappingURL=storageUtils.js.map
