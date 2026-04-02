function validate(){
    let name = document.getElementById("name").value
    let age= document.getElementById("age").value
    let mail = document.getElementById("mail").value
    let city = document.getElementById("city").value
    let pass= document.getElementById("pass").value

    localStorage.setItem('username',name)
    localStorage.setItem('userage',age)
    localStorage.setItem('usercity',city)
    localStorage.setItem('useremail',mail)
    localStorage.setItem('userpassword',pass)
}
    let a = localStorage.getItem('username')
    document.write(a)
    document.write("&nbsp"," ")
    let b = localStorage.getItem('userage')
    document.write(b)
    document.write("&nbsp"," ")
    let c = localStorage.getItem('usercity')
    document.write(c)
    document.write("&nbsp"," ")
    let d = localStorage.getItem('useremail')
    document.write(d)

    document.write("&nbsp"," ")
    let e = localStorage.getItem('userpassword')
    document.write(e)

    function demo(){
        
        localStorage.clear()
    }