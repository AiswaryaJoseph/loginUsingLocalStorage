// redirect to home

function login(){
    window.location="./homePage.html"
    username=uname.value;
    console.log(username);//anu
    localStorage.setItem('USERNAME',username)
}