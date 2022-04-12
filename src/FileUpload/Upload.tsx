import { useDropzone, FileWithPath } from "react-dropzone";

export const Upload = () => {
  const { acceptedFiles, getRootProps, getInputProps,open} = useDropzone({
    noClick: true
  });

  const files = acceptedFiles.map((file: FileWithPath) => (
    <div key={file.path}>
      {file.path} - {file.size} bytes
    </div>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      <button type="submit" onClick={open}> Upload File</button>
        
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </div>
  );
};
