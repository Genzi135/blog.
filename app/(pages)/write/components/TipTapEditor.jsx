import React, { useState } from 'react';
import { EditorContent, useEditor, BubbleMenu, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';
import Blockquote from '@tiptap/extension-blockquote';
import CodeBlock from '@tiptap/extension-code-block';
import Heading from '@tiptap/extension-heading';
import HardBreak from '@tiptap/extension-hard-break';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import { FaBold, FaItalic, FaUnderline, FaHighlighter, FaQuoteRight, FaImage, FaVideo, FaCode, FaMinus, FaListUl, FaListOl } from 'react-icons/fa';
import { Extension } from '@tiptap/core';
import { keymap } from 'prosemirror-keymap';

const TabExtension = Extension.create({
    name: 'tabExtension',

    addProseMirrorPlugins() {
        return [
            keymap({
                Tab: (state, dispatch) => {
                    const { tr } = state;
                    dispatch(
                        tr.insertText('\t', state.selection.from, state.selection.to)
                    );
                    return true;
                }
            })
        ];
    }
});

const TipTap = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogType, setDialogType] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [previewSrc, setPreviewSrc] = useState('');
    const [activeTab, setActiveTab] = useState('url'); // State to control active tab

    const editor = useEditor({
        extensions: [
            StarterKit,
            Bold,
            Italic,
            Underline,
            Strike,
            Highlight,
            Placeholder.configure({ placeholder: 'Tell your story' }),
            Blockquote,
            CodeBlock,
            Heading,
            HardBreak,
            HorizontalRule,
            Image,
            BulletList,
            OrderedList,
            ListItem,
            TabExtension,
        ],
        editorProps: {
            attributes: {
                class: 'p-4 focus:outline-none',
            },
        },
    });

    const handleOpenDialog = (type) => {
        setDialogType(type);
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setInputValue('');
        setPreviewSrc('');
        setActiveTab('url');
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setPreviewSrc(e.target.value);
    };

    const handleConfirm = async () => {
        if (dialogType === 'image') {
            if (activeTab === 'url') {
                editor.chain().focus().setImage({ src: inputValue }).run();
            } else if (activeTab === 'local') {
                const file = document.querySelector('input[type="file"]').files[0];
                if (file) {
                    const imageUrl = await uploadImageToS3(file); // Function to upload image to S3
                    editor.chain().focus().setImage({ src: imageUrl }).run();
                }
            }
        } else if (dialogType === 'video') {
            editor.chain().focus().setNode('video', { src: inputValue }).run();
        }
        handleCloseDialog();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImageToS3 = async (file) => {
        // Function to upload image to S3
        // Should return the S3 URL of the uploaded image
    };

    return (
        <>
            {editor && (
                <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={`p-2 m-1 rounded ${editor.isActive('bold') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        tabIndex="0"
                    >
                        <FaBold />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={`p-2 m-1 rounded ${editor.isActive('italic') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        tabIndex="0"
                    >
                        <FaItalic />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={`p-2 m-1 rounded ${editor.isActive('underline') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        tabIndex="0"
                    >
                        <FaUnderline />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHighlight().run()}
                        className={`p-2 m-1 rounded ${editor.isActive('highlight') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        tabIndex="0"
                    >
                        <FaHighlighter />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        className={`p-2 m-1 rounded ${editor.isActive('blockquote') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        tabIndex="0"
                    >
                        <FaQuoteRight />
                    </button>
                </BubbleMenu>
            )}
            {editor && (
                <FloatingMenu editor={editor} tippyOptions={{ duration: 100, placement: 'bottom', offset: [100, 20] }} >
                    <button
                        onClick={() => handleOpenDialog('image')}
                        className="p-2 m-1 bg-gray-200 rounded"
                        tabIndex="0"
                    >
                        <FaImage />
                    </button>
                    {/* <button
                        onClick={() => handleOpenDialog('video')}
                        className="p-2 m-1 bg-gray-200 rounded"
                        tabIndex="0"
                    >
                        <FaVideo />
                    </button> */}
                    <button
                        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                        className={`p-2 m-1 rounded ${editor.isActive('codeBlock') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        tabIndex="0"
                    >
                        <FaCode />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setHorizontalRule().run()}
                        className="p-2 m-1 bg-gray-200 rounded"
                        tabIndex="0"
                    >
                        <FaMinus />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={`p-2 m-1 rounded ${editor.isActive('bulletList') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        tabIndex="0"
                    >
                        <FaListUl />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className={`p-2 m-1 rounded ${editor.isActive('orderedList') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        tabIndex="0"
                    >
                        <FaListOl />
                    </button>
                </FloatingMenu>
            )}
            <EditorContent
                editor={editor}
                className="mt-4 rounded-lg p-4 bg-white shadow focus:outline-none"
                style={{ width: '700px', outline: 'none' }}
            />
            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-xl mb-2">Enter {dialogType} URL</h2>
                        <div className="flex mb-2">
                            <button
                                onClick={() => setActiveTab('url')}
                                className={`p-2 mr-2 ${activeTab === 'url' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                URL
                            </button>
                            <button
                                onClick={() => setActiveTab('local')}
                                className={`p-2 ${activeTab === 'local' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                Local
                            </button>
                        </div>
                        {activeTab === 'url' && (
                            <>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    className="border p-2 w-full mb-2"
                                />
                                {previewSrc && (
                                    <img src={previewSrc} alt="preview" className="w-full mb-2" />
                                )}
                            </>
                        )}
                        {activeTab === 'local' && (
                            <>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="border p-2 w-full mb-2"
                                />
                                {previewSrc && (
                                    <img src={previewSrc} alt="preview" className="w-1/2 mb-2" />
                                )}
                            </>
                        )}
                        {dialogType === 'video' && previewSrc && (
                            <video src={previewSrc} controls className="w-1/2 mb-2" />
                        )}
                        <div className="flex justify-end">
                            <button onClick={handleCloseDialog} className="bg-gray-200 p-2 rounded mr-2">Cancel</button>
                            <button onClick={handleConfirm} className="bg-blue-500 text-white p-2 rounded">Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TipTap;
