import { openUploadWidget } from "../../utils/CloudinaryService";
import { cloudinary_upload_preset } from "../../../config";
const CloudinaryUpload = ({setUrl,setName}) => {
    const uploadImageWidget = () => {
        // console.log(props);
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dkrgbbmdg",
                uploadPreset: cloudinary_upload_preset,
                sources: ["local", ]
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    console.log(result.info);
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                }
                else{
                    // alert("Could Not Upload");
                    console.log(error);
                    // return ;
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button className=" bg-white rounded-full p-4 font-semibold " onClick={uploadImageWidget}>
            Select Track
        </button>
    );
};

export default CloudinaryUpload;
