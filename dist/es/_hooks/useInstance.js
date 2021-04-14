import { useRef } from 'react';

var useInstance = function useInstance() {
  var initialValueOrFunction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var ref = useRef();

  if (!ref.current) {
    ref.current = typeof initialValueOrFunction === 'function' ? initialValueOrFunction() : initialValueOrFunction;
  }

  return ref.current;
};

export default useInstance;
//# sourceMappingURL=useInstance.js.map
