import React from 'react';

export async function getAllProperties() {
    let mockData = require('../assets/data.json');
    return mockData;
}

export async function getPropertyDetail(id) {
    let mockData = id === 1 ? require('../assets/house1.json') : require('../assets/house2.json');
    return mockData;
}
