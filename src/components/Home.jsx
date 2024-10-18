import Directory from "./Directory";
import useDirectoryData from "../context/useDirectoryData";

// / *
// *    directoryData.projectName
// * fileFoldersFile.map((fileOrFolderObj)=>{
//         if(fileOrFolderObj.isFile) {
//             return <File />
//         }
//         else {
//             return <Folder folderData[fileFolderId] />
//         }

//         if(folderFiles === null) return null;
//         if(file) return <File />
//         else {
//             <div > {folder}</div>
//             <Folder folderId={} />
//         }
// })
// /
const Home = () => {
  const directoryData = useDirectoryData();
  const { folderData } = directoryData;
  return (
    <div className="app">
      <Directory directoryData={directoryData} folderData={folderData} />
    </div>
  );
};

export default Home;
