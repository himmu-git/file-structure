import { act, useReducer, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import {
  DirectoryDataContext,
  directoryDataInital,
} from "./context/FileContext";
import { DirectoryDataContextDispatch } from "./context/FileDataDispatchContext";
function tasksReducer(directoryData, action) {
  switch (action.type) {
    case "add": {
      const { parentFolderId, ...rest } = action.data;
      const id = rest.isFile ? rest.fileId : rest.folderId;
      if (action.data.parentFolderId === null) {
        directoryData.fileFolders.push(id);
        directoryData.folderData[id] = rest;
      } else {
        directoryData.folderData[action.data.parentFolderId].fileFolders.push(
          id
        );
        directoryData.folderData[id] = rest;
      }
      // console.log(directoryData, parentFolderId, "id");
      return { ...directoryData };
    }
    case "delete": {
      const id = action.data.folderId;
      const parentFolderId = action.data.parentFolderId;
      if (parentFolderId === null) {
        directoryData.fileFolders = directoryData.fileFolders.filter((data) => {
          return parentFolderId != data.folderId;
        });
        delete directoryData.folderData[id];
      } else {
        const filterData = directoryData.folderData[
          parentFolderId
        ].fileFolders.filter((data) => {
          return id === data.folderId;
        });
        directoryData.folderData[parentFolderId].fileFolders = [...filterData];
        delete directoryData.folderData[id];
      }
      return { ...directoryData };
    }
  }
}
function App() {
  const [directoryData, dispatch] = useReducer(
    tasksReducer,
    directoryDataInital
  );
  return (
    <>
      <DirectoryDataContext.Provider value={directoryData}>
        <DirectoryDataContextDispatch.Provider value={dispatch}>
          <Home />
        </DirectoryDataContextDispatch.Provider>
      </DirectoryDataContext.Provider>
    </>
  );
}

export default App;
