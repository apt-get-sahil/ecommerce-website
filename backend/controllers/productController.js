const Product = require("../models/productModel")





//create product
exports.createProduct = async(req , res , next)=>{

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}





exports.getAllProducts = async (req , res)=>{

    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
} 

// get prodct details specific id
exports.getProductDetails = async (req, res, next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success: false,
            message : "product doesnt exist"
        })
    }
    res.status(200).json({
        success: true,
        product
    })

}


// update products by admin

exports.updateProduct = async (req, res, next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success: false,
            message : "product doesnt exist"
        })
    }
    product= await Product.findByIdAndUpdate(req.params.id,req.body,{new: true,
    runValidators:true,
useFindAndModify:false})
res.status(200).json({
    success: true,
    product
})
}


//delete product
exports.deleteProduct = async (req, res, next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success: false,
            message : "product doesnt exist"
        })
    }
    await product.deleteOne();
res.status(200).json({
    success: true,
    message: "product delete successfully"
})
}

