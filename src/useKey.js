import { useEffect } from "react";
export function useKey(Key, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === Key.toLowerCase()) {
          action();
          // console.log("close this tab");
        }
      }
      document.addEventListener("keydown", callBack);
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [Key, action]
  );
}
