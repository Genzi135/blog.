import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';

export default function ProfileAbout({ data }) {
    const [content, setContent] = useState(data);
    const [isEditEnable, setEditEnable] = useState(false);
    const inputRef = useRef(null);

    const onInputChange = (e) => {
        setContent(e.target.value);
    };

    const enableEdit = () => {
        setEditEnable(true);
    };

    const disableEdit = () => {
        setEditEnable(false);
    };

    useEffect(() => {
        if (isEditEnable) {
            inputRef.current.focus();
        }
    }, [isEditEnable]);

    const onSaveClick = () => {
        setEditEnable(false)
    }

    return (
        <div className="w-full h-auto flex flex-col gap-5">
            <input
                type="text"
                className="p-2 text-md focus:outline-none"
                value={content}
                onChange={onInputChange}
                disabled={!isEditEnable}
                ref={inputRef}
            />
            {!isEditEnable ? (
                <div className="flex justify-end items-center">
                    <Button variant="outline" onClick={enableEdit}>
                        Edit
                    </Button>
                </div>
            ) : (
                <div className="flex justify-end items-center gap-5">
                    <Button variant="outline" onClick={() => { disableEdit(); setContent(data) }}>
                        Cancel
                    </Button>
                    <Button onClick={() => { onSaveClick() }}>
                        Save
                    </Button>
                </div>
            )}
        </div>
    );
}
