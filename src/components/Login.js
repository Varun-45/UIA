import React from 'react'

const Login = () => {

    function showRegistration() {
        document.querySelector('#loginForm').classList.add('hidden');
        document.querySelector('#registrationForm').classList.remove('hidden');
    }

    function showLogin() {
        document.querySelector('#loginForm').classList.remove('hidden');
        document.querySelector('#registrationForm').classList.add('hidden');
    }
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
                    <p class="text-right">Don't have an account? <a href="javascript:showRegistration()">Register here.</a></p>
                </div>


                <div id="registrationForm" class="card mr-auto ml-auto mt-4 p-4 hidden">
                    <h2 class="text-secondary text-center">Register</h2>
                    <form class="p-4 form">
                        <div class="form-group">
                            <label for="firstname">
                                First name
                            </label>
                            <input type="text" name="firstname" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="lastname">
                                Last name
                            </label>
                            <input type="text" name="lastname" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="username">
                                Username
                            </label>
                            <input type="text" name="username" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="email">
                                Email
                            </label>
                            <input type="email" name="email" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="password">
                                Password
                            </label>
                            <input type="text" name="password" class="form-control" />
                        </div>
                        <br />
                        <input type="submit" value="Register" class="btn btn-primary btn-block" />
                    </form>
                    <br />
                    <p class="text-right">Already have an account? <a href="javascript:showLogin()">Login here.</a></p>
                </div>

            </div>
        </div>
    )
}

export default Login