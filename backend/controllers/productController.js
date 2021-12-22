const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req,res,next)=>{
    req.body.user = req.user.id;
    console.log(req.user);
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
});

// Get All Products
exports.getAllProducts = catchAsyncErrors(async (req,res,next)=>{
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);
    const products = await apiFeature.query;
    res.status(200).json({
        success:true,
        products,
        productsCount
    });
});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found!", 404));
    }
    res.status(200).json({
        success:true,
        product
    });
});

// Update Product -- Admin
exports.updateProduct = catchAsyncErrors(async (req,res,next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found!"
        });
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    });
});

// Delete Product -- Admin
exports.deleteProduct = catchAsyncErrors(async (req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success:false,
            message:"Product not found!"
        });
    }
    await product.remove();
    res.status(200).json({
        success:true,
        message:"Product deleted successfully."
    });
});

//Create Product Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req,res,next)=>{
    const { productId,comment,rating } = req.body;
    const review = {
        user: req.user.id,
        name: req.user.name,
        rating: Number(rating),
        comment
    };
    const product = await Product.findById(productId);
    const isReviewed = product.reviews.find(rev=> rev.user.toString()===req.user.id.toString());
    if (isReviewed) {
        product.reviews.forEach(rev=> {
            if (rev.user.toString() === req.user.id.toString()) {
                rev.rating = rating;
                rev.comment = comment;
            }
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }
    let avg = 0;
    product.reviews.forEach(rev=> {
        avg += rev.rating;
    });
    product.ratings = avg / product.reviews.length;
    await product.save({validateBeforeSave: false});
    res.status(200).json({
        success: true
    });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req,res,next)=>{
    const product = await Product.findById(req.query.productId);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        success: true,
        reviews: product.reviews
    });
});

// Delete a review
exports.deleteReview = catchAsyncErrors(async (req,res,next)=>{
    const product = await Product.findById(req.query.productId);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    const reviews = product.reviews.filter(
        rev=> rev.id.toString() !== req.query.id.toString()
    );
    let avg = 0;
    reviews.forEach(rev=> {
        avg += rev.rating;
    });
    const ratings = avg / reviews.length;
    const numOfReviews = reviews.length;
    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numOfReviews
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
    });
});