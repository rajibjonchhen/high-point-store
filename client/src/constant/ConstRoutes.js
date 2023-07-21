export const ConstRoutes = {
    home : {
        url : () => `/`,
        path : '/'
    },
    itemDetail : {
        url : (itemId) => `/detail/${itemId}`,
        path : '/detail/:itemId'
    },
    checkout : {
        url : () => `/checkout`,
        path : '/checkout'
    },
    confirmation : {
        url : () => `/checkout/success`,
        path : '/checkout/success'
    }

}