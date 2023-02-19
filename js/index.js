function check() {
  var guest = document.getElementById("guest").value;

  window.alert(
    guest + "님, 저와 " + getCheckedCnt() + "개의 취향이 같으시네요!"
  );
  window.location.reload();
}

function getCheckedCnt() {
  const query = 'input[name="movie"]:checked';
  const selectedElements = document.querySelectorAll(query);

  return selectedElements.length;
}
