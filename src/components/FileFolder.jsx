/* eslint-disable react/prop-types */
import React from "react";
import useDirectoryDispatch from "../context/useDirectoryDispatch";
const RenderFileFolder = ({ folderData, data, parentFolderId }) => {
  const dispatch = useDirectoryDispatch();
  const { isFile, folderName, folderId, fileId, fileName, fileFolders } =
    folderData[data];
  if (isFile)
    return (
      <div id={fileId} className="fileClass">
        {fileName}
      </div>
    );
  if (!data) return null;
  return (
    <>
      <div id={folderId} className={"folderClass"} key={folderId}>
        <span className="folderName">
          🗂️ {folderName}{" "}
          <span
            className="add"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({
                type: "add",
                data: {
                  parentFolderId: parentFolderId,
                  fileId: Math.floor(Math.random(0, 1) * 100),
                  isFile: true,
                  fileName: `untitled file ${Math.floor(
                    Math.random(1, 100) * 100
                  )}`,
                },
              });
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2312/2312400.png"
              alt="Add file"
            />
          </span>{" "}
          <span
            className="add"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({
                type: "add",
                data: {
                  parentFolderId: folderId,
                  folderId: Math.floor(Math.random(0, 1) * 100),
                  isFile: false,
                  folderName: `untitled folder ${Math.floor(Math.random(1, 100) * 100)}`,
                  fileFolders: [],
                },
              });
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/10485/10485953.png"
              alt="Add Folder"
            />
          </span>{" "}
          <span
            className="delete"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({
                type: "delete",
                data: {
                  folderId,
                  isFile: false,
                  parentFolderId: parentFolderId,
                },
              });
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
              alt="Delete Button"
            />
          </span>
        </span>

        {fileFolders.map((data) => {
          return (
            <RenderFileFolder
              key={data}
              data={data}
              folderData={folderData}
              parentFolderId={folderId}
            />
          );
        })}
      </div>
    </>
  );
};
function FileFolder({ fileFolders = [], folderData }) {
  if (fileFolders.length == 0) return null;
  return (
    <div>
      {fileFolders.map((data) => {
        return (
          <RenderFileFolder
            key={data.isFile ? data.fileId : data.isFolder}
            data={data}
            folderData={folderData}
            parentFolderId={null}
          />
        );
      })}
    </div>
  );
}

export default FileFolder;
