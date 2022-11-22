import React from 'react'

const Register = () => {
    return (
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
            <p class="text-right">Already have an account? <a href='/Login'>Login here.</a></p>
        </div>

    )
}

export default Register