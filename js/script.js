const code = `>>> print("Hello Snake Code")

Hello Snake Code

>>> for i in range(5):
...     print(i)

0
1
2
3
4`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){

    if(i < code.length){

        typing.textContent += code.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

    }

}

typeWriter();

// =================================
// DANE GRACZA NA STRONIE KURSÓW
// =================================

const courseNickname = document.getElementById("courseNickname");
const courseLevel = document.getElementById("courseLevel");

if (courseNickname) {
    courseNickname.innerHTML = "🐍 " + userData.nickname;
}

if (courseLevel) {
    courseLevel.innerHTML = "Poziom " + userData.level;
}


if(nicknameText){

    nicknameText.innerHTML =
    userData.nickname;

}
function openCourse(courseId){


localStorage.setItem(
"currentCourse",
courseId
);


window.location.href =
"kurs.html";


}