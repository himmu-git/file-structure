import React from "react";
import FileFolder from "./FileFolder";

function Directory({ directoryData, folderData }) {
  return (
    <div>
      <div>{directoryData.projectName}</div>
      <FileFolder
        fileFolders={directoryData.fileFolders}
        folderData={folderData}
        parentFolderId={directoryData.projectId}
      />
    </div>
  );
}

export default Directory;
