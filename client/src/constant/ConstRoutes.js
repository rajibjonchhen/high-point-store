export const ConstRoutes = {
    home : {
        url : () => `/`,
        path : '/'
    },
    itemDetail : {
        url : (id) => `/detail/${itemId}`,
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