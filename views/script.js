let fileinput = document.getElementById("file-input");
let imagecontainer = document.getElementById("image");
let numoffiles = document.getElementById("num-of-files");

function preview(){
    imagecontainer.innerHTML= "";
    numoffiles.textContent = `${fileinput.files.length} files selected`;

    for(i of fileinput.files){
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figcap =  document.createElement("figcaption");
    
    figcap.innerText= i.name;
    figure.appendChild(figcap);
    reader.onload=()=>{
        let img= document.createElement("img");
        img.setAttribute("src",reader.result);
        figure.insertBefore(img, figcap);
    }
    imagecontainer.appendChild(figure);
    reader.readAsDataURL(i);
}
}