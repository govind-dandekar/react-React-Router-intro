import { useParams } from "react-router-dom"; 

function ProductDetailsPage(){
	// includes every dynamic path segment in route definition
	const params = useParams()
	
	return <>
		<h1>Product Details!</h1>
		<p>{params.productId}</p>
	</>
}

export default ProductDetailsPage;