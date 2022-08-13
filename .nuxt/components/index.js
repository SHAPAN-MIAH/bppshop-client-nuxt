export const ProductsCollectionFashionProductDisplay = () => import('../..\\components\\ProductsCollection\\FashionProductDisplay.vue' /* webpackChunkName: "components/products-collection-fashion-product-display" */).then(c => wrapFunctional(c.default || c))
export const ProductsCollectionProductCard = () => import('../..\\components\\ProductsCollection\\ProductCard.vue' /* webpackChunkName: "components/products-collection-product-card" */).then(c => wrapFunctional(c.default || c))
export const ProductsDisplay = () => import('../..\\components\\ProductsCollection\\ProductsDisplay.vue' /* webpackChunkName: "components/products-display" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../..\\components\\Home\\Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const HomeCart = () => import('../..\\components\\Home\\HomeCart.vue' /* webpackChunkName: "components/home-cart" */).then(c => wrapFunctional(c.default || c))
export const HomeFooter = () => import('../..\\components\\Home\\HomeFooter.vue' /* webpackChunkName: "components/home-footer" */).then(c => wrapFunctional(c.default || c))
export const ProductDescription = () => import('../..\\components\\ProductDescripSpecifcReview\\ProductDescription.vue' /* webpackChunkName: "components/product-description" */).then(c => wrapFunctional(c.default || c))
export const ProductDesReviewMenuBar = () => import('../..\\components\\ProductDescripSpecifcReview\\ProductDesReviewMenuBar.vue' /* webpackChunkName: "components/product-des-review-menu-bar" */).then(c => wrapFunctional(c.default || c))
export const ProductReview = () => import('../..\\components\\ProductDescripSpecifcReview\\ProductReview.vue' /* webpackChunkName: "components/product-review" */).then(c => wrapFunctional(c.default || c))
export const ProductSellerDetails = () => import('../..\\components\\ProductDescripSpecifcReview\\ProductSellerDetails.vue' /* webpackChunkName: "components/product-seller-details" */).then(c => wrapFunctional(c.default || c))
export const ProductSpecification = () => import('../..\\components\\ProductDescripSpecifcReview\\ProductSpecification.vue' /* webpackChunkName: "components/product-specification" */).then(c => wrapFunctional(c.default || c))
export const SharedComponentCartView = () => import('../..\\components\\SharedComponent\\cartView.vue' /* webpackChunkName: "components/shared-component-cart-view" */).then(c => wrapFunctional(c.default || c))
export const SharedComponentCategoryNav = () => import('../..\\components\\SharedComponent\\categoryNav.vue' /* webpackChunkName: "components/shared-component-category-nav" */).then(c => wrapFunctional(c.default || c))
export const SharedComponentCategorySlider = () => import('../..\\components\\SharedComponent\\categorySlider.vue' /* webpackChunkName: "components/shared-component-category-slider" */).then(c => wrapFunctional(c.default || c))
export const SharedComponentFooter = () => import('../..\\components\\SharedComponent\\footer.vue' /* webpackChunkName: "components/shared-component-footer" */).then(c => wrapFunctional(c.default || c))
export const SharedComponentNav = () => import('../..\\components\\SharedComponent\\Nav.vue' /* webpackChunkName: "components/shared-component-nav" */).then(c => wrapFunctional(c.default || c))
export const SharedComponentSidebar = () => import('../..\\components\\SharedComponent\\sidebar.vue' /* webpackChunkName: "components/shared-component-sidebar" */).then(c => wrapFunctional(c.default || c))
export const SharedComponentWishList = () => import('../..\\components\\SharedComponent\\wishList.vue' /* webpackChunkName: "components/shared-component-wish-list" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
