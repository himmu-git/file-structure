import { useContext } from "react";
import { DirectoryDataContextDispatch } from "./FileDataDispatchContext";

const useDirectoryDispatch = () => {
    const dispatch = useContext(DirectoryDataContextDispatch);
    return dispatch
}
export default useDirectoryDispatch;