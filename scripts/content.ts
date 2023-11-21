function filterTable() {
  const gameSpeedFilter = document.getElementById("gameSpeedFilter")?.innerHTML;
  const table = document.getElementById("lobby_center_rooms_table_body");

  if (!table || !gameSpeedFilter) return;

  const tr = table.getElementsByTagName("tr");

  if (!tr) return;

  for (let i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td")[2]; // Assuming the 3rd column is game speed
    if (td) {
      const textValue = td.textContent || td.innerText;
      if (textValue === gameSpeedFilter || gameSpeedFilter === "All") {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function injectElements() {
  // Create the select element
  const select = document.createElement("select");
  select.id = "gameSpeedFilter";
  select.onchange = () => {
    filterTable();
  };

  // Add options to the select element
  const options = ["All", "Very Fast", "Fast", "Normal"];
  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText;
    option.text = optionText;
    select.appendChild(option);
  });

  // Insert the select element into the DOM
  // For example, before the table
  const table = document.getElementById("lobby_center_rooms_table_body");
  table?.parentNode?.insertBefore(select, table);
}

injectElements();
