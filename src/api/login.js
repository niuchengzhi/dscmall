import ajax from "./ajax"

export const loginuser = (user_name, pass, captcha) => ajax("http://39.101.210.136:3000/api/v1/users/login", { user_name, login_password: pass, captcha }, "post")