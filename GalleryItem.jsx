import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import './GalleryItem.less';
import Like from './like';
import DiscussionBoard from './DiscussionBoard';

//Wrapper item needs to be a useState for it to get dynamically rendered

const GalleryItem = (props) => {
    const [visible, setVisible] = useState(false);
    const title = props.item.Title || 'Titlex';


    const temp = "viewCounts" + props.Id ? props.Id : 0;
    const [viewCounts, setViewCounts] = useState(
        JSON.parse(localStorage.getItem(temp)) || 0
    );

    const showModal = () => {
        setVisible(true);
        setViewCounts((prevCount) => prevCount + 1);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleOk = () => {
        setVisible(false);
    };

    useEffect(() => {
        localStorage.setItem(temp, JSON.stringify(viewCounts));
    }, [viewCounts]);




    return (
        <>
            <div className='galleryItem' onClick={() => { showModal() }}>
                <div className='header'><div>{title}</div></div>
                <img style={{ backgroundColor: 'red' }} />
                <div className='flex flex-row'>
                    <div className='flex flex-column'>
                        <p>Creator:</p>
                        <p>Creator Name</p>
                        <p>Posted:</p>
                        <p>Posted Date</p>
                    </div>
                    <div className='flex flex-column justify-end'>
                        <p>7  5</p>
                    </div>
                </div>
            </div>
            <div className='gallery-modal-holder'>
                <Modal
                    className='galleryItem-expanded'
                    title={title}
                    open={visible}
                    onCancel={handleCancel}
					onOk={handleOk}
                    width='90vw'
                    maskClosable={false}
                    cancelText='Close'
                    footer={null}
                >
                    <div className='flex flex-row'>
                        <div className='flex flex-column'>
                            <img className='ooIMG'></img>
                        </div>
                        <div className='flex flex-column'>
                            <DiscussionBoard />
                        </div>

                    </div>
                </Modal>
            </div>
        </>
    );
}

export default GalleryItem;