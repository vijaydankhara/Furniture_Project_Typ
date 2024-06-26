import Express  from "express";
import  {
    addNewProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct
} from "../../controller/admin/product.controller";
import upload from "../../helpers/imageUpload";

const productRoutes = Express.Router();

// productRoutes.post('/add-product', addNewProduct);
productRoutes.post('/add-product',upload.array('productImage'), addNewProduct);
productRoutes.get('/get-products', getAllProduct);
productRoutes.get('/get-product', getProduct);
productRoutes.put('/update-product', updateProduct);
productRoutes.delete('/delete-product', deleteProduct);

export default productRoutes