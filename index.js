const test = () => {
    let selectedFile = document.getElementById("input").files[0];
    console.log(selectedFile);
    let url = "http://localhost:3000/upload";
    const data = new FormData();
    data.append("image", selectedFile);
    fetch(url, {
            method: "POST",
            body: data,
        })
        .then((response) => console.log("Success:"))
        .catch((error) => console.error("Error:"));
};