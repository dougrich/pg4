module.exports = [
  {
    is: 'cave/goblin',
    graphExpand: {
      nodes: [
        { is: 'goblin-cave/entrance' },
        { is: 'goblin-cave/military' },
        { is: 'goblin-cave/residential' },
        { is: 'goblin-cave/horde' }
      ],
      connections: [
        { start: 0, end: 1, length: 1, spring: 2, visible: true },
        { start: 1, end: 2, length: 1, spring: 2, visible: true },
        { start: 1, end: 3, length: 4, spring: 2, visible: true }
      ],
      start: 0,
      end: 3
    }
  },
  {
    is: 'cave/goblin',
    graphExpand: {
      nodes: [
        { is: 'goblin-cave/entrance' },
        { is: 'goblin-cave/military' },
        { is: 'goblin-cave/commune' },
        { is: 'goblin-cave/residential' },
        { is: 'goblin-cave/residential' },
        { is: 'goblin-cave/horde' }
      ],
      connections: [
        { start: 0, end: 1, length: 1, spring: 2, visible: true },
        { start: 1, end: 2, length: 4, spring: 2, visible: true },
        { start: 2, end: 3, length: 1, spring: 2, visible: true },
        { start: 2, end: 4, length: 1, spring: 2, visible: true },
        { start: 2, end: 5, length: 1, spring: 2, visible: true }
      ],
      start: 0,
      end: 3
    }
  },
  {
    is: 'goblin-cave/entrance',
    graphExpand: {
      nodes: [
        { is: 'approach' },
        { is: 'goblin-cave/military/small' },
        { is: 'goblin-cave/military/small' },
        { is: 'goblin-cave/military/small' },
        { is: 'goblin-cave/military/large' }
      ],
      connections: [
        { start: 0, end: 1, length: 1, spring: 2, visible: true },
        { start: 0, end: 2, length: 1, spring: 2, visible: true },
        { start: 1, end: 2, length: 1, spring: 2, visible: true },
        { start: 0, end: 3, length: 1, spring: 2, visible: true },
        { start: 2, end: 3, length: 1, spring: 2, visible: true },
        { start: 0, end: 4, length: 1, spring: 2, visible: true },
        { start: 3, end: 4, length: 1, spring: 2, visible: true }
      ],
      start: 0,
      end: 4
    }
  },
  {
    is: 'goblin-cave/entrance',
    graphExpand: {
      nodes: [
        { is: 'approach' },
        { is: 'goblin-cave/military/large' },
        { is: 'goblin-cave/military/small' },
        { is: 'goblin-cave/military/small' },
        { is: 'goblin-cave/military/small' }
      ],
      connections: [
        { start: 0, end: 1, length: 3, spring: 2, visible: true },
        { start: 0, end: 2, length: 1, spring: 2, visible: true },
        { start: 0, end: 3, length: 1, spring: 2, visible: true },
        { start: 1, end: 2, length: 1, spring: 2, visible: true },
        { start: 1, end: 3, length: 1, spring: 2, visible: true },
        { start: 3, end: 4, length: 2, spring: 2, visible: true }
      ],
      start: 0,
      end: 1
    }
  },
  {
    is: 'goblin-cave/entrance',
    graphExpand: {
      nodes: [
        { is: 'approach' },
        { is: 'goblin-cave/military/large' },
        { is: 'goblin-cave/military/large' },
        { is: 'goblin-cave/military/small' },
        { is: 'goblin-cave/military/small' },
        { is: 'goblin-cave/military/small' },
        { is: 'goblin-cave/military/small' }
      ],
      connections: [
        { start: 0, end: 1, length: 3, spring: 2, visible: true },
        { start: 1, end: 2, length: 3, spring: 2, visible: true },
        { start: 0, end: 3, length: 1, spring: 2, visible: true },
        { start: 3, end: 4, length: 1, spring: 2, visible: true },
        { start: 4, end: 2, length: 1, spring: 2, visible: true },
        { start: 1, end: 5, length: 1, spring: 2, visible: true },
        { start: 1, end: 6, length: 1, spring: 2, visible: true },
      ],
      start: 0,
      end: 2
    }
  },
  {
    is: 'goblin-cave/military/small',
    value: {
      type: 'cave',
      size: 2,
      visible: true,
      name: 'Small Goblin Guard Post',
      description: '2d4 goblins are seated in the middle of this room playing with small carved bones. Lining the walls are small military equipment, tiny beds, and a hastily scrawled note from the warlord reminding guards that deserters will be killed and eaten.'
    }
  },
  {
    is: 'goblin-cave/military/large',
    value: {
      type: 'cave',
      size: 5,
      visible: true,
      name: 'Large Goblin Guard Post',
      description: 'This large room has a makeshift tower built in the middle around a pillar of rock, with tiny lookouts for goblins to shoot out of.'
    }
  },
  {
    is: 'goblin-cave/commune',
    value: {
      type: 'cave',
      size: 4,
      visible: true,
      name: 'Arena',
      description: 'The center of this room is occupied by a large, crudely dug pit surrounded by seats. Along the walls are colorful dresses, now in tatters, draped over the mounted heads of a local creatures almost like jerserys for sports teams.'
    }
  },
  {
    is: 'goblin-cave/residential',
    value: {
      type: 'cave',
      size: 4,
      visible: true,
      name: 'Goblin living quarters',
      description: 'Small wooden shacks are built against the walls of this cave and the stench of too many people living in close quarters almost knocks you over as you enter.'
    }
  },
  {
    is: 'goblin-cave/horde',
    value: {
      type: 'cave',
      size: 2,
      visible: true,
      name: 'Goblin Horde',
      description: 'On top of a table in the middle of the room is a pile of coins, glimmering jewels, and ornate trophies.'
    }
  },
  {
    is: 'approach',
    value: {
      type: 'cave',
      size: 5,
      visible: true,
      name: 'Rocky approach',
      description: 'Rocks scatter the approach to the entrance, making the terrain difficult to cross'
    }
  }
]