new bootstrap.Popover(
    document.querySelector("#log-in-btn-popover"),
    {
        html: true,
        placement: "bottom",
        sanitize: false,
        content: `
<label for="log-in-email-input" class="text-light">Email:</label><br>
<input type="email" class="form-control mb-1 p-1 px-2" id="log-in-email-input" placeholder="name@example.com">\

<label for="log-in-pw-input" class="text-light">Password:</label><br>
<input type="password" class="form-control p-1 px-2" id="log-in-pw-input" placeholder="********">
<a href="#" class="link-warning">Forgot Password?</a>
<button type="submit" class="btn btn-sm btn-warning mt-2 w-100">Log In</button>
`
    }
);