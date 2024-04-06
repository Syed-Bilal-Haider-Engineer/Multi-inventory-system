const catchAsyncError = (theFunc) => (res,req,next) => {
Promise.resolve(theFunc(req,res,next)).catch(next);
}
export default catchAsyncError;