import { useState, useEffect } from "react";

// import { useItem } from "../contexts/ItemContext";  import du context

function useItems() {
  const [weaponStuff, setWeaponStuff] = useState(0);
  const [shieldStuff, setShieldStuff] = useState(0);

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

  // const [weaponStuff,setWeaponStuff,shieldStuff,setShieldStuff] = useItem() constante du context

  async function getGear() {
    try {
      const weaponLoot = await Promise.all(
        attackStuff.map(async (item) =>
          fetch(`https://eldenring.fanapis.com/api/weapons/${item.id}`).then(
            (res) => res.json()
          )
        )
      );
      setWeaponStuff(weaponLoot.map((el) => el.data));

      const shieldLoot = await Promise.all(
        defenseStuff.map(async (item) =>
          fetch(`https://eldenring.fanapis.com/api/shields/${item.id}`).then(
            (res) => res.json()
          )
        )
      );
      setShieldStuff(shieldLoot.map((el) => el.data));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getGear();
  }, []);

  return {
    weaponStuff,
    shieldStuff,
  };
}

export default useItems;
