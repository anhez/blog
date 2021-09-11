import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
    
    Route.on('/login').render('login')
    Route.on('/register').render('register')

    Route.post('/login', 'AuthController.login')
    Route.post('/register', 'AuthController.register')
    Route.post('/logout', 'AuthController.logout')

    
    Route.group(() => {
        Route.resource('posts', 'PostsController').as('articles')
    }).prefix('/api').middleware('auth')



    // SPA route
    Route.on('*').render('admin')
}).prefix('/admin')

