import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCardAttachment } from "../../../redux/action/card";

export default function MyEditor({ handleChange, handlesetdesc,...props }) {
    const { selectedCard } = useSelector((store) => store.cardRoot);
    const { selectedBucket } = useSelector((store) => store.bucketRoot);
    const [description, setDesc] = useState( props.desc);
    const dispatch = useDispatch();
    let cardId = selectedCard && selectedCard._id;
    let bucketId = selectedBucket && selectedBucket._id;
    let boardId = selectedBucket && selectedBucket.boardId;



    // useEffect(()=>{
    // console.log("description-----------------", description)

    //   setDesc(props.desc)
    // },[props.desc])
    console.log("outer-----------------", props)

    function uploadAdapter(loader) {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const body = new FormData();
                    loader.file.then((file) => {
                        body.append("card-attach", file);

                        dispatch(addCardAttachment(boardId, bucketId, cardId, body, async function (card) {
                            if (card) {
                                let url = card.attachments[card.attachments.length - 1]
                                console.log("Attach url ", url, card)
                                resolve({
                                    default: url.attach_url
                                });
                            } else {
                                reject("error in  image add");
                            }
                        }));
                    });
                });
            }
        };
    }
    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        };
    }
    return (
        <div className="">
            {/* <CKEditor
                config={{
                    extraPlugins: [uploadPlugin]
                }}
                data={props.data}
                editor={ClassicEditor}
                onReady={(editor) => { }}
                onBlur={(event, editor) => { }}
                onFocus={(event, editor) => { 
                  
                }}
                onChange={(event, editor) => {
                    handleChange(editor.getData());
                }}
                {...props}
            /> */}
            <textarea/>
        </div>
    );
}