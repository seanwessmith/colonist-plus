import { JSDOM } from "jsdom";

const html = `
<tbody id="lobby_center_rooms_table_body">
  <tr id="jJx8" class="">
    <td class="" id="">Base</td>
    <td class="" id="">Gold Rush</td>
    <td class="" id="">Very Fast</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">yeet7766 Karma:
            16/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">Blondemoment
            Karma: 16/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
      </div>
    </td>
  </tr>
  <tr id="uQZh" class="">
    <td class="" id="">Base</td>
    <td class="" id="">Gold Rush</td>
    <td class="" id="">Very Fast</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">Saied6740 Karma:
            20/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
      </div>
    </td>
  </tr>
  <tr id="SRsS" class="">
    <td class="" id="">Cities &amp; Knights</td>
    <td class="" id="">Base Random</td>
    <td class="" id="">Very Fast</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="icon_crown"
            src="/dist/images/icon_crown.svg?v174"><span class="tooltipmediumtext_left" id="">Emily303 Karma:
            18/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">Chan1284 Karma:
            19/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">Whitethorn01
            Karma: 15/20</span></div>
      </div>
    </td>
  </tr>
  <tr id="RuiX" class="">
    <td class="" id="">Base</td>
    <td class="" id="">Base</td>
    <td class="" id="">Fast</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">Enzyme Karma:
            19/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">ThiccB Karma:
            16/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">bakereh Karma:
            20/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
      </div>
    </td>
  </tr>
  <tr id="XNr8" class="">
    <td class="" id="">Base</td>
    <td class="" id="">Base</td>
    <td class="" id="">Very Fast</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">jenatulls Karma:
            20/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">cheekadese
            Karma: 20/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">Tinyp2 Karma:
            20/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
      </div>
    </td>
  </tr>
  <tr id="L7Mp" class="">
    <td class="" id="">Base</td>
    <td class="" id="">Base</td>
    <td class="" id="">Very Fast</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Christmas"
            src="/dist/images/icon_christmas_hat.svg?v174"><span class="tooltipmediumtext_left" id="">Goku17 Karma:
            19/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">dzanzer Karma:
            14/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
      </div>
    </td>
  </tr>
  <tr id="zUnd" class="">
    <td class="" id="">Base</td>
    <td class="" id="">Base</td>
    <td class="" id="">Very Fast</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">Meir1886 Karma:
            19/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
      </div>
    </td>
  </tr>
  <tr id="yyn3" class="">
    <td class="" id="">Base</td>
    <td class="" id="">Base</td>
    <td class="" id="">Very Fast</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">G0g0l0 Karma:
            20/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
      </div>
    </td>
  </tr>
  <tr id="fwzH" class="">
    <td class="" id="">Base</td>
    <td class="" id="">Base</td>
    <td class="" id="">Normal</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">mialechat Karma:
            3/6</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
      </div>
    </td>
  </tr>
  <tr id="G4NN" class="">
    <td class="" id="">Base</td>
    <td class="" id="">Base</td>
    <td class="" id="">Fast</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">Sharanjeet
            Karma: 18/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="Guest"
            src="/dist/images/icon_player.svg?v174" style="opacity: 0.5;"></div>
      </div>
    </td>
  </tr>
  <tr id="oquK" class="">
    <td class="" id="">Base</td>
    <td class="" id="">Base</td>
    <td class="" id="">Fast</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">Ezana4715 Karma:
            8/9</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">cheeks4wheat
            Karma: 10/10</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="bot"
            src="/dist/images/icon_bot.svg?v174"></div>
      </div>
    </td>
  </tr>
  <tr id="wxCY" class="">
    <td class="" id="">Base</td>
    <td class="" id="">Base</td>
    <td class="" id="">Very Fast</td>
    <td class="lobby_table_data_high_karma" id="">
      <div class="high_karma_icon" id=""></div>
    </td>
    <td class="lobby_table_data_players" id="">
      <div class="player_count" id="">
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">Moya4798 Karma:
            16/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">ColBatGuano
            Karma: 20/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">Deva3447 Karma:
            18/20</span></div>
        <div class="tooltip_container" id=""><img class="tooltip_container" id="" alt="User"
            src="/dist/images/icon_player_loggedin.svg?v174"><span class="tooltipmediumtext_left" id="">boolian Karma:
            16/20</span></div>
      </div>
    </td>
  </tr>
</tbody>`;

function filterTable(html: string) {
  const document = JSDOM.fragment(html);
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
    filterTable(html);
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

const main = async () => {
  injectElements();
  filterTable(html);
};
main();
