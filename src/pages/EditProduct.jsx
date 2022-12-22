import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {v4 as uuid} from 'uuid';
import {uploadImage} from "../api/cloudinary";
import useProducts from "../hook/useProducts";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import ImagePreview from "../components/ImagePreview";

export default function EditProduct() {
	const navigate = useNavigate();
	const [ isUploading, setIsUploading ] = useState(false);
	const [ success, setSuccess ] = useState(null);
	const { addProduct } = useProducts();
	const submitHandler = async (e) => {
		e.preventDefault();
		setIsUploading(true);
		const [file, title, price, category, description, option] = e.target;
		const product = {
			id: uuid(),
			title: title.value,
			price: price.value,
			category: category.value,
			description: description.value,
			options: option.value.split(','),
			thumbnail: await uploadImage(file.files[0]).then(image => image.url)
		};
		addProduct.mutate({product}, {
			onSuccess: () => {
				setSuccess('성공적으로 제픔을 추가했습니다.');
				setTimeout(() => {
					navigate('/');
				}, 1000);
			}
		});
	}

	return (
		<section className="text-center">
			<h2 className="text-xl font-bold">새로운 제품 등록</h2>
			{ success && <p className="my-2">{success}</p> }
			<form className="flex flex-col items-center gap-2" onSubmit={submitHandler}>
				<ImagePreview />
				<Input type="text" placeholder="제품 이름" />
				<Input type="number" placeholder="가격" />
				<Input type="text" placeholder="카테고리" />
				<Input type="text" placeholder="제품 설명" />
				<Input type="text" placeholder="옵션들(콤마(,)로 구분)" />
				<Button className="w-96" name={isUploading ? "업로드중..." : "제품 등록하기"} disabled={isUploading} />
			</form>
		</section>
	);
}