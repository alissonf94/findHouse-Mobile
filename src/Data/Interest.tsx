import imageHouse from "../images/house.png";

export interface Interest {
  name: string;
  data: string;
  hora: string;
  local: string;

}

export const Intereste: Interest[] = [
  {
    name: "Corretor: Alvaro Augusto",
    image: imageHouse,
    data: "10/11/2023",
    hora: "9:00 horas",
    local: "Casa no SerraVille"
  },
  {
    name: "Corretor: Miguel Coelho",
    image: imageHouse,
    data: "14/11/2023",
    hora: "15:00 horas",
    local: "Casa no Park Ville"

  },
];
