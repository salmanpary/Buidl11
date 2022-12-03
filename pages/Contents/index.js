
function SelectPlayers() {
  const events = [
    {
      name: "Event 1",
      date: "19/02/2022",
      winnings: 50000,
      entry: 149,
      spotsleft: 1205,
    },
    {
      name: "Event 2",
      date: "19/02/2022",
      winnings: 50000,
      entry: 149,
      spotsleft: 8576,
    },
    {
      name: "Event 3",
      date: "19/02/2022",
      winnings: 50000,
      entry: 149,
      spotsleft: 5748,
    },
    {
      name: "Event 4",
      date: "19/02/2022",
      winnings: 50000,
      entry: 149,
      spotsleft: 1889,
    },
    
  ];
  return (
    <div className="flex  overflow-hidden container-1">
      <div className="Navbar w-64 bg-slate-500">

      </div>

      <div className="h-screen flex flex-col ">
        <h1 className="justify-start ml-12 my-8 font-bold text-3xl">Contests</h1>
        <div className="list-container ">
          <h2 className="text-center mt-8 mb-8">Select a contest to join</h2>
          <div className=" flex flex-wrap ml-12">
            {events.map((event) => {
              return (
                <div className="event-card w-[24rem] h-40 bg-slate-500 m-2 rounded-2xl flex justify-between">
                  <div className="left flex flex-col ml-3 mt-2">
                    <span className="font-semibold text-white my-2 mx-1">{event.name}</span>
                    <span className="text-white font-bold m-1">{event.winnings}</span>
                    <span className="text-white font-medium m-1">{event.spotsleft} Spots left</span>
                    <span className="text-white font-medium m-1">{event.date}</span>
                  </div>
                  <div className="right flex mr-3 mt-2 justify-center align-middle">
                    <div className=" bg-slate-400 rounded-xl lex h-8 justify-center ">
                      <h2>{event.entry} Rs</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPlayers;
