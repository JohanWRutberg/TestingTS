function getGroups(): Promise<{ id: number; groupName: string }[]> {
  return new Promise((resolve) => {
    // Simulerar ett API-anrop
    setTimeout(() => {
      const groups = [
        {
          id: 1,
          groupName: "Hajarna"
        },
        {
          id: 2,
          groupName: "Valarna"
        },
        {
          id: 3,
          groupName: "Zebrorna"
        }
      ];

      resolve(groups);
    }, 1000); // Simulera en fördröjning på 1 sekund
  });
}

export default getGroups;
