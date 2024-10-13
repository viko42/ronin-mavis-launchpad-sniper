export const abi = [
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrDuplicatedAllowedUser",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrEnforcedLaunchPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrExpectedLaunchPause",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    name: "ErrFallbackFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrFeeExceedsMintPrice",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ErrHasValueWhileMintByERC20",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum ILaunchpadStructs.StageType",
        name: "expected",
        type: "uint8",
      },
    ],
    name: "ErrIncorrectConditionalType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum ILaunchpadStructs.StageType",
        name: "actual",
        type: "uint8",
      },
      {
        internalType: "enum ILaunchpadStructs.StageType",
        name: "expected",
        type: "uint8",
      },
    ],
    name: "ErrIncorrectStageType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
    ],
    name: "ErrInsufficientTxValue",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidAllowedUser",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidAmountMintablePerReqToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidCreator",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidCurrency",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidFeeBasicPoint",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidFeeParty",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidFeeRecipient",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sumSuppliesCondStg",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "launchSupply",
        type: "uint256",
      },
    ],
    name: "ErrInvalidLaunchSupply",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidMaxMintablePerWallet",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidMaxSupply",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidRequirementToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidSignerAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidStageIndex",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidStageLogicAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidStageTime",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidStageType",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidTierId",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrInvalidTokenStandard",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    name: "ErrLengthMismatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "limitPerWallet",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "remainMintable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintQuantity",
        type: "uint256",
      },
    ],
    name: "ErrLimitPerWalletExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "remainSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintQuantity",
        type: "uint256",
      },
    ],
    name: "ErrMaxSupplyExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "ErrMinterNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrMismatchMintQtyAndSumReqQty",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrNFTContractExisted",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrNFTContractNotExisted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    name: "ErrNotAllowedCallingAccessControl",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ErrNotOwnRequirementToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrNotZeroSupplyForPublicStage",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrStageEnded",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrStageNotStarted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sumReqQuantities",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualQuantity",
        type: "uint256",
      },
    ],
    name: "ErrSumReqQuantitiesInsufficient",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ErrTokenIdRedeemed",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrTooMuchConditionalStages",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrUnsupportedNFTInterface",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    name: "ErrZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrZeroLaunchSupply",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrZeroMintQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrZeroReqQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "MathOverflowedMulDiv",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "StringsInsufficientHexLength",
    type: "error",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "uint8",
        name: "stageIndex",
        type: "uint8",
      },
      {
        indexed: !1,
        internalType: "address[]",
        name: "allowUsers",
        type: "address[]",
      },
    ],
    name: "AllowUsersAdded",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "uint8",
        name: "stageIndex",
        type: "uint8",
      },
      {
        indexed: !1,
        internalType: "address[]",
        name: "allowUsers",
        type: "address[]",
      },
    ],
    name: "AllowUsersRemoved",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
    ],
    name: "LaunchPaused",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
    ],
    name: "LaunchUnpaused",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "enum ILaunchpadStructs.TokenStandard",
        name: "standard",
        type: "uint8",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "launchpadSupply",
        type: "uint256",
      },
      {
        indexed: !1,
        internalType: "bool",
        name: "allowCumulativeLimit",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "feeBps",
            type: "uint16",
          },
          {
            internalType: "enum ILaunchpadStructs.FeeParty",
            name: "party",
            type: "uint8",
          },
          {
            internalType: "uint72",
            name: "_reserved",
            type: "uint72",
          },
        ],
        indexed: !1,
        internalType: "struct ILaunchpadStructs.Allocation[]",
        name: "allocations",
        type: "tuple[]",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint64",
                name: "startTime",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "endTime",
                type: "uint64",
              },
              {
                internalType: "uint32",
                name: "maxMintablePerWallet",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "maxSupply",
                type: "uint32",
              },
              {
                internalType: "uint64",
                name: "_reserved",
                type: "uint64",
              },
            ],
            internalType: "struct ILaunchpadStructs.GeneralConfigStage",
            name: "config",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "currency",
                type: "address",
              },
              {
                internalType: "uint80",
                name: "mintPrice",
                type: "uint80",
              },
              {
                internalType: "uint16",
                name: "_reserved",
                type: "uint16",
              },
            ],
            internalType: "struct ILaunchpadStructs.PaymentInfo",
            name: "paymentInfo",
            type: "tuple",
          },
        ],
        indexed: !1,
        internalType: "struct ILaunchpadStructs.PublicStage",
        name: "publicStage",
        type: "tuple",
      },
      {
        indexed: !1,
        internalType: "enum ILaunchpadStructs.StageType[]",
        name: "stageTypes",
        type: "uint8[]",
      },
      {
        indexed: !1,
        internalType: "bytes[]",
        name: "stageDatas",
        type: "bytes[]",
      },
      {
        indexed: !1,
        internalType: "uint8[]",
        name: "stageIndexes",
        type: "uint8[]",
      },
    ],
    name: "LaunchpadDataAdded",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "enum ILaunchpadStructs.TokenStandard",
        name: "standard",
        type: "uint8",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "launchpadSupply",
        type: "uint256",
      },
      {
        indexed: !1,
        internalType: "bool",
        name: "allowCumulativeLimit",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "feeBps",
            type: "uint16",
          },
          {
            internalType: "enum ILaunchpadStructs.FeeParty",
            name: "party",
            type: "uint8",
          },
          {
            internalType: "uint72",
            name: "_reserved",
            type: "uint72",
          },
        ],
        indexed: !1,
        internalType: "struct ILaunchpadStructs.Allocation[]",
        name: "allocations",
        type: "tuple[]",
      },
    ],
    name: "LaunchpadDataUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "totalMintedPerWallet",
        type: "uint256",
      },
    ],
    name: "MintQuantityRecorded",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "mintQuantity",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMintAllPossible",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "stageIndex",
            type: "uint8",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        indexed: !1,
        internalType: "struct ILaunchpadStructs.MintParam",
        name: "param",
        type: "tuple",
      },
      {
        indexed: !1,
        internalType: "enum ILaunchpadStructs.StageType",
        name: "stageType",
        type: "uint8",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "actualPrice",
        type: "uint256",
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "actualMintQuantity",
        type: "uint256",
      },
      {
        indexed: !1,
        internalType: "uint256[]",
        name: "mintedIds",
        type: "uint256[]",
      },
      {
        indexed: !1,
        internalType: "uint256[]",
        name: "mintedAmounts",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        indexed: !1,
        internalType: "struct ILaunchpadStructs.PaymentShare[]",
        name: "shares",
        type: "tuple[]",
      },
    ],
    name: "MintSuccess",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "uint256",
        name: "launchId",
        type: "uint256",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "NFTContractUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "enum ILaunchpadStructs.StageType[]",
        name: "stageTypes",
        type: "uint8[]",
      },
      {
        indexed: !1,
        internalType: "bytes[]",
        name: "stageDatas",
        type: "bytes[]",
      },
      {
        indexed: !1,
        internalType: "uint8[]",
        name: "newStageIndexes",
        type: "uint8[]",
      },
    ],
    name: "NewStageInfoAdded",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: !0,
        internalType: "uint8",
        name: "stageIndex",
        type: "uint8",
      },
      {
        indexed: !0,
        internalType: "uint8",
        name: "tierId",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint80",
            name: "mintPrice",
            type: "uint80",
          },
          {
            internalType: "uint32",
            name: "mintableLimit",
            type: "uint32",
          },
          {
            internalType: "uint144",
            name: "_reserved",
            type: "uint144",
          },
        ],
        indexed: !1,
        internalType: "struct ILaunchpadStructs.UserTier",
        name: "userTier",
        type: "tuple",
      },
    ],
    name: "NewTierAdded",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "reqToken",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        indexed: !1,
        internalType: "uint256[]",
        name: "requestRedeemPerIds",
        type: "uint256[]",
      },
      {
        indexed: !1,
        internalType: "uint256[]",
        name: "actualRedeemedPerIds",
        type: "uint256[]",
      },
    ],
    name: "RequirementTokenRedeemed",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: !0,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: !0,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "uint8",
        name: "stageIndex",
        type: "uint8",
      },
      {
        indexed: !1,
        internalType: "bytes",
        name: "stageData",
        type: "bytes",
      },
    ],
    name: "StageInfoUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "enum ILaunchpadStructs.StageType[]",
        name: "stageTypes",
        type: "uint8[]",
      },
      {
        indexed: !1,
        internalType: "address[]",
        name: "logicAddrs",
        type: "address[]",
      },
    ],
    name: "StageLogicUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "newSwapForwarder",
        type: "address",
      },
    ],
    name: "SwapForwarderUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: !0,
        internalType: "uint8",
        name: "stageIndex",
        type: "uint8",
      },
      {
        indexed: !0,
        internalType: "uint8",
        name: "tierId",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint80",
            name: "mintPrice",
            type: "uint80",
          },
          {
            internalType: "uint32",
            name: "mintableLimit",
            type: "uint32",
          },
          {
            internalType: "uint144",
            name: "_reserved",
            type: "uint144",
          },
        ],
        indexed: !1,
        internalType: "struct ILaunchpadStructs.UserTier",
        name: "userTier",
        type: "tuple",
      },
    ],
    name: "TierInfoUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: !0,
        internalType: "uint8",
        name: "stageIndex",
        type: "uint8",
      },
      {
        indexed: !1,
        internalType: "uint8[]",
        name: "tierIds",
        type: "uint8[]",
      },
      {
        indexed: !1,
        internalType: "address[][]",
        name: "usersByTier",
        type: "address[][]",
      },
    ],
    name: "UsersAssignedToTier",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "wron",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "wronHelper",
        type: "address",
      },
    ],
    name: "WronConfigUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "mintQuantity",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMintAllPossible",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "stageIndex",
            type: "uint8",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct ILaunchpadStructs.MintParam",
        name: "param",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "getPriceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "actualPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestedPrice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "mintQuantity",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMintAllPossible",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "stageIndex",
            type: "uint8",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct ILaunchpadStructs.MintParam",
        name: "param",
        type: "tuple",
      },
    ],
    name: "mintPublic",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "trustedForwarder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "mintQuantity",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMintAllPossible",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "stageIndex",
            type: "uint8",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct ILaunchpadStructs.MintParam",
        name: "param",
        type: "tuple",
      },
    ],
    name: "mintAllowList",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    "inputs": [
      { "internalType": "address", "name": "nftContract", "type": "address" }
    ],
    "name": "getLaunchpadData",
    "outputs": [
      { "internalType": "address", "name": "creator", "type": "address" },
      {
        "internalType": "enum ILaunchpadStructs.TokenStandard",
        "name": "standard",
        "type": "uint8"
      },
      { "internalType": "uint256", "name": "launchSupply", "type": "uint256" },
      {
        "internalType": "bool",
        "name": "allowCumulativeLimit",
        "type": "bool"
      },
      {
        "components": [
          { "internalType": "address", "name": "recipient", "type": "address" },
          { "internalType": "uint16", "name": "feeBps", "type": "uint16" },
          {
            "internalType": "enum ILaunchpadStructs.FeeParty",
            "name": "party",
            "type": "uint8"
          },
          { "internalType": "uint72", "name": "_reserved", "type": "uint72" }
        ],
        "internalType": "struct ILaunchpadStructs.Allocation[]",
        "name": "allocs",
        "type": "tuple[]"
      },
      {
        "internalType": "uint256",
        "name": "latestStageIndex",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
