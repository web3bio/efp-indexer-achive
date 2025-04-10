//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EFPAccountMetadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const efpAccountMetadataAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'proxy', internalType: 'address', type: 'address' }],
    name: 'addProxy',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'ens', internalType: 'contract ENS', type: 'address' },
      { name: 'claimant', internalType: 'address', type: 'address' }
    ],
    name: 'claimReverseENS',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'key', internalType: 'string', type: 'string' }
    ],
    name: 'getValue',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'keys', internalType: 'string[]', type: 'string[]' }
    ],
    name: 'getValues',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'proxy', internalType: 'address', type: 'address' }],
    name: 'isProxy',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'proxy', internalType: 'address', type: 'address' }],
    name: 'removeProxy',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'ens', internalType: 'contract ENS', type: 'address' },
      { name: 'name', internalType: 'string', type: 'string' }
    ],
    name: 'setReverseENS',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'setValue',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'setValueForAddress',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'records',
        internalType: 'struct IEFPAccountMetadata.KeyValue[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' }
        ]
      }
    ],
    name: 'setValues',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address' },
      {
        name: 'records',
        internalType: 'struct IEFPAccountMetadata.KeyValue[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' }
        ]
      }
    ],
    name: 'setValuesForAddress',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: []
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      }
    ],
    name: 'OwnershipTransferred'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Paused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proxy',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'ProxyAdded'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proxy',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'ProxyRemoved'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Unpaused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'addr', internalType: 'address', type: 'address', indexed: true },
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'value', internalType: 'bytes', type: 'bytes', indexed: false }
    ],
    name: 'UpdateAccountMetadata'
  }
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EFPListMinter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const efpListMinterAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_registryAddress', internalType: 'address', type: 'address' },
      {
        name: '_accountMetadataAddress',
        internalType: 'address',
        type: 'address'
      },
      { name: '_listRecordsL1', internalType: 'address', type: 'address' }
    ]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'accountMetadata',
    outputs: [
      {
        name: '',
        internalType: 'contract IEFPAccountMetadata',
        type: 'address'
      }
    ]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'ens', internalType: 'contract ENS', type: 'address' },
      { name: 'claimant', internalType: 'address', type: 'address' }
    ],
    name: 'claimReverseENS',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }]
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'listStorageLocation', internalType: 'bytes', type: 'bytes' }],
    name: 'easyMint',
    outputs: []
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'listStorageLocation', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'easyMintTo',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'listRecordsL1',
    outputs: [{ name: '', internalType: 'contract IEFPListRecords', type: 'address' }]
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'listStorageLocation', internalType: 'bytes', type: 'bytes' }],
    name: 'mintNoMeta',
    outputs: []
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'listStorageLocation', internalType: 'bytes', type: 'bytes' }],
    name: 'mintPrimaryListNoMeta',
    outputs: []
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'listStorageLocation', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'mintToNoMeta',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IEFPListRegistry_ERC721',
        type: 'address'
      }
    ]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'ens', internalType: 'contract ENS', type: 'address' },
      { name: 'name', internalType: 'string', type: 'string' }
    ],
    name: 'setReverseENS',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: []
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      }
    ],
    name: 'OwnershipTransferred'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Paused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Unpaused'
  }
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EFPListRecords
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const efpListRecordsAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'op', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'applyListOp',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'ops', internalType: 'bytes[]', type: 'bytes[]' }
    ],
    name: 'applyListOps',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'claimListManager',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'manager', internalType: 'address', type: 'address' }
    ],
    name: 'claimListManagerForAddress',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'ens', internalType: 'contract ENS', type: 'address' },
      { name: 'claimant', internalType: 'address', type: 'address' }
    ],
    name: 'claimReverseENS',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'getAllListOps',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'getListManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'getListOp',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'getListOpCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'end', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'getListOpsInRange',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'getListUser',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'key', internalType: 'string', type: 'string' }
    ],
    name: 'getMetadataValue',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'keys', internalType: 'string[]', type: 'string[]' }
    ],
    name: 'getMetadataValues',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'listOps',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'manager', internalType: 'address', type: 'address' }
    ],
    name: 'setListManager',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'user', internalType: 'address', type: 'address' }
    ],
    name: 'setListUser',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'setMetadataValue',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      {
        name: 'records',
        internalType: 'struct IEFPListMetadata.KeyValue[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' }
        ]
      }
    ],
    name: 'setMetadataValues',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      {
        name: 'records',
        internalType: 'struct IEFPListMetadata.KeyValue[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' }
        ]
      },
      { name: 'ops', internalType: 'bytes[]', type: 'bytes[]' }
    ],
    name: 'setMetadataValuesAndApplyListOps',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'ens', internalType: 'contract ENS', type: 'address' },
      { name: 'name', internalType: 'string', type: 'string' }
    ],
    name: 'setReverseENS',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: []
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'op', internalType: 'bytes', type: 'bytes', indexed: false }
    ],
    name: 'ListOp'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      }
    ],
    name: 'OwnershipTransferred'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Paused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Unpaused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'value', internalType: 'bytes', type: 'bytes', indexed: false }
    ],
    name: 'UpdateListMetadata'
  },
  {
    type: 'error',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'manager', internalType: 'address', type: 'address' }
    ],
    name: 'SlotAlreadyClaimed'
  }
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EFPListRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const efpListRegistryAbi = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'approve',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'ens', internalType: 'contract ENS', type: 'address' },
      { name: 'claimant', internalType: 'address', type: 'address' }
    ],
    name: 'claimReverseENS',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'explicitOwnershipOf',
    outputs: [
      {
        name: '',
        internalType: 'struct IERC721A.TokenOwnership',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint64', type: 'uint64' },
          { name: 'burned', internalType: 'bool', type: 'bool' },
          { name: 'extraData', internalType: 'uint24', type: 'uint24' }
        ]
      }
    ]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' }],
    name: 'explicitOwnershipsOf',
    outputs: [
      {
        name: '',
        internalType: 'struct IERC721A.TokenOwnership[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint64', type: 'uint64' },
          { name: 'burned', internalType: 'bool', type: 'bool' },
          { name: 'extraData', internalType: 'uint24', type: 'uint24' }
        ]
      }
    ]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getListStorageLocation',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getMaxMintBatchSize',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getMintState',
    outputs: [
      {
        name: '',
        internalType: 'enum IEFPListRegistry.MintState',
        type: 'uint8'
      }
    ]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getPriceOracle',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' }
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'listStorageLocation', internalType: 'bytes', type: 'bytes' }],
    name: 'mint',
    outputs: []
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'quantity', internalType: 'uint256', type: 'uint256' }],
    name: 'mintBatch',
    outputs: []
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'quantity', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'mintBatchTo',
    outputs: []
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'listStorageLocation', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'mintTo',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: []
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'safeTransferFrom',
    outputs: []
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'safeTransferFrom',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' }
    ],
    name: 'setApprovalForAll',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'listStorageLocation', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'setListStorageLocation',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_maxMintBatchSize', internalType: 'uint256', type: 'uint256' }],
    name: 'setMaxMintBatchSize',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: '_mintState',
        internalType: 'enum IEFPListRegistry.MintState',
        type: 'uint8'
      }
    ],
    name: 'setMintState',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'priceOracle_', internalType: 'address', type: 'address' }],
    name: 'setPriceOracle',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'ens', internalType: 'contract ENS', type: 'address' },
      { name: 'name', internalType: 'string', type: 'string' }
    ],
    name: 'setReverseENS',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'tokenURIProvider_', internalType: 'address', type: 'address' }],
    name: 'setTokenURIProvider',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'tokenURIProvider',
    outputs: [{ name: '', internalType: 'contract ITokenURIProvider', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokensOfOwner',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'stop', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'tokensOfOwnerIn',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'transferFrom',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address payable', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'withdraw',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      }
    ],
    name: 'OwnershipTransferred'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true
      }
    ],
    name: 'Transfer'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Unpaused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true
      },
      {
        name: 'listStorageLocation',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false
      }
    ],
    name: 'UpdateListStorageLocation'
  },
  { type: 'error', inputs: [], name: 'ApprovalCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'ApprovalQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'BalanceQueryForZeroAddress' },
  { type: 'error', inputs: [], name: 'InvalidQueryRange' },
  { type: 'error', inputs: [], name: 'MintERC2309QuantityExceedsLimit' },
  { type: 'error', inputs: [], name: 'MintToZeroAddress' },
  { type: 'error', inputs: [], name: 'MintZeroQuantity' },
  { type: 'error', inputs: [], name: 'OwnerQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'OwnershipNotInitializedForExtraData' },
  { type: 'error', inputs: [], name: 'TransferCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'TransferFromIncorrectOwner' },
  { type: 'error', inputs: [], name: 'TransferToNonERC721ReceiverImplementer' },
  { type: 'error', inputs: [], name: 'TransferToZeroAddress' },
  { type: 'error', inputs: [], name: 'URIQueryForNonexistentToken' }
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IEFPListRegistry_ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iefpListRegistryErc721Abi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getListStorageLocation',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getMaxMintBatchSize',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getMintState',
    outputs: [
      {
        name: '',
        internalType: 'enum IEFPListRegistry.MintState',
        type: 'uint8'
      }
    ]
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'listStorageLocation', internalType: 'bytes', type: 'bytes' }],
    name: 'mint',
    outputs: []
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'quantity', internalType: 'uint256', type: 'uint256' }],
    name: 'mintBatch',
    outputs: []
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'quantity', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'mintBatchTo',
    outputs: []
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'listStorageLocation', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'mintTo',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'listStorageLocation', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'setListStorageLocation',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_maxMintBatchSize', internalType: 'uint256', type: 'uint256' }],
    name: 'setMaxMintBatchSize',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: '_mintState',
        internalType: 'enum IEFPListRegistry.MintState',
        type: 'uint8'
      }
    ],
    name: 'setMintState',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true
      },
      {
        name: 'listStorageLocation',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false
      }
    ],
    name: 'UpdateListStorageLocation'
  }
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ListMetadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const listMetadataAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'claimListManager',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'manager', internalType: 'address', type: 'address' }
    ],
    name: 'claimListManagerForAddress',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'getListManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'getListUser',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'key', internalType: 'string', type: 'string' }
    ],
    name: 'getMetadataValue',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'keys', internalType: 'string[]', type: 'string[]' }
    ],
    name: 'getMetadataValues',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'manager', internalType: 'address', type: 'address' }
    ],
    name: 'setListManager',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'user', internalType: 'address', type: 'address' }
    ],
    name: 'setListUser',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'setMetadataValue',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      {
        name: 'records',
        internalType: 'struct IEFPListMetadata.KeyValue[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' }
        ]
      }
    ],
    name: 'setMetadataValues',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: []
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      }
    ],
    name: 'OwnershipTransferred'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Paused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Unpaused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'value', internalType: 'bytes', type: 'bytes', indexed: false }
    ],
    name: 'UpdateListMetadata'
  },
  {
    type: 'error',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'manager', internalType: 'address', type: 'address' }
    ],
    name: 'SlotAlreadyClaimed'
  }
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ListRecords
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const listRecordsAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'op', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'applyListOp',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'ops', internalType: 'bytes[]', type: 'bytes[]' }
    ],
    name: 'applyListOps',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'claimListManager',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'manager', internalType: 'address', type: 'address' }
    ],
    name: 'claimListManagerForAddress',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'getAllListOps',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'getListManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'getListOp',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'getListOpCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'end', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'getListOpsInRange',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'slot', internalType: 'uint256', type: 'uint256' }],
    name: 'getListUser',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'key', internalType: 'string', type: 'string' }
    ],
    name: 'getMetadataValue',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'keys', internalType: 'string[]', type: 'string[]' }
    ],
    name: 'getMetadataValues',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' }
    ],
    name: 'listOps',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }]
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: []
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }]
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'manager', internalType: 'address', type: 'address' }
    ],
    name: 'setListManager',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'user', internalType: 'address', type: 'address' }
    ],
    name: 'setListUser',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'key', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' }
    ],
    name: 'setMetadataValue',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      {
        name: 'records',
        internalType: 'struct IEFPListMetadata.KeyValue[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' }
        ]
      }
    ],
    name: 'setMetadataValues',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      {
        name: 'records',
        internalType: 'struct IEFPListMetadata.KeyValue[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' }
        ]
      },
      { name: 'ops', internalType: 'bytes[]', type: 'bytes[]' }
    ],
    name: 'setMetadataValuesAndApplyListOps',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: []
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: []
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'op', internalType: 'bytes', type: 'bytes', indexed: false }
    ],
    name: 'ListOp'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true
      }
    ],
    name: 'OwnershipTransferred'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Paused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false
      }
    ],
    name: 'Unpaused'
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'value', internalType: 'bytes', type: 'bytes', indexed: false }
    ],
    name: 'UpdateListMetadata'
  },
  {
    type: 'error',
    inputs: [
      { name: 'slot', internalType: 'uint256', type: 'uint256' },
      { name: 'manager', internalType: 'address', type: 'address' }
    ],
    name: 'SlotAlreadyClaimed'
  }
] as const
