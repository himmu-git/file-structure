import { useContext } from "react";
import { DirectoryDataContext } from "./FileContext";

const useDirectoryData = () => {
    const directoryData = useContext(DirectoryDataContext);
    return directoryData
}
export default useDirectoryData;