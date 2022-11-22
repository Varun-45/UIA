import React from 'react'


const Login = () => {


    return (
        <div>

            <div class="container">


                <div id="loginForm" class="card mr-auto ml-auto mt-4 p-4">
                    <h2 class="text-secondary text-center">Login</h2>
                    <form class="p-4 form">
                        <div class="form-group">
                            <label for="username">
                                Username
                            </label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="password">
                                Password
                            </label>
                            <input type="password" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="rememberme">
                                Remember me
                            </label>
                            <input type="checkbox" class="ml-2" />
                        </div>
                        <br />
                        <input type="submit" value="Login" class="btn btn-primary btn-block" />
                    </form>
                    <br />
                    <p class="text-right">Don't have an account? <a href="/register">Register here.</a></p>
                </div>



            </div>
        </div>
    )
}

export default Login