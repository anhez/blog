import { rules, schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
    public async register({ request, auth, response }) {
        const validationSchema = schema.create({
            name: schema.string({ trim: true }),
            email: schema.string({ trim: true }, [
                rules.email(),
                rules.maxLength(255),
                rules.unique({ table: 'users', column: 'email' }),
            ]),
            password: schema.string({ trim: true }, [
                rules.confirmed(),
            ])
        })

        const validatedData = await request.validate({
            schema: validationSchema,
        })

        const user = await User.create(validatedData)

        await auth.login(user)

        return response.redirect('/admin/home')
    }
    public async login({ request, auth, response }) {
        const email = request.input('email')
        const password = request.input('password')
        try {
            await auth.use('web').attempt(email, password)
            response.redirect('/dashboard')
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }
    public async logout({ auth, response }) {
        await auth.use('web').logout()
        response.redirect('/login')
    }
}
