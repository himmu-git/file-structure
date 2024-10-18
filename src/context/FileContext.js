import { createContext } from "react";
const folderData = {
    "fd-1": {
        isFile: false,
        folderId: "fd-1",
        folderName: "node_modules",
        fileFolders: ["fd-x"],
    },
    "fl-1": {
        isFile: true,
        fileId: "fl-1",
        fileName: "index.html",
        fileFolders: null,
    },
    "fd-x": {
        isFile: false,
        folderId: "fd-x",
        folderName: "app",
        fileFolders: [],
    },
};
export const directoryDataInital = {
    projectId: "pj1",
    projectName: "Vite Project",
    fileFolders: ["fd-1", "fl-1"],
    folderData: folderData
};
export const DirectoryDataContext = createContext(null)
