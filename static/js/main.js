const btnDelete = document.querySelectorAll(".btn-delete");

if (btnDelete) {
  console.log("aca 1 arriba  " + btnDelete);

  const btnArray = Array.from(btnDelete); // insert into array
  console.log("aca 2 arrayfrom " + btnArray);

  for (let i = 0; i < btnArray.length; i++) {
    const btn = btnArray[i]; // walks array
    console.log("aca 3  recorre " + btn);

    btn.addEventListener("click", elemet);
    function elemet(elem) {
      if (!confirm("are you sure you want to delete it?")) {
        elem.preventDefault();
      }
    }
  }
}
