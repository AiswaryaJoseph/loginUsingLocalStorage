
// to get username
username=localStorage.getItem('USERNAME')//anu

head1.innerHTML=`Welcome ${username}`

// remove details on clicking logout
function logout(){
    localStorage.removeItem('USERNAME');
    window.location='./login.html'
}