import React from 'react'

const Slider = () => {
    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://static.vecteezy.com/system/resources/previews/048/909/710/non_2x/amazed-young-woman-shopaholic-holding-colorful-shopping-bags-and-look-amused-at-next-shop-buying-things-in-store-standing-over-blue-background-photo.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://static.vecteezy.com/system/resources/previews/048/909/710/non_2x/amazed-young-woman-shopaholic-holding-colorful-shopping-bags-and-look-amused-at-next-shop-buying-things-in-store-standing-over-blue-background-photo.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://static.vecteezy.com/system/resources/previews/048/909/710/non_2x/amazed-young-woman-shopaholic-holding-colorful-shopping-bags-and-look-amused-at-next-shop-buying-things-in-store-standing-over-blue-background-photo.jpg" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider