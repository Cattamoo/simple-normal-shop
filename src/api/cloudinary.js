import axios from "axios";

export async function uploadImage(img) {
	const url = process.env.REACT_APP_CLOUDINARY_URL;
	const data = new FormData();
	data.append('file', img);
	data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
	return axios.post(
		url,
		data,
		{
			headers: {
				"Content-Type": "multipart/form-data"
			}
		})
		.then(res => res.data)
	;
}