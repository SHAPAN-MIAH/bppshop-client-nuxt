<template>
<div class="sellerDetails-sections">
    <div class="seller-heading-content">
        <img src="/img/bestseller.png" alt="">
        <div class="sellerName-rating">
            <h2>Seller Name</h2>
            <p>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </p>
            <span>(120 Rating)</span>
        </div>
        <div class="time-res-rate">
            <div class="d-time">
                <h2>Delivery Time</h2>
                <h3>100%</h3>
            </div>
            <div class="res">
                <h2>Response</h2>
                <h3>100%</h3>
            </div>
            <div class="rate">
                <h2>Rating</h2>
                <h3>95%</h3>
            </div>
        </div>
    </div>
    <div class="location-contact-container">
        <p><i class="bi bi-geo-alt"></i> <strong>Address :</strong>  17, Alhaz Samsuddin Mansion (9th Floor), Moghbazar, New Easkaton, Ramna, Dhaka-1217</p>
        <p><i class="bi bi-telephone"></i> <strong>Contact Number :</strong>  09678822444</p>
    </div>

    <p class="seller-detail-text">
        Supreme Seller is the world famous seller for quality and service classified by and how they are connected residences and land. Connected residences owned by a single entity leased out, or owned separately with an agreement covering the either a single family or multifamily structure that is available for occupation or for non-business purposes. relationship between units and common areas. Different types of housing tenure can be used for the same physical type.
    </p>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sellerDetails-sections {
    font-family: "Rajdhani", sans-serif;
    width: 75%;
    margin: auto;
    padding: 20px 0px;
}

.seller-heading-content {
    display: flex;
}

.seller-heading-content img {
    width: 140px;
}

.sellerName-rating {
    margin-top: 12px;
}
.sellerName-rating p{
    color: #EF8341;
    margin: 5px 0px;
}
.sellerName-rating h2{
    color: #6d6d6d;
}
.time-res-rate{
    display: flex;
    margin-left: 200px;
    color: gray;
}
.time-res-rate h2{
    color: #6d6d6d;
    margin-bottom: 7px;
}
.time-res-rate h3{
    font-weight: 600;
}

.d-time, .res, .rate{
    padding: 12px 20px;
}

.location-contact-container{
    margin-top: 20px;
    
}
.location-contact-container p i{
    color: #EF8341;
    font-size: 20px;
}
.location-contact-container p strong{
    color: #6d6d6d;
    font-size: 20px;
}
.location-contact-container p{
    color: #6d6d6d;
    font-size: 18px;
}
.seller-detail-text{
    margin: 30px 0px;
}
</style>
