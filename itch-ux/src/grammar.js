module.exports = [
  {
    is: 'stash-cave',
    graphExpand: {
      nodes: [
        { is: 'cave/entrance' },
        { is: 'cave/interior' },
        { is: 'cave/interior' },
        { is: 'cave/interior' },
        { is: 'cave/interior' },
        { is: 'cave/interior' },
        { is: 'cave/end' }
      ],
      connections: [
        { start: 0, end: 1, length: 10, spring: 5, visible: true },
        { start: 0, end: 2, length: 10, spring: 5, visible: true },
        { start: 1, end: 3, length: 10, spring: 5, visible: true },
        { start: 1, end: 2, length: 10, spring: 5, visible: true },
        { start: 1, end: 4, length: 10, spring: 5, visible: true },
        { start: 2, end: 3, length: 10, spring: 5, visible: true },
        { start: 2, end: 5, length: 10, spring: 5, visible: true },
        { start: 3, end: 4, length: 10, spring: 5, visible: true },
        { start: 3, end: 5, length: 10, spring: 5, visible: true },
        { start: 4, end: 6, length: 10, spring: 5, visible: true },
        { start: 4, end: 5, length: 10, spring: 5, visible: true },
        { start: 5, end: 6, length: 10, spring: 5, visible: true },
      ],
      start: 0,
      end: 6
    }
  },
  {
    is: 'cave/entrance',
    value: {
      type: 'cave',
      size: 5,
      name: 'The Approach',
      description: 'Two large cracks in the rock ahead of you invite you to explore this cave system further.'
    }
  },
  {
    is: 'cave/interior',
    value: {
      type: 'cave',
      size: 4,
      visible: true,
      name: 'Empty Caverns',
      description: 'You suspect these large caverns need more detail'
    }
  },
  {
    is: 'cave/end',
    value: {
      type: 'cave',
      size: 2,
      visible: true,
      name: 'Treasure!',
      description: 'Heaped on the floor of this small room are valuable possessions!'
    }
  }
]