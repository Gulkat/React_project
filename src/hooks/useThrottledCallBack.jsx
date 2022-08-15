import {useCallback} from "react";

const useThrottle = (callBack, timeout) => {
    let timeoutID = null;

    return useCallback((...args) => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout(() => {
            callBack(...args);
            timeoutID = null;
        }, timeout);
    }, [])
}

export default useThrottle