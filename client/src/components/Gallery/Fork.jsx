import React from 'react';
import { Button } from 'antd';

function Fork({ setExpand }) {
	
	//change the url to /workspaceGallery
	const showModal = () => {
		setTimeout(() => {
        window.location.href = `/workspaceGallery`;
		}, 1000);
    };
	
	return (

		<Button title='Fork this Project' className="fork-button" onClick={() => {showModal() }}>
			<i className='fa fa-code-branch' />
		</Button>

	);
	
}

	Fork.propTypes = {
  setExpand: PropTypes.func.isRequired, 
};

 export default Fork;