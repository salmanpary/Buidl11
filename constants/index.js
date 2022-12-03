

export const abi=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "teamName",
				"type": "string"
			}
		],
		"name": "addFantasyTeam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_playerIDs",
				"type": "uint256[]"
			}
		],
		"name": "addPlayerToFantasyTeam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_playerNames",
				"type": "string[]"
			}
		],
		"name": "addPlayerToGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bid",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "calculateTeamsScore",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gameBegins",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gameStops",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAdmin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "listPlayers",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "playersAddedToGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "captainID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "viceCaptainID",
				"type": "uint256"
			}
		],
		"name": "setCaptains",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "playerID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "runs",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "wickets",
				"type": "uint256"
			}
		],
		"name": "setplayerStats",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "teamSize",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "runMul",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "wicketMul",
				"type": "uint256"
			}
		],
		"name": "startGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
