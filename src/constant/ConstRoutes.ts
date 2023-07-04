export const ConstRoutes = {
    home:{
        url : () => `/`,
        path : '/'
    },
    detail:{
        url : (id : string) => `/detail/${id}`,
        path : '/detail/:id'
    },
}