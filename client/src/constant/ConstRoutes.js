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
    success : {
        url : () => `/checkout/success`,
        path : '/checkout/success'
    },
    unsuccess : {
        url : () => `/checkout/cancel`,
        path :  `/checkout/cancel`,
    }

}