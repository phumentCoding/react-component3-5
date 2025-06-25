"use client"

import { useState } from "react"
import productsData from "../../db.json"

const ProductDetail = ({ productId = "2" }) => {
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Find the product by ID
  const product = productsData.products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="display-4 mb-4">Product Not Found</h1>
          <p className="lead text-muted">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  // Get category, subcategory, and brand names
  const category = productsData.categories.find((c) => c.id === product.category.toString())
  const subcategory = productsData.subcategories.find((s) => s.id === product.subcategory.toString())
  const brand = product.brand ? productsData.brands.find((b) => b.id === product.brand.toString()) : null

  // Get related products (same subcategory, excluding current product)
  const relatedProducts = productsData.products
    .filter((p) => p.subcategory === product.subcategory && p.id !== product.id)
    .slice(0, 4)

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.qty) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of product ${product.id} to cart`)
    alert(`Added ${quantity} ${product.name} to cart!`)
  }

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted)
  }

  const renderStars = (rating = 4) => {
    return [...Array(5)].map((_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? "text-warning" : "text-muted"}`}></i>
    ))
  }

  return (
    <div className="container my-5">
      {/* Back Button */}
      <button className="btn btn-link p-0 mb-4 text-decoration-none">
        <i className="fas fa-arrow-left me-2"></i>
        Back to Products
      </button>

      <div className="row mb-5">
        {/* Product Image */}
        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow-sm">
            <img
              src={product.image || "/placeholder.svg?height=500&width=500"}
              alt={product.name}
              className="card-img-top"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="col-lg-6">
          <div className="mb-3">
            {brand && <span className="badge bg-secondary me-2">{brand.name}</span>}
            <span className="badge bg-outline-primary me-2">{category?.name}</span>
            <span className="badge bg-outline-info">{subcategory?.name}</span>
          </div>

          <h1 className="display-5 fw-bold mb-3">{product.name}</h1>

          <div className="d-flex align-items-center mb-3">
            <div className="me-3">{renderStars()}</div>
            <small className="text-muted">(4.0)</small>
          </div>

          <p className="lead text-muted mb-4">{product.discription}</p>

          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="display-6 fw-bold text-primary mb-0">${product.price}</h2>
              <span className={`badge ${product.qty > 0 ? "bg-success" : "bg-danger"}`}>
                {product.qty > 0 ? `${product.qty} in stock` : "Out of stock"}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="d-flex align-items-center mb-4">
              <label className="form-label me-3 mb-0 fw-semibold">Quantity:</label>
              <div className="input-group" style={{ width: "150px" }}>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <input type="text" className="form-control text-center" value={quantity} readOnly />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.qty}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-3 mb-4">
              <button
                className="btn btn-primary btn-lg flex-fill"
                onClick={handleAddToCart}
                disabled={product.qty === 0}
              >
                <i className="fas fa-shopping-cart me-2"></i>
                Add to Cart
              </button>
              <button
                className={`btn btn-lg ${isWishlisted ? "btn-danger" : "btn-outline-danger"}`}
                onClick={handleWishlistToggle}
              >
                <i className={`${isWishlisted ? "fas" : "far"} fa-heart`}></i>
              </button>
            </div>
          </div>

          <hr />

          {/* Product Features */}
          <div className="mt-4">
            <h4 className="fw-semibold mb-3">Product Features</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>
                High-quality materials and construction
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>
                Compatible with multiple devices
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>
                1-year manufacturer warranty
              </li>
              <li className="mb-2">
                <i className="fas fa-check text-success me-2"></i>
                Free shipping on orders over $50
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-5">
          <h2 className="display-6 fw-bold mb-4">Related Products</h2>
          <div className="row">
            {relatedProducts.map((relatedProduct) => {
              const relatedBrand = relatedProduct.brand
                ? productsData.brands.find((b) => b.id === relatedProduct.brand.toString())
                : null

              return (
                <div key={relatedProduct.id} className="col-lg-3 col-md-6 mb-4">
                  <div className="card h-100 shadow-sm border-0 product-card">
                    <div className="position-relative overflow-hidden">
                      <img
                        src={relatedProduct.image || "/placeholder.svg?height=250&width=250"}
                        alt={relatedProduct.name}
                        className="card-img-top product-image"
                        style={{ height: "250px", objectFit: "cover", transition: "transform 0.3s" }}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      {relatedBrand && (
                        <span className="badge bg-secondary mb-2 align-self-start">{relatedBrand.name}</span>
                      )}
                      <h5 className="card-title fw-semibold">{relatedProduct.name}</h5>
                      <p className="card-text text-muted small flex-grow-1">{relatedProduct.discription}</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <span className="h5 fw-bold text-primary mb-0">${relatedProduct.price}</span>
                        <button className="btn btn-outline-primary btn-sm">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <style jsx>
        {`
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
        .product-card {
          transition: box-shadow 0.3s ease;
        }
        .product-card:hover {
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
      `}
      </style>
    </div>
  )
}

export default ProductDetail
