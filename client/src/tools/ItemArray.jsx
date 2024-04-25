import { useState, useEffect } from "react";

// import { useItem } from "../contexts/ItemContext";  import du context

function ItemArray() {
  const [weaponStuff, setWeaponStuff] = useState(0);
  const [shieldStuff, setShieldStuff] = useState(0);

  // const [weaponStuff,setWeaponStuff,shieldStuff,setShieldStuff] = useItem() constante du context

  async function getGear() {
    try {
      const weaponStuff = await Promise.all(
        attackStuff.map(async (item) => {
          return fetch(
            `https://eldenring.fanapis.com/api/weapons/${item.id}`
          ).then((res) => res.json());
        })
      );
      const shieldStuff = await Promise.all(
        defenseStuff.map(async (item) => {
          return fetch(
            `https://eldenring.fanapis.com/api/shields/${item.id}`
          ).then((res) => res.json());
        })
      );
      console.log(weaponStuff);
      console.log(shieldStuff);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getGear();
  }, []);

  const attackStuff = [
    {
      id: "17f69728e6al0i1peyh4scwxfhl357",
      name: "Nagakiba",
    },
    {
      id: "17f6953c2f2l0i1pltkmb7nxuvfxgo",
      name: "Weathered Straight Sword",
    },
    {
      id: "17f69d42419l0i1oujp0m1csaaqdanf",
      name: "Reduvia",
    },
  ];

  const defenseStuff = [
    {
      id: "17f699569f2l0i12e91gm212p52kz4",
      name: "Jellyfish Shield",
    },
    {
      id: "17f696cb3bal0i127cn7tiavj7t1u",
      name: "Marred Wooden Shield",
    },
  ];

  return (
    <div>
      {setWeaponStuff && <p>{weaponStuff.name}</p>}
      {shieldStuff.name}
    </div>
  );
}

export default ItemArray;
