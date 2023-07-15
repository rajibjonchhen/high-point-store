export const ConstRoutes = {
    home : {
        url : () => `/`,
        path : '/'
    },
    detail : {
        url : (id) => `/detail/${id}`,
        path : '/detail/:id'
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