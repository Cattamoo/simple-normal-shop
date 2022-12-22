import React, {useState} from 'react';

export default function ImagePreview() {
	const [uploaded, setUploaded] = useState(null);
	const uploadFileHandler = ({ target }) => {
		setUploaded(target.files[0])
	}
	return (
		<>
			{ uploaded && <img className="max-w-lg min-h-[300px] m-auto" src={URL.createObjectURL(uploaded)} alt="uploaded"/> }
			<input className="w-96 py-1.5 outline-none" type="file" accept="image/png, image/jpeg" onChange={uploadFileHandler} />
		</>
	);
}