export const ConstRoutes = {
    home:{
        url : () => `/`,
        path : '/'
    },
    detail:{
        url : (id) => `/detail/${id}`,
        path : '/detail/:id'
    },
}