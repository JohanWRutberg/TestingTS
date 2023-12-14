import getGroups from "./getGroups";

describe("getGroups", () => {
  it("should return an array of groups", async () => {
    const result = await getGroups();

    expect(result).toEqual([
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
    ]);
  });
});
